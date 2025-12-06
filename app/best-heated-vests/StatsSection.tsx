import React from 'react';
import { Users, CheckCircle, Footprints } from 'lucide-react';

const StatsSection: React.FC = () => {
    const stats = [
        {
            icon: Users,
            number: "25",
            label: "Expert Reviewers",
        },
        {
            icon: CheckCircle,
            number: "29,000+",
            label: "Reviews Checked",
        },
        {
            icon: Footprints,
            number: "110+",
            label: "Heated Vests Tested"
        }
    ];

    return (
        <section className="py-16 px-6 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #14b8a6 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Gradient Overlays */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:bg-white hover:border-teal-500 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-emerald-500/0 group-hover:from-teal-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all duration-300"></div>

                            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>

                                {/* Number */}
                                <div className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    {stat.number}
                                </div>

                                {/* Label */}
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {stat.label}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
