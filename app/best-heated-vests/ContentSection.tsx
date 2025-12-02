import React from 'react';
import { Check, X } from 'lucide-react';

const ContentSection: React.FC = () => {
    return (
        <section className="py-8 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Introduction */}
                <div className="space-y-6 mb-5">
                    <p className="text-xl text-gray-800 leading-relaxed font-medium">
                        Quick story time:
                    </p>

                    <p className="text-xl text-gray-800 leading-relaxed">
                        Last month I was <b>freezing my butt off at a conference in Chicago</b> . Like, literally shivering while trying to network. Not cool (pun intended).
                    </p>

                    <p className="text-xl text-gray-800 leading-relaxed">
                        Then this dude walks up to me, looking surprisingly chill in just a slim vest.
                    </p>

                    <p className="text-xl text-gray-800 leading-relaxed">
                        I'm thinking, "What's this guy's deal? Is he part polar bear?"
                    </p>

                    <p className="text-xl text-gray-800 leading-relaxed">
                        Turns out, he was wearing something called the <b>Solana Heated Vest.</b> And holy crap,  <b>it changed my entire winter game.</b>
                    </p>

                    <p className="text-xl text-gray-800 leading-relaxed">
                        Here's the deal:
                    </p>

                    {/* Deal List */}
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Check className="w-6 h-6 flex-shrink-0 text-teal-700" />
                            <span><strong>Most heated vests </strong>= bulky garbage that makes you look like you're wearing a car battery</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-6 h-6 flex-shrink-0 text-teal-700" />
                            <span><strong>Regular winter clothes </strong>= either too thick or not warm enough</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-6 h-6 flex-shrink-0 text-teal-700" />
                            <span><strong>The Solana </strong>= actually works AND looks decent</span>
                        </li>
                    </ul>

                    <p className="text-xl text-gray-800 leading-relaxed">
                        Look, I've tried ALL the "solutions":
                    </p>

                    {/* All solutions  */}
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <X className="w-6 h-6 flex-shrink-0 text-red-700" />
                            <span>Layering like an onion</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <X className="w-6 h-6 flex-shrink-0 text-red-700" />
                            <span>Those chemical hand warmers that die in 20 minutes</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <X className="w-6 h-6 flex-shrink-0 text-red-700" />
                            <span>Expensive "thermal" gear that's about as warm as a paper towel</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
