import Link from 'next/link';
import { FileText, AlertTriangle, Shield, Scale, Info, UserX, Link as LinkIcon, XCircle, Award, Check, Copyright, Mail, Gavel } from 'lucide-react';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header/Logo */}
            <header className="bg-slate-900 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-5">
                    <Link href="/">
                        <img src="/assets/logo.webp" alt="Consumer Insight Pro Logo" />
                    </Link>
                </div>
            </header>

            {/* Page Title */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500/20 rounded-2xl mb-6">
                        <FileText className="w-8 h-8 text-teal-400" />
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
                    <p className="text-gray-300 text-lg">Effective Date: October 11, 2022</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Introduction */}
                <section className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            By accessing or using this website, mobile application, or other websites that display these Terms and Conditions, or Consumer Insight Pro (defined below) (collectively, this "Website") in any way, you ("User," "you," or "your") agree to be bound by this Terms and Conditions Agreement (the "Agreement" or "Terms and Conditions"). This Website is brought to you by Consumer Insight Pro LLC ("Consumer Insight Pro," "we," or "us"). The Agreement is a binding legal contract between you and us.
                        </p>

                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                            <p className="text-gray-800 leading-relaxed font-medium">
                                <strong className="text-yellow-800">
                                    YOUR USE OF THIS WEBSITE IS SUBJECT TO A MANDATORY ARBITRATION PROVISION AND CLASS ACTION WAIVER SET FORTH IN THE SECTION OF THIS AGREEMENT TITLED "Dispute Resolution by Binding Arbitration and Class Action Waiver". PLEASE CAREFULLY REVIEW THAT SECTION OF THIS AGREEMENT.
                                </strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Requests to Be Matched */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Shield className="w-8 h-8 text-teal-600" />
                        Requests to Be Matched
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Website may provide you the opportunity to submit requests for information about tax credits, benefits, and related services ("Services") offered by us, and certain service providers (each such service provider, a "Service Provider"; each such request, a "Request"), and to engage the services of us and others. By submitting a Request, you agree that we may and will share the information you provide in your Request with third parties, including any Service Providers regardless of whether or not you have specifically selected such Service Provider or asked that your information or Request be shared with such Service Provider.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If any Service Provider(s) wishes to provide information to you in connection with your Request, you will be contacted regarding the offerings and related pricing. Please contact the Service Provider(s) directly if you no longer wish to receive communications from them. The Service Provider(s) may keep your Request information and any other information provided by us in connection with your Request whether or not they offer you a product or service.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We cannot and do not guarantee that we or Service Providers will provide information responding to every Request you submit or that the Service Providers who respond to your Request will meet all of your requirements. We may reject any Request or elect not to forward a Request to participating Service Providers, for any reason or no reason. You should perform your own research and due diligence on each potential Service Provider prior to selecting or entering into any agreement or arrangement.
                        </p>
                    </div>
                </section>

                {/* General Restrictions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <AlertTriangle className="w-8 h-8 text-teal-600" />
                        General Restrictions
                    </h2>

                    <div className="space-y-6">
                        {/* User Representations */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">User Representations</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                By using the Website or submitting a Request, you represent and agree that:
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-4">
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <span>You are at least 18 years old or the legal age of majority in your State (whichever is older)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <span>You are authorized to enter into this Agreement</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <span>You will not use the Website for any purpose that violates any law or regulation or infringes the rights of Consumer Insight Pro or any third party</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <span>Any information you provide to Consumer Insight Pro will not violate any law or regulation or infringe any rights</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <span>All information provided is true and accurate</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <span>You are authorized and able to fulfill the specified obligations</span>
                                </li>
                            </ul>
                        </div>

                        {/* Prohibited Actions */}
                        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-l-4 border-red-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <XCircle className="w-6 h-6 text-red-600" />
                                Prohibited Activities
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                You agree to use the Website only for individual purposes and in compliance with all laws. The Services shall not be used to stalk, harass, threaten, or embarrass any individual.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-3">The following activities are strictly prohibited:</p>
                            <ul className="space-y-2 text-gray-700 ml-4 list-disc">
                                <li>Systematic access or extraction of content using bots, spiders, or scraping technology</li>
                                <li>Unauthorized caching, hypertext links, or framing of website content</li>
                                <li>Reproduction or distribution of website content without express written consent</li>
                                <li>Using data to prepare commercial databases or comparisons</li>
                                <li>Using the site to test for claimed violations without intention to purchase services</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Consumer Insight Pro Is Not a Certified Public Accountant */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <UserX className="w-8 h-8 text-teal-600" />
                        Consumer Insight Pro Is Not a Certified Public Accountant or Your Agent
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                            <p className="text-gray-800 leading-relaxed mb-4">
                                Consumer Insight Pro is not your agent or the agent of any Service Provider. Consumer Insight Pro makes no claims about the accuracy, reliability, timeliness, usefulness, or completeness of any information or advice provided by third parties, including Service Providers.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                <strong>
                                    Consumer Insight Pro is not a Certified Public Accountant or a Certified Public Accounting Firm, and Consumer Insight Pro is not your accountant.
                                </strong>
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                            <p className="text-gray-700 leading-relaxed">
                                Consumer Insight Pro recommends that you obtain different opinions and seek the advice of a Certified Public Accountant who is fully aware of your individual circumstances before making any final decisions or filing any documents with any federal or state governmental institution, including but not limited to the Internal Revenue Service.
                            </p>
                        </div>
                    </div>
                </section>

                {/* This Is Not an Application */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Info className="w-8 h-8 text-teal-600" />
                        This Is Not an Application
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                            Nothing on this Website constitutes an offer, promise, or otherwise, to provide a specific tax credit or service or that any participating provider will offer you a specific tax credit or service for any purpose or on any specific terms. If you contact any Service Provider and submit any information to such Service Provider, your information remains between you and that Service Provider. We shall not be responsible or liable for any products, services, information, or other materials displayed, purchased, or obtained as a result of any information or offer in or results of any kind obtained from any Service Provider in connection with this Website.
                        </p>
                    </div>
                </section>

                {/* Privacy Communications */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Communications</h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            By using Consumer Insight Pro, you agree to our Privacy Policy, which is incorporated herein by reference.
                        </p>
                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                            <p className="text-gray-800 leading-relaxed">
                                By submitting your contact information through the Website, you are providing your prior express written consent to receive marketing communications about financial and tax services via automated telephone dialing systems, pre-recorded calls, artificial voice, text messages, and emails from Consumer Insight Pro, our advertising partners, and Service Partners, at the phone number and/or email address you provided or confirmed above, including landlines and wireless numbers, if applicable, even if the phone number is on a corporate, state, or national do not call list, or if you previously unsubscribed from emails. Consent is not a condition to purchase any goods or services.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Links */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <LinkIcon className="w-8 h-8 text-teal-600" />
                        Links
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                            External links to other internet sites or resources may be provided by Consumer Insight Pro, Service Providers, or other third parties. Consumer Insight Pro has no control over, and does not endorse, such sites, resources, or entities. You acknowledge and agree that Consumer Insight Pro is not responsible or liable for the availability or content, advertising, products, or any other material found on such external sites or resources. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any third parties.
                        </p>
                    </div>
                </section>

                {/* Termination */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-l-4 border-red-500">
                            <p className="text-gray-800 leading-relaxed">
                                We may terminate or suspend access to this Website and our Services immediately, with or without notice to you, for any reason or no reason whatsoever, in our sole judgment, including any time we determine, in our sole judgment, you have violated any of the Agreement, furnished us with false or misleading information, or interfered with use of the Website or the Service by others.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                                In addition to any other rights and remedies we may have under this Agreement, or at law or in equity, we have the right to: <br />
                                Revoke your right to use our Website <br />
                                Use any technological, legal, operational, or other means available to enforce this Agreement, including blocking specific IP addresses
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer of Warranties */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer of Warranties</h2>
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                        <p className="text-gray-800 leading-relaxed mb-4 uppercase font-bold">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            THE WEBSITE AND ANY CONTENT, INFORMATION, AND MATERIALS MADE AVAILABLE THROUGH OR IN CONNECTION WITH THE WEBSITE ARE PROVIDED TO YOU "AS AVAILABLE" AND "AS IS" WITHOUT ANY EXPRESS REPRESENTATIONS OR WARRANTIES OF ANY KIND, AND Consumer Insight Pro DISCLAIMS ALL STATUTORY OR IMPLIED REPRESENTATIONS, WARRANTIES, AGREEMENTS WITH RESPECT TO THE WEBSITE, AND ALL GOODS, SERVICES, CONTENT, INFORMATION, AND MATERIALS (INCLUDING THIRD PARTY GOODS, SERVICES, CONTENT, INFORMATION, AND MATERIALS) MADE AVAILABLE THROUGH THE WEBSITE, INCLUDING ANY REPRESENTATIONS OR WARRANTIES OF SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NONINFRINGEMENT, AND TITLE.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Consumer Insight Pro SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES OF ANY KIND IN CONNECTION WITH THE WEBSITE, UNDER ANY CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER THEORY, INCLUDING DAMAGES FOR:
                        </p>

                        <ul className="space-y-2 text-gray-700 ml-6 list-disc my-5">
                            <li>Loss of profits</li>
                            <li>Loss or interruption of business</li>
                            <li>Loss of use</li>
                            <li>Loss of data</li>
                            <li>Loss of other intangibles</li>
                            <li>Loss of security of information</li>
                            <li>Unauthorized interception of information by third parties</li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed">
                            THE MAXIMUM LIABILITY OF Consumer Insight Pro FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, SHALL BE THE TOTAL AMOUNT, IF ANY, PAID BY YOU TO Consumer Insight Pro TO ACCESS AND USE THE WEBSITE.
                        </p>
                    </div>
                </section>

                {/* Indemnification */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Shield className="w-8 h-8 text-teal-600" />
                        Indemnification
                    </h2>
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-l-4 border-red-500">
                        <p className="text-gray-800 leading-relaxed mb-4">
                            You agree that you shall indemnify, defend, and hold harmless Consumer Insight Pro, its officers, directors, employees and agents, affiliates, and Service Providers against any and all direct or indirect losses, claims, demands, expenses (including attorneys' fees and cost) or liabilities of whatever nature or kind arising out of:
                        </p>
                        <ul className="space-y-2 text-gray-700 ml-4 list-disc">
                            <li>Your use of our Website</li>
                            <li>Your use or distribution of any information obtained therefrom</li>
                            <li>Your access to or use of the Website</li>
                            <li>Your breach or violation of this Agreement</li>
                            <li>Any law or regulation violation</li>
                            <li>The rights of us or any third party</li>
                        </ul>
                    </div>
                </section>

                {/* Dispute Resolution */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Scale className="w-8 h-8 text-teal-600" />
                        Dispute Resolution by Binding Arbitration and Class Action Waiver
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                            <p className="text-gray-800 leading-relaxed mb-4 font-bold">
                                You and we agree that any concerns, complaints, demands for relief, disputes, or claims will be resolved on an individual basis through binding arbitration or in small claims court only.
                            </p>
                            <p className="text-gray-700 leading-relaxed font-bold uppercase">
                                YOU AND Consumer Insight Pro AGREE TO WAIVE ANY AND ALL RIGHTS TO A TRIAL BY JURY AND TO PARTICIPATE IN ANY WAY IN A CLASS ACTION.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Required Informal Settlement Process</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Before filing a claim, both parties must participate in a 60-day informal settlement process. To initiate this, send a Claim Statement to <a href="mailto:dave@luciddm.com" className="text-teal-600 hover:underline">dave@luciddm.com</a> or by certified mail to 310 4th Ave S Suite 5010 PMB 99491 Minneapolis, MN 55415 including:
                                <br />
                                Your name and address <br />
                                Detailed explanation of the dispute <br />
                                Proposed resolution (including any monetary claims)
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Arbitration Details</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Arbitration will be conducted by the American Arbitration Association (AAA) under their Commercial Arbitration Rules. Cases will be handled by phone, online, or through written submissions unless both parties agree otherwise. The arbitrator's decision is final and binding. Each party bears their own costs unless determined otherwise by the arbitrator.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                You have 30 days from your first website visit or information submission to opt out by emailing <a href="mailto:dave@luciddm.com" className="text-teal-600 hover:underline">dave@luciddm.com</a>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Modifications */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        Modifications
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right at any time to modify this Agreement, and any part of our Website, in our sole discretion. We will notify you of changes to our Agreement by posting them here, sending you an e-mail, or otherwise notifying you through or on the Website or via other contact information you provide to us. Your continued use of the Website following the posting of revised Agreement means that you accept and agree to the changes.
                        </p>
                    </div>
                </section>

                {/* Intellectual Property */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Award className="w-8 h-8 text-teal-600" />
                        Intellectual Property
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Consumer Insight Pro, and the Website's entire contents, features, and functionality, including, but not limited to, all information, text, displays, photographs, graphics, video and audio, and the design, selection, and arrangement thereof ("Content") are owned by, licensed by, or provided to Consumer Insight Pro. The Website is protected by copyright, trademark, trade secret, and other intellectual property or proprietary rights laws, and thus, we own and retain all rights in the Consumer Insight Pro Content and the Website.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our trademarks, trade dress, and other intellectual property may not be used, including as part of trademarks and/or as part of domain names, in connection with any product or service in any manner that is likely to cause confusion to consumers or other users or recipients or the trademark.
                        </p>
                    </div>
                </section>

                {/* Your Content */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Content</h2>
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The Website may allow you to post, submit, publish, display, or transmit content or materials ("User Contributions"). By providing User Contributions, you grant us a nonexclusive right to edit, copy, publish, distribute, translate, and otherwise use these User Contributions (in whole, edited, and in part).
                            </p>
                            <ul className="space-y-2 text-gray-700 ml-6 list-disc">
                                <li>We have no obligation to:</li>
                                <li>Maintain any comments in confidence</li>
                                <li>Provide compensation for any comments</li>
                                <li>Respond to any comments</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                            <p className="text-gray-800 leading-relaxed mb-3">You agree that your comments will not:</p>
                            <ul className="space-y-2 text-gray-700 ml-6 list-disc">
                                <li>Violate any third-party rights (copyright, trademark, privacy, etc.)</li>
                                <li>Contain libelous, unlawful, or obscene material</li>
                                <li>Include computer viruses or malware</li>
                                <li>Use false contact information</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                You are solely responsible for any comments you make and their accuracy. We take no responsibility for comments posted by you or third parties.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Notice and Procedure for Making Claims */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Copyright className="w-8 h-8 text-teal-600" />
                        Notice and Procedure for Making Claims of Copyright Infringement
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Report copyright infringements by contacting our Designated Agent with the following information:
                        </p>
                        <ul className="space-y-2 text-gray-700 mb-6 ml-6 list-decimal">
                            <li>Electronic or physical signature of the copyright owner or authorized representative</li>
                            <li>Identification of the copyrighted work claimed to be infringed</li>
                            <li>Description of the original copyrighted work and its location</li>
                            <li>Clear description of the infringing material's location on our Website</li>
                            <li>Your contact information (name, address, phone, email)</li>
                            <li>Statement of good-faith belief that the use is unauthorized</li>
                            <li>Statement under penalty of perjury that the information is accurate and you're authorized to act for the copyright owner</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-3 font-semibold">
                            Contact Our Designated Agent:
                        </p>
                        <p className="text-gray-700 leading-relaxed italic">
                            310 4th Ave S Suite 5010 PMB 99491 <br />
                            Minneapolis, MN 55415
                        </p>
                    </div>
                </section>

                {/* Contact Us */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Mail className="w-8 h-8 text-teal-600" />
                        Contact Us
                    </h2>
                    <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-teal-500">
                        <p className="text-gray-700 leading-relaxed mb-3">
                            If you have questions about this Agreement, please contact us at:
                        </p>
                        <p className="text-gray-800 font-semibold">
                            <a href="mailto:dave@luciddm.com" className="text-teal-600 hover:underline">dave@luciddm.com</a>
                        </p>
                        <p className="text-gray-700 mt-3">
                            310 4th Ave S Suite 5010 PMB 99491<br />
                            Minneapolis, MN 55415
                        </p>
                    </div>
                </section>

                {/* Miscellaneous */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Gavel className="w-8 h-8 text-teal-600" />
                        Miscellaneous
                    </h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-gray-700 leading-relaxed space-y-4">
                        <p>
                            No agency, partnership, joint venture, or employment is created as a result of this Agreement, and you do not have any authority to bind us in any way.
                        </p>
                        <p>
                            If any provision is found unenforceable, that provision shall be limited or eliminated to the minimum extent necessary while preserving the Agreement's full force and effect.
                        </p>
                        <p>
                            This Agreement is not assignable or transferable without our prior written consent. We may transfer, assign, or delegate this Agreement without your consent.
                        </p>
                        <p>
                            The Agreement constitutes the entire agreement regarding the subject matter and supersedes prior understandings. Modifications require written amendment signed by our authorized representative.
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default TermsAndConditions;
