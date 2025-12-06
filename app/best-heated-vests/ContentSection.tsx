import React from 'react';
import { Check, X } from 'lucide-react';

const ContentSection: React.FC = () => {
    return (
        <section className="py-8 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Introduction */}
                <div className="space-y-6 mb-5">
                    <p className="text-xl text-gray-800 leading-relaxed font-medium">
                        After testing every heated vest we could get our hands on, three stood out for delivering insane warmth, comfort, and battery life without turning you into a walking fire hazard.
                    </p>

                    <p className="text-xl text-gray-800 leading-relaxed">
                        Some vests <b>barely get warm… </b>.
                    </p>

                    <p className="text-xl text-gray-800 leading-relaxed">
                        Some feel like you're <b>wrapped in a car battery…</b>
                    </p>

                    <p className="text-xl text-gray-800 leading-relaxed">
                        And a few? They’re actually <b>worth your hard-earned cash.</b>
                    </p>

                    <p className="text-xl text-gray-800 leading-relaxed">
                        Below are the ones that impressed us enough to recommend.
                    </p>

                    
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
