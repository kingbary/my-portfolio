import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import HeroSection from "../components/heroSection/HeroSection";

export default function Root() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Outlet />
    </>
  );
}
