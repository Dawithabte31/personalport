import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AboutDescription from "./components/AboutDescription";
import SkillList from "./components/SkillList";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] w-[100%]">
      <Navbar />
      <div className="container mt-24 mx-auto w-[100%] p-0">
        <HeroSection />
        <AboutDescription/>
        {/* <AchievementsSection /> */}
        {/* <AboutSection /> */}
        <ProjectsSection />
        <SkillList/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
