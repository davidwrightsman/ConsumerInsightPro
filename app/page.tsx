import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ReviewProcess from "@/components/ReviewProcess";
import TeamSection from "@/components/TeamSection";
import TrendingLists from "@/components/TrendingLists";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <section id="about">
        <TeamSection />
      </section>
      <ReviewProcess />
      <TrendingLists />
      <Footer />
    </div>
  );
};

export default Home;
