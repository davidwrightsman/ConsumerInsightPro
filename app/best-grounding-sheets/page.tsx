import Hero from "./Hero";
import ProductComparison from "./ProductComparison";
import ProductDetail from "./ProductDetail";
import ContentSection from "./ContentSection";
import StatsSection from "./StatsSection";
import Footer from "@/components/Footer";

const BestGroundingSheets = () => {
    return (
        <div>
            {/* Hero section  */}
            <Hero />

            {/* Content Section - Comprehensive Article */}
            <ContentSection />

            <ProductComparison />

            {/* Stats Section */}
            <StatsSection />

            {/* Product Detail Section */}
            <ProductDetail />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default BestGroundingSheets;