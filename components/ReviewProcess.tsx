import Image from "next/image";

const ReviewProcess = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <p className="text-black/60 font-semibold text-sm uppercase tracking-wider mb-4">
                        OUR REVIEW PROCESS
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        How We Deliver{' '}
                        <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Unbiased Results</span>
                    </h2>
                </div>

                {/* Three Pillars Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {/* Quality Assurance Card */}
                    <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Quality Assurance
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Comprehensive examination of construction, materials, and
                                manufacturing quality, testing overall build and performance.
                            </p>
                        </div>
                    </div>

                    {/* Scientific Testing Card */}
                    <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Scientific Testing
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Advanced laboratory and real-world assessment of functionality,
                                efficiency, and user experience.
                            </p>
                        </div>
                    </div>

                    {/* Value Analysis Card */}
                    <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Value Analysis
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Data-rich cost-benefit evaluation comparing quality,
                                performance, and price point across market segments.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Process Steps */}
                <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-2">
                        Our Methodology
                    </h3>

                    <p className="text-gray-700 max-w-2xl mx-auto text-center text-base mb-12">
                        Our methodology follows a systematic, data-driven approach, where
                        every product undergoes identical evaluation criteria to ensure
                        objective comparisons.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Step 1 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-500 flex items-center justify-center text-teal-600">
                                    <Image src="/assets/tikmark-icon.svg" alt="tikmark-icon" width={24} height={24} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    Initial Research
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    We analyze market trends and identify top contenders
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-500 flex items-center justify-center text-teal-600">
                                    <Image src="/assets/tikmark-icon.svg" alt="tikmark-icon" width={24} height={24} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    Independent Purchase
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    All products are bought anonymously through retail channels
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-500 flex items-center justify-center text-teal-600">
                                    <Image src="/assets/tikmark-icon.svg" alt="tikmark-icon" width={24} height={24} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    Real-World Testing
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Each item undergoes extensive practical usage by our
                                    specialists
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-500 flex items-center justify-center text-teal-600">
                                    <Image src="/assets/tikmark-icon.svg" alt="tikmark-icon" width={24} height={24} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    Technical Assessment
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Our experts conduct detailed performance and feature analysis
                                </p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-500 flex items-center justify-center text-teal-600">
                                    <Image src="/assets/tikmark-icon.svg" alt="tikmark-icon" width={24} height={24} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    Consumer Insights
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    We incorporate verified user experiences and long-term
                                    reliability data
                                </p>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-500 flex items-center justify-center text-teal-600">
                                    <Image src="/assets/tikmark-icon.svg" alt="tikmark-icon" width={24} height={24} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    Performance Rating
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Products receive standardized scores across key metrics
                                </p>
                            </div>
                        </div>

                        {/* Step 7 */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-500 flex items-center justify-center text-teal-600">
                                    <Image src="/assets/tikmark-icon.svg" alt="tikmark-icon" width={24} height={24} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    Continuous Monitoring
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    We track product updates and market developments regularly
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-200">
                        <p className="text-center text-gray-700 text-base leading-relaxed max-w-[800px] mx-auto">
                            Through this comprehensive evaluation system, we provide you with
                            evidence-based recommendations that empower smarter purchasing
                            decisions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewProcess;