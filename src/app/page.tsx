import { NetflixHeader } from "@/components/NetflixHeader";
import { NetflixHero } from "@/components/NetflixHero";
import { NetflixExperience } from "@/components/NetflixExperience";
import { NetflixSkills } from "@/components/NetflixSkills";
import { NetflixEducation } from "@/components/NetflixEducation";
import { NetflixContact } from "@/components/NetflixContact";
import { NetflixScrollIndicator } from "@/components/NetflixScrollIndicator";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  Play,
  Info,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  User,
  MessageCircleHeart,
} from "lucide-react";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <ArrowUp className="h-4 w-4 dark:text-white" />,
    },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <NetflixScrollIndicator />
      <NetflixHeader />
      <FloatingNav navItems={navItems} />
      <main>
        <section id="home">
          <NetflixHero />
        </section>
        <NetflixExperience />
        {/* <ExperienceTimeline /> */}
        <NetflixSkills />
        <NetflixEducation />
        <NetflixContact />
      </main>
    </div>
  );
}
