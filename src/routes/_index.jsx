import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import HeroSection from "../components/heroSection/HeroSection";
import Footer from "../components/footer/Footer";

export default function Root() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Footer />
      <Outlet />
    </>
  );
}
