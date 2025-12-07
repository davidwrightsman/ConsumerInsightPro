"use client"

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Logo */}
            <div className="relative max-w-[1420px] mx-auto px-6 pt-8">
                <img src="/assets/logo.webp" alt="Consumer Smart Logo" />
            </div>

            {/* Main Content */}
            <div className="relative max-w-[1420px] mx-auto px-6 py-20 sm:py-28">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-4">
                                Welcome to Consumer Insight Pro
                            </p>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                                Trusted Insights, Expert Analysis
                            </h1>
                            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-4">
                                Today’s online marketplace is crowded with paid endorsements and confusing claims. We’re here to change that. At Consumer Insight Pro, every product goes through a thorough, hands-on evaluation designed to separate real quality from clever marketing. The result? Clear, trustworthy rankings that help you make confident decisions.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <a href="#trending-lists" className="bg-gradient-to-r from-teal-600 to-teal-700 hover:opacity-80 text-white font-bold px-8 py-4 rounded-lg transition-all duration-500 cursor-pointer">
                            Read Reviews
                        </a>
                    </div>

                    {/* Right Column - Img */}
                    <div className="flex justify-center items-center">
                        <div className="relative">
                            <div className="relative w-full max-w-lg">
                                <img
                                    src="/assets/home-hero2.webp"
                                    alt="Consumer review experts with ratings"
                                    className="w-full h-auto relative z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave Decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.05" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
