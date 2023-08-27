import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import HeroSection from "../components/heroSection/HeroSection";
import Footer from "../components/footer/Footer";
import ProjectSection from "../components/projectSection/ProjectSection";
import CertSection from "../components/certSection/CertSection";

export default function Root() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ProjectSection />
      <CertSection />
      <Footer />
      <Outlet />
    </>
  );
}
