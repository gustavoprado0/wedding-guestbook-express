import Navbar from "@/components/wedding/Navbar";
import HeroSection from "@/components/wedding/HeroSection";
import AboutSection from "@/components/wedding/AboutSection";
import VenueSection from "@/components/wedding/VenueSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VenueSection />
      <CountdownSection />
      <RSVPSection />
      <Footer />
    </div>
  );
};

export default Index;
