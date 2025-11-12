"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Maximize2,
  Minimize2,
  Terminal,
  FileText,
  Folder,
} from "lucide-react";
import { experiences } from "@/lib/resume";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
import remarkGfm from "remark-gfm";

interface VSCodeExperienceViewerProps {
  isOpen: boolean;
  onClose: () => void;
  experienceIndex: number;
}

export function VSCodeExperienceViewer({
  isOpen,
  onClose,
  experienceIndex,
}: VSCodeExperienceViewerProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMaximized, setIsMaximized] = useState(false);
  const experience = experiences[experienceIndex];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Disable body scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      // Re-enable body scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const tabs = [
    {
      id: "overview",
      label: "experience.md",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "achievements",
      label: "achievements.js",
      icon: <Terminal className="w-4 h-4" />,
    },
    {
      id: "tech",
      label: "tech-stack.json",
      icon: <Folder className="w-4 h-4" />,
    },
  ];

  const markdownContent = `# ${experience.role} at ${experience.company}

Welcome to my professional journey at ${
    experience.company
  }! This role shaped my expertise in full-stack development and taught me the importance of scalable architecture.

## Duration
${experience.start} - ${experience.end}

## Location
📍 ${experience.location}

## Role Description
As a ${
    experience.role
  }, I led multiple high-impact projects that improved system performance and user experience across the board.

## Key Achievements

${experience.bullets
  .map((bullet, index) => `${index + 1}. ${bullet}`)
  .join("\n")}

## Impact
This role allowed me to grow as a developer while delivering measurable business value through innovative technical solutions.`;

  if (!isOpen) return null;

  const renderOverviewContent = () => (
    <div className="vscode-content w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="vscode-keyword text-2xl font-bold mb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="vscode-property text-xl font-semibold mb-3">
              {children}
            </h2>
          ),
          p: ({ children }) => <p className="text-gray-300 mb-3">{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-3 text-gray-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-3 text-gray-300">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          code: ({ node, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const inline =
              (node as any)?.position?.start?.line ===
              (node as any)?.position?.end?.line;
            return !inline && match ? (
              <SyntaxHighlighter
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                style={oneDark as any}
                language={match[1]}
                PreTag="div"
                className="rounded-md"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code
                className="bg-gray-800 px-1 py-0.5 rounded text-sm"
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );

  const renderAchievementsContent = () => (
    <div className="vscode-content w-full">
      {experience.bullets.map((bullet, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="vscode-line"
        >
          <span className="vscode-line-number">{index + 1}</span>
          <div>
            <span className="vscode-comment">{`// Achievement #${
              index + 1
            }`}</span>
            <br />
            <span className="vscode-keyword">const</span>{" "}
            <span className="vscode-property">achievement{index + 1}</span> ={" "}
            {"{"}
            <br />
            <span className="ml-4">
              <span className="vscode-property">description</span>:{" "}
              <span className="vscode-string">&quot;{bullet}&quot;</span>,
            </span>
            <br />
            <span className="ml-4">
              <span className="vscode-property">impact</span>:{" "}
              <span className="vscode-string">&quot;High&quot;</span>,
            </span>
            <br />
            <span className="ml-4">
              <span className="vscode-property">verified</span>:{" "}
              <span className="vscode-value">true</span>
            </span>
            <br />
            {"}"};
            <br />
            <br />
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderTechStackContent = () => {
    const techStack = experience?.techStack;
    return (
      <div className="vscode-content">
        <div className="vscode-line">
          <span className="vscode-line-number">1</span>
          <span className="vscode-comment">{`// Tech Stack Configuration`}</span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">2</span>
          <span className="vscode-keyword">const</span>{" "}
          <span className="vscode-property">projectTechStack</span> = {"{"}
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">3</span>
          <span className="ml-4">
            <span className="vscode-property">company</span>:{" "}
            <span className="vscode-string">
              &quot;{experience.company}&quot;
            </span>
            ,
          </span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">4</span>
          <span className="ml-4">
            <span className="vscode-property">role</span>:{" "}
            <span className="vscode-string">&quot;{experience.role}&quot;</span>
            ,
          </span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">5</span>
          <span className="ml-4">
            <span className="vscode-property">technologies</span>: [
          </span>
        </div>
        {techStack.map((tech: any, index: any) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="vscode-line"
          >
            <span className="vscode-line-number">{6 + index}</span>
            <span className="ml-8">
              <span className="vscode-string">&quot;{tech}&quot;</span>
              {index < techStack.length - 1 ? "," : ""}
            </span>
          </motion.div>
        ))}
        <div className="vscode-line">
          <span className="vscode-line-number">{6 + techStack.length}</span>
          <span className="ml-4">],</span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">{7 + techStack.length}</span>
          <span className="ml-4">
            <span className="vscode-property">duration</span>:{" "}
            <span className="vscode-string">
              &quot;{experience.start} - {experience.end}&quot;
            </span>
            ,
          </span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">{8 + techStack.length}</span>
          <span className="ml-4">
            <span className="vscode-property">location</span>:{" "}
            <span className="vscode-string">
              &quot;{experience.location}&quot;
            </span>
          </span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">{9 + techStack.length}</span>
          <span>{"}"};</span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">{10 + techStack.length}</span>
          <span></span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">{11 + techStack.length}</span>
          <span className="vscode-keyword">export</span>{" "}
          <span className="vscode-keyword">default</span>{" "}
          <span className="vscode-property">projectTechStack</span>;
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverviewContent();
      case "achievements":
        return renderAchievementsContent();
      case "tech":
        return renderTechStackContent();
      default:
        return renderOverviewContent();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className={`vscode-terminal flex flex-col ${
            isMaximized ? "w-full h-full" : "w-full max-w-6xl h-5/6"
          } max-h-full`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* VS Code Header */}
          <div className="vscode-header">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-400">
              {experience.company} - {experience.role}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isMaximized ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-800 border-b border-gray-600">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`vscode-tab ${
                  activeTab === tab.id ? "active" : ""
                } flex items-center gap-2`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 overflow-y-auto p-4">{renderContent()}</div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
