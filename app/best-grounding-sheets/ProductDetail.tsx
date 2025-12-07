import React from 'react';
import { Check, Star, Award, Users, ShoppingBag, Calendar, X } from 'lucide-react';
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
                                    Our #1 Pick: <span className="text-teal-600">BareEarth Sheets</span>
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
                                                Passive recovery while you sleep
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                EMF-blocking & naturally antimicrobial
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                Enormous range of health and wellness benefits
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                100% organic and chemical-free with zero side effects
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                Doctor recommended and backed by science
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                Built with your comfort in mind and extremely durable
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">
                                                Easily set it up in seconds
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Product Image */}
                                <div className="flex items-center justify-center">
                                    <div className="relative w-full h-64">
                                        <Image
                                            src="/assets/grounding-sheets.webp"
                                            alt="Grounding Sheets"
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
                                            Always selling out due to high demand
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-8"></div>

                            {/* They're Actually Comfortable Section */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Why BareEarth Sheets Won Our Top Spot
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    It’s not just that they work. It’s how they work.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Multitude of Benefits
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    In addition to helping with exhaustion and consistent tiredness, the sheets aided with pain as well!
                                    <br /> <br />
                                    <i>
                                        “I struggled with burn out for a long time,” said Ryan, one of our testers, “These sheets fixed that no problem—giving me energy that lasted throughout the day.”
                                    </i>
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Don’t Think About It—Just Do
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The epitome of passive recovery, BareEarth Sheets allow you to take in all the benefits through the night. Sleep well and wake up feeling refreshed.
                                    <br /> <br />
                                    <i>
                                        “I was tired of adjusting my routines to incorporate whatever product I was using,” said Tracy. “Pills in the morning, oils at night. With BareEarth Sheets you just sleep like you normally do—you don’t even think about it.”
                                    </i>
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    A Forcefield That Stays Fresh
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The silver threads do all the work blocking harmful EMF waves and help keep the sheets stay fresh.
                                    <br /> <br />
                                    <i>
                                        “I’m always worried about waves from WiFi and Bluetooth, so this is just amazing! Plus, the sheets are always so clean. I can’t believe it,” said Matthew, who noticed a difference after just a few days.
                                    </i>
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Safe For Me, Safe For You
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Forget about chemical cocktails and nasty side effects that leave you feeling worse, BareEarth Sheets are chemical and toxin-free—totally safe every use.
                                    <br /> <br />
                                    <i>
                                        “I hate taking pills and concoctions that are riddled with chemicals,” Stephen told me. “The fact that these sheets are chemical-free is the icing on the cake—makes them so much better!”
                                    </i>
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Doctor’s Approval
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Doctors and health experts alike are all in on the grounding movement. It’s safe, natural and proven to improve wellbeing—more and more doctors are urging their patients to try grounding.
                                    <br /> <br />
                                    <i>
                                        “I actually asked my doctor about it before trying the sheets out. He was so excited to see how much I’d love them.”
                                    </i>
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Best of Both Worlds
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    A dream to sleep on and long-lasting after every wash, BareEarth Sheets prove time and time again that they are super comfy and super durable.
                                    <br /> <br />
                                    <i>
                                        “I feel like these sheets get softer with each wash. Every time I put them on my bed they feel like I just got them.”
                                    </i>
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    It’s Not Rocket Science
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    These sheets may be backed by science, but they’re ridiculously easy to use. Throw them on like you would regular sheets, plug the cord into a grounded outlet and get some sleep.
                                    <br /> <br />
                                    <i>
                                        “I mean it’s pretty self-explanatory: Make your bed, plug it in, and go to sleep. If only every product we tested was this easy to figure out!”
                                    </i>
                                </p>
                            </div>


                            {/* They Don't Scream Section */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    They Don't Scream "LOOK AT MY WEIRD SHOES!"
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You can actually wear these to work without looking like you just escaped from a foot fetish convention. I've worn them:
                                </p>
                                <ul className="space-y-2 ml-6 mb-4">
                                    <li className="text-gray-700 leading-relaxed">→ To business meetings</li>
                                    <li className="text-gray-700 leading-relaxed">→ At the gym</li>
                                    <li className="text-gray-700 leading-relaxed">→ Hiking trails</li>
                                    <li className="text-gray-700 leading-relaxed">→ Running errands</li>
                                    <li className="text-gray-700 leading-relaxed">→ Even to a wedding (the black ones look surprisingly classy)</li>
                                </ul>
                            </div>

                            {/* Your Feet Actually Get Stronger Section */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Your Feet Actually Get Stronger
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    After 30 days of testing, our team reported:
                                </p>
                                <ul className="space-y-2 ml-6">
                                    <li className="text-gray-700 leading-relaxed">→ Better balance</li>
                                    <li className="text-gray-700 leading-relaxed">→ Improved foot arches</li>
                                    <li className="text-gray-700 leading-relaxed">→ Less pain pain</li>
                                    <li className="text-gray-700 leading-relaxed">→ More stable walking</li>
                                    <li className="text-gray-700 leading-relaxed">→ Better posture</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    It's like physical therapy for your feet, except you're just living your normal life.
                                </p>
                            </div>

                            {/* Pricing Section */}
                            <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    <strong>But here's the kicker...</strong>
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    While all the other products we tested that are <strong>“designed”</strong> to alleviate your pain and free you from exhaustion, BareEarth Sheets really deliver—<i>and for a fraction of the price.</i>
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    And right now, they’ve got an exclusive limited-time offer that makes them even cheaper than before.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    The best part?
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You’re completely covered by their 90-day Grounded Guarantee! If you don’t feel revitalized or rejuvenated within 90 days, their friendly customer support team will send you a full refund. No hoops. No hassles. No questions asked.
                                </p>
                            </div>

                            {/* Bottom Line */}
                            <div className="mb-4">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <strong>Bottom line: If you want:</strong>
                                </p>
                                <ul className="space-y-2 ml-6">
                                    <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                        More energy
                                    </li>
                                    <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                        Deeper sleep
                                    </li>
                                    <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                        Reduced stress
                                    </li>
                                    <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                        Alleviated pain
                                    </li>
                                    <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                                        <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                        A product that’s been tested, loved and backed by 200,000+ grounded customers
                                    </li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    …then BareEarth Sheets are for you.
                                </p>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                They’re selling out fast (again), so order yours while they’re still on sale.
                            </p>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Ready to Get Grounded?
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Here’s how to get your BareEarth Sheets today:
                                </p>

                                <ul className='list-decimal pl-4 md:pl-8 text-gray-700 leading-relaxed mb-4 space-y-2'>
                                    <li>Click the button below</li>
                                    <li>Enter promo code EARTH25</li>
                                    <li>Enjoy up to XX% off for a limited time</li>
                                </ul>
                            </div>

                            {/* CTA Section */}
                            <div className="text-center mb-8">
                                <p className="text-sm text-gray-600 mb-4">
                                    But hurry—this offer is ending soon! So don’t be surprised if the deal is gone by tomorrow.
                                </p>
                                <a
                                    href="https://offer.bareearthlife.com/groundedsheets/landing?uid=3061&oid=858&affid=831"
                                    className="inline-block bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold uppercase text-lg px-16 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                                >
                                    Calm Your BareEarth Sheets - Limited Time Offer
                                </a>
                                <p className="text-sm font-semibold mt-4">
                                    Save <span className="text-red-600">50% OFF</span> – Sale Ends Soon!
                                </p>
                            </div>

                            <div className='text-gray-700 leading-relaxed mt-4'>
                                <b>P.S.</b>
                                <p className='mb-3'>
                                    Still eyeing those overly priced supplements? Ask yourself, does high price really equate to high quality?
                                </p>

                                <b>P.P.S.</b>

                                <p>
                                    Remember, you’ve got 90 days to try BareEarth Sheets risk-free. If you don’t feel the amazing benefits, you get your money back. No stress. No sleep lost.
                                </p>
                            </div>

                            {/* Author/Review Section */}
                            <div className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Author Image */}
                                    <div className="flex-shrink-0">
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-teal-500 shadow-lg">
                                            <img
                                                src="/assets/author-elena-morris.webp"
                                                alt="Elena Morris"
                                                className="w-full h-full object-cover bg-gray-200"
                                            />
                                        </div>
                                    </div>

                                    {/* Author Info */}
                                    <div className="flex-1">
                                        <div className="mb-4">
                                            <p className="text-sm font-semibold text-teal-600 mb-2">Written By:</p>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                                                Dr. Elena Morris
                                            </h4>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                                                    <Award className="w-3 h-3" />
                                                    Specialist in Exhaustion & Burnout
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-xs text-gray-700 leading-relaxed">
                                            Dr. Elena Morris is a board-certified physician specializing in exhaustion, chronic stress, and burnout recovery. With over 20 years of clinical experience, she has helped countless patients rebuild energy, restore focus, and reclaim balance in their daily lives. Dr. Morris combines evidence-based medicine with integrative approaches—such as sleep optimization, stress management, and restorative therapies—to guide her patients toward long-term vitality. She brings this expertise to evaluating wellness innovations like grounding sheets, exploring their potential role in supporting better rest and recovery.
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
                                        Last Updated: <span className="font-semibold text-gray-900">NOVEMBER 29, 2025</span>
                                    </p>
                                    <p>
                                        Next Update: <span className="font-semibold text-teal-600">DECEMBER 29, 2025</span>
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
                                        <span><b>1 Licensed Sleep Medicine Specialist with</b> over 15 years in clinical sleep therapy</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span><b>1 Health & Wellness Editor</b> who has reviewed hundreds of recovery and relaxation products</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span><b>3 everyday individuals</b> who have struggled with chronic fatigue, restless sleep, and stress-related exhaustion</span>
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
