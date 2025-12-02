import React from 'react';
import { Check } from 'lucide-react';

const ContentSection: React.FC = () => {
    return (
        <section className="py-8 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Introduction */}
                <div className="space-y-6 mb-10">
                    <p className="text-xl text-gray-800 leading-relaxed font-bold">
                        THESE GROUNDED SHEETS ARE SECRETLY GENIUS
                    </p>

                    <p className="text-base text-gray-800 leading-relaxed font-bold">
                        Every year, Americans are facing a quiet crisis.
                    </p>

                    <p className="text-xl text-gray-700 leading-relaxed mt-8">
                        Millions of people are living with injuries, suffering in pain, every day. 46% of Americans, like you and me, take time off work because of their pain.
                        <br /> <br />
                        On top of it all, over 60% of Americans will experience burnout from work. Going through the motions feeling exhausted and suffering from brainfog—even anxiety—leading to extreme hypertension and even more pain.
                        <br /> <br />
                        <b> But here’s the sad part:</b> Most folks will tell you, “I’m fine,” and ignore their body’s constant pleas for help.
                        <br /> <br />
                        This is why our team set out on a mission: Test every top-tier grounded sheet on the market. From the celebrity and scientist endorsed ones to flashy Amazon best-sellers, we tried them all.
                        <br /> <br />
                        After months of thorough testing and shocking results, one set of grounded sheets stunned everyone on the team with its performance and its price: you, too, will be shocked by the winning product (no, not literally).
                        <br /> <br />
                        I’ll let you in on the miracle that is leaving folks rejuvenated and revitalized.
                    </p>

                    <p className="text-xl text-gray-800 leading-relaxed font-bold">
                        How We Ranked the Best Solution
                    </p>

                    <p className='text-xl text-gray-800 leading-relaxed'>
                        The amount of grounding sheets and other products out there is overwhelming. And finding the right one proved to be a monumental task. Some don’t provide a holistic solution, others are surface-level gimmicks, and few are so outrageously expensive that all you think about is getting ripped off.
                        <br /> <br />
                        I wanted to dive right in and find the best grounded sheets that <i>actually work.</i>
                        <br /> <br />
                        My team and I spent close to a year testing and evaluating the most popular grounded sheets out there. We focused on what matters most:
                    </p>

                    <ul className="space-y-4 pl-4">
                        <li className="flex items-start gap-3">
                            <Check className="w-6 h-6 flex-shrink-0 text-teal-700" />
                            <span><strong>Performance: </strong>How effective are they?</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-6 h-6 flex-shrink-0 text-teal-700" />
                            <span><strong>Safety: </strong>Are there any side effects? Is it doctor-recommended?</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-6 h-6 flex-shrink-0 text-teal-700" />
                            <span><strong>Advanced Features: </strong>Does it offer additional benefits, bonus features that are actually helpful?</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-6 h-6 flex-shrink-0 text-teal-700" />
                            <span><strong>Affordability: </strong>Does the price reflect the quality and value?</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-6 h-6 flex-shrink-0 text-teal-700" />
                            <span><strong>User Feedback: </strong>Are real-life customers experiencing the benefits? Do the sheets make a difference in their lives?</span>
                        </li>
                    </ul>

                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        After all those extensive tests, <b>BareEarth Sheets</b> rose to the top as the clear winner.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        And here's why it stands above the rest.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ContentSection;
