import React from 'react';
import { CheckCircle, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <>
            {/* Logo */}
            <header className="bg-slate-900 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-5">
                    <Link href="/">
                        <img src="/assets/logo.webp" alt="Consumer Insight Pro Logo" />
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden px-6">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                {/* Gradient Overlays */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto py-20 lg:py-20">
                    <div className="flex gap-12 md:items-center flex-col md:flex-row justify-between">
                        {/* Left Content */}
                        <div className="space-y-8 md:w-[65%]">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2">
                                <TrendingUp className="w-4 h-4 text-teal-400" />
                                <span className="text-sm font-semibold text-teal-400 uppercase tracking-wide">
                                    Updated December 1, 2025
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                Stop Freezing Outside — These Heated Vests Turn Brutal Weather Into Your Personal Comfort Zone
                            </h1>
                        </div>

                        {/* Right Content - Badge */}
                        <div className="flex justify-center lg:justify-end w-full md:w-auto">
                            <div className="relative w-full md:w-auto">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 blur-3xl opacity-30 rounded-full"></div>

                                {/* Badge Card */}
                                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-12 shadow-2xl">
                                    <div className="text-center space-y-6">
                                        {/* Icon */}
                                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                                            <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
                                        </div>

                                        {/* Title */}
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-2">
                                                Tried & Tested
                                            </h3>
                                            <p className="text-teal-400 font-semibold uppercase tracking-widest text-sm">
                                                Consumer Insight Pro
                                            </p>
                                        </div>

                                        {/* Stars */}
                                        <div className="flex justify-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-6 h-6 fill-white text-white" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;