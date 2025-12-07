import React from 'react';
import { Check, Star, Award, Shield, Users, ShoppingBag, Calendar, X } from 'lucide-react';
import Image from 'next/image';

const ProductDetail: React.FC = () => {
    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - Left 2/3 */}
                    <div className="lg:col-span-2">
                        {/* Product Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 border border-gray-200">
                            {/* Header with Badge */}
                            <div className="flex items-center gap-4 mb-8">
                                <img src="/assets/approved.webp" alt="approved-icon" className="w-16 h-16 rounded-full overflow-hidden" />

                                <h2 className="text-3xl font-bold text-gray-900 flex-1">
                                    Our #1 Pick: <span className="text-teal-600">Solana Heated Vest</span>
                                </h2>
                            </div>

                            {/* Content Grid - Pros and Image */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* Pros Section */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Pros</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                All-Day Battery Power (Not the fake “up to 8 hours” nonsense)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                8 Precision Heat Zones (Twice the coverage of most vests)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                NASA-Inspired Heating Tech (Real science, not marketing fairy dust)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                Auto-Regulated Temp Control (Stays hot without roasting you alive)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                Fully Waterproof Construction (Survives real storms, not just drizzle)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                Simple One-Tap Operation (Hit the button, feel the heat)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                4.8/5 Average Rating (From over 31,451 verified customers)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                30-Day Guarantee (If it doesn’t blow you away, send it back)
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Product Image */}
                                <div className="flex items-center justify-center">
                                    <div className="relative w-full h-64">
                                        <Image
                                            src="/assets/heated-vests.webp"
                                            alt="Solana Heated Vest"
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Cons Section */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Cons</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700">
                                            Low Inventory (People keep grabbing these fast)
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-8"></div>

                            {/* They're Actually Comfortable Section */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    THE ACTUALLY USEFUL STUFF:
                                </h3>

                                <p className="text-gray-700 text-lg font-medium leading-relaxed mb-4">
                                    <span className='text-2xl font-bold'>1.</span> The Tech That Actually Matters:
                                </p>

                                <ul className='list-disc space-y-2 pl-6 text-base mb-8'>
                                    <li><b>8 heating zones</b> (strategically placed where you actually need warmth)</li>
                                    <li><b>Quick Heat Technology</b> (because who TF wants to wait to get warm?)</li>
                                    <li><b>Smart Overheat Protection</b> (so you don't become human toast)</li>
                                </ul>

                                <p className="text-gray-700 text-lg font-medium leading-relaxed mb-4">
                                    <span className='text-2xl font-bold'>2.</span> The Non-Sucky Parts:
                                </p>

                                <ul className='list-disc space-y-2 pl-6 text-base mb-8'>
                                    <li>Doesn't make you look like the Michelin Man</li>
                                    <li><b>Machine washable</b> (because duh, it needs to be)</li>
                                    <li><b>Waterproof</b> (I've literally stood in rain with this thing)</li>
                                    <li><b>8+ hours of heat</b> (that's like your entire workday + commute)</li>
                                </ul>

                                <p className="text-gray-700 text-lg font-medium leading-relaxed mb-4">
                                    <span className='text-2xl font-bold'>3.</span> <b>The Real Talk Price Breakdown: </b>Regular winter jackets: $200-$500, Other heated vests: $99+, <b>Solana Heated Vest: $59.99</b>
                                </p>
                            </div>


                            <div className="mb-8">
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    → Quick math: That's basically the cost of 10 fancy coffees to stay warm ALL WINTER.
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    STUFF NORMAL HUMANS ACTUALLY CARE ABOUT:
                                </h3>

                                <ul className="space-y-2 mb-8">
                                    <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <b>3 heat levels</b> (because sometimes you want warm, not sauna)
                                    </li>
                                    <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <b>Lightweight</b> (feels like a normal vest)
                                    </li>
                                    <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <b>30-day money-back guarantee</b> (they're not playing games)
                                    </li>
                                    <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                        Actually looks good enough for business meetings
                                    </li>
                                </ul>

                                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                    <b>THE BOTTOM LINE:</b> If you're tired of:
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                                    <b>1.</b> Looking like a stuffed penguin in winter
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-2 text-lg">
                                    <b>2.</b> Freezing your assets off
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                    <b>3.</b> Spending stupid money on layers that don't work
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                    Then <b>just get this thing.</b> Seriously.
                                </p>
                            </div>


                            {/* CTA Section */}
                            <div className="text-center mb-8">
                                <a
                                    href="https://offer.solanagear.com/heatedvest/presell?oid=126&affid=23&oidab=826&affidab=831"target="_blank"
                                    className="inline-block bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold uppercase text-lg px-16 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                                >
                                    Get Your Solana Now
                                </a>
                                <p className="text-sm font-semibold mt-4">
                                    Save <span className="text-red-600">50% OFF</span> – Sale Ends Soon!
                                </p>
                            </div>

                            <div className='text-gray-700 leading-relaxed mt-4'>
                                <b>P.S.</b>
                                <p className='mb-3'>
                                    <b>Over 1,000+ 5-star reviews don't lie.</b> These people aren't getting paid to say nice things - they're just stoked about not being cold anymore.
                                </p>

                                <b>P.P.S.</b>

                                <p>
                                    Last time I checked, they were <b>running low on stock</b> (because apparently other people also hate being cold). Grab yours before they're gone.
                                </p>
                            </div>

                            {/* Author/Review Section */}
                            <div className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Author Image */}
                                    <div className="flex-shrink-0">
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-teal-500 shadow-lg">
                                            <img
                                                src="/assets/author-mike-chen.webp"
                                                alt="Lucas Nguyen"
                                                className="w-full h-full object-cover bg-gray-200"
                                            />
                                        </div>
                                    </div>

                                    {/* Author Info */}
                                    <div className="flex-1">
                                        <div className="mb-4">
                                            <p className="text-sm font-semibold text-teal-600 mb-2">Written By:</p>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                                                Lucas Nguyen – Principal Product Reviewer & Fitness Enthusiast
                                            </h4>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                <span className="inline-flex items-center gap-1 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
                                                    <Star className="w-3 h-3" />
                                                    10+ Years Experience
                                                </span>
                                                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                                                    <Award className="w-3 h-3" />
                                                    Former Physical Therapy Assistant
                                                </span>
                                                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                                                    <Shield className="w-3 h-3" />
                                                    Certified Running Coach
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-xs text-gray-700 leading-relaxed">
                                            Lucas Nguyen has spent more than a decade immersed in performance gear testing and movement analysis. Before joining the world of product evaluation, he worked as a Physical Therapy Assistant at a leading sports medicine center in Southern California, where he supported athletes recovering from high-intensity training and injuries. That clinical foundation sparked his transition into performance testing and coaching, helping thousands of runners and fitness enthusiasts choose gear that supports their goals.

Combining biomechanics insight with hands-on field testing, Lucas has become a trusted voice for athletes of all levels. As a certified running coach and senior reviewer, he brings a grounded, results-oriented perspective to assessing the latest advancements in athletic footwear and training equipment.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Right 1/3 */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border border-gray-200 sticky top-6 space-y-6">

                            <h1 className="text-2xl font-bold mb-8">
                                ABOUT OUR <span className="text-teal-600">REVIEWS</span>
                            </h1>

                            {/* Tested by real people */}
                            <div>
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Users className="w-4 h-4 text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Tested by real people
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed ml-11">
                                    Every product gets at least 100 hours of real-world testing. No lab-only reviews here.
                                </p>
                            </div>

                            {/* Actually bought the products */}
                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <ShoppingBag className="w-4 h-4 text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Actually bought the products
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed ml-11">
                                    Unlike most review sites, we purchase everything we test. No free samples or sponsored reviews.
                                </p>
                            </div>

                            {/* Updated monthly */}
                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Calendar className="w-4 h-4 text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Updated monthly
                                    </h3>
                                </div>
                                <div className="text-sm text-gray-700 ml-11 space-y-1">
                                    <p>
                                        Last Updated: <span className="font-semibold text-gray-900">DECEMBER 1, 2025</span>
                                    </p>
                                    <p>
                                        Next Update: <span className="font-semibold text-teal-600">DECEMBER 31, 2025</span>
                                    </p>
                                </div>
                            </div>

                            {/* How we rate products */}
                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Star className="w-4 h-4 text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-bold">
                                        How we <span className="text-teal-600">rate</span> products?
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-700 pl-2">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span>100+ hours of hands-on testing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span>50+ customer interviews</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span>Durability stress tests</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span>Price-value analysis</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span>Long-term wear testing</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Our testing team */}
                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Users className="w-4 h-4 text-teal-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Our testing team includes:
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-700 pl-2">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span>2 certified running coaches</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span>1 former physical therapist</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span>3 everyday users</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span>1 professional ultrarunner</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
