"use client"

const TeamSection = () => {
    const teamMembers = [
        {
            name: "Hannah Porter",
            role: "Director of Digital Strategy",
            image: "/assets/expert-1.webp",
        },
        {
            name: "Lucas Nguyen",
            role: "Senior Reviewer & Performance Testing Expert",
            image: "/assets/expert-2.webp",
        },
        {
            name: "Paige Sullivan",
            role: "RHead of Market Intelligence",
            image: "/assets/expert-3.webp",
        },
        {
            name: "Brooke Morales",
            role: "Sustainable Living & Wellness Consultant",
            image: "/assets/expert-4.webp",
        },
        {
            name: "Taylor Brooks",
            role: "Customer Insights & Experience Architect",
            image: "/assets/expert-5.webp",
        }
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-20">
                    <p className="text-black/60 font-semibold text-sm uppercase tracking-wider mb-4">
                        MEET THE EXPERTS
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        About{' '}
                        <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                            Our Team
                        </span>
                    </h2>

                    <p className="text-gray-600 max-w-6xl mx-auto text-base">
                        Consumer Insight Pro is powered by a hand-selected team of expert analysts, research professionals, and consumer-first advocates. We choose our specialists for their proven expertise in the exact product categories we review, ensuring every evaluation is grounded in real-world knowledge. Together, our team delivers insights that are precise, well-rounded, and thoroughly verified, so you can trust every recommendation we make.
                    </p>
                </div>

                {/* Team Members - 2 Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`group fade-in-item ${index === teamMembers.length - 1 && teamMembers.length % 2 !== 0
                                ? 'lg:col-span-2'
                                : ''
                                }`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* 2-Column Grid: Image Left, Content Right */}
                            <div className={`flex items-center flex-col sm:flex-row gap-8 p-4 border border-gray-200/50 ${index === teamMembers.length - 1 && teamMembers.length % 2 !== 0
                                ? 'lg:max-w-3xl lg:mx-auto'
                                : ''
                                }`}>

                                {/* Left Side - Image */}
                                <div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="max-w-[300px] sm:max-w-[230px] w-full h-auto sm:h-[250px] object-cover"
                                    />
                                </div>

                                {/* Right Side - Content */}
                                <div className="space-y-4 flex-1 text-center sm:text-left">
                                    {/* Name & Role */}
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                            {member.name}
                                        </h3>

                                        <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
