import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import HeroSection from "../components/heroSection/HeroSection";
import Footer from "../components/footer/Footer";
import ProjectSection from "../components/projectSection/ProjectSection";

export default function Root() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ProjectSection />
      <Footer />
      <Outlet />
    </>
  );
}
