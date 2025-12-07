import Link from 'next/link';
import { Shield, FileText, AlertCircle, Lock, Eye, Users } from 'lucide-react';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
                        <Shield className="w-8 h-8 text-teal-400" />
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Website Owner:</strong> Consumer Insight Pro is the owner of this website ("Consumer Insight Pro Website"). Consumer Insight Pro can be contacted by mail at 310 4th Ave S Suite 5010 PMB 99491 Minneapolis, MN or by e-mail at <a href="mailto:consumerinsightpro@gmail.com"><b>consumerinsightpro@gmail.com</b></a>.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This online privacy notice discloses Consumer Insight Pro information practices for this Consumer Insight Pro Website, including what type of personal identifiable information is requested in order to make a purchase, how the information is used, and with whom the information is shared. Note that other Consumer Insight Pro websites may be governed by privacy notices containing different information practices applicable to those sites.
                        </p>
                    </div>
                </section>

                {/* Website Visits and Transactions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Website Visits and Transactions</h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In general, you can visit on the Consumer Insight Pro Website and by doing so agree to this Privacy Policy, our Terms of Use, and the collection of certain personal information collected electronically for the purposes disclosed in this Privacy Policy, including without limitation personal and company financial data collected in connection with the Employee Retention Credit services provided by Consumer Insight Pro. In addition, Consumer Insight Pro does keep track of the domains from which people visit us.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At times, Consumer Insight Pro will need personal information regarding a customer or a prospect. For example, to process an order or provide a subscription, Consumer Insight Pro may need to know a customer's name, mailing address, e-mail address and credit card details. It is Consumer Insight Pro's intent to inform you before Consumer Insight Pro collects personal information, such as user's name and/or address on the Internet. If you tell us that you do not wish to have this information used as a basis for further contact with you, Consumer Insight Pro will respect your wishes.
                        </p>
                    </div>
                </section>

                {/* Personal Information That May Be Collected */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Information That May Be Collected</h2>

                    <div className="space-y-6">
                        {/* Identifying Information */}
                        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-teal-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <Users className="w-6 h-6 text-teal-600" />
                                Identifying Information
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                In order to access designated subscriber services and/or restricted areas within the Consumer Insight Pro Website, Consumer Insight Pro will request a user to provide certain personal identifying information, which may include: legal name, postal address, e-mail address, screen name, password, telephone number, facsimile number, method of payment, and, if applicable, credit card number. Consumer Insight Pro may request additional information necessary to establish and maintain customer's account.
                            </p>
                        </div>

                        {/* Service Quality Monitoring */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <Eye className="w-6 h-6 text-teal-600" />
                                Service Quality Monitoring
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Some Website transactions may require a customer to telephone Consumer Insight Pro, or Consumer Insight Pro to call the customer. Consumer Insight Pro will not contact you by telephone without your prior consent, except to confirm an order placed online and/or to inform a customer of the status of such order. Customer should be aware that it is Consumer Insight Pro's practice to monitor, and in some cases record such calls for staff training or quality assurance purposes.
                            </p>
                        </div>

                        {/* Information from Children */}
                        <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <AlertCircle className="w-6 h-6 text-yellow-600" />
                                Information from Children
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Consumer Insight Pro does not sell products or services for purchase by children, and will not knowingly collect or post information from a child under the age of 18 without the involvement of a parent or guardian. To the extent reasonably possible, Consumer Insight Pro will notify the child's parent or guardian at the e-mail address provided by the prospective customer, alerting the parent or guardian to the child's use of the Website and providing instructions as to how the parent or guardian can delete the child's registration from the Website.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Lost or Stolen Information */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Lost or Stolen Information</h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                            If a customer's password is lost or stolen, the customer should promptly notify Consumer Insight Pro in order to enable Consumer Insight Pro to cancel the lost or stolen information and to update its records with a changed password.
                        </p>
                    </div>
                </section>

                {/* Chat Rooms, Forums and Bulletin Boards */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Chat Rooms, Forums and Bulletin Boards</h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                            If customer participates in a Consumer Insight Pro chat room, discussion forum, or posts messages to a Consumer Insight Pro bulletin board, customer should be aware that the information disclosed and shared will be broadly available to other persons, both inside of and/or outside Consumer Insight Pro, who have access to that chat room, forum or bulletin board. Some individual Consumer Insight Pro chat rooms, forums or bulletin boards have additional rules and conditions regarding participation. Also, participant's expressed opinion is his or her own and should not be considered as reflecting the opinion of Consumer Insight Pro.
                        </p>
                    </div>
                </section>

                {/* Links to Other Websites */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Links to Other Websites</h2>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                            A Consumer Insight Pro Website may contain links to other websites. Consumer Insight Pro is not responsible for the privacy practices or the content of those other Websites.
                        </p>
                    </div>
                </section>

                {/* Uses Made of the Information */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Uses Made of the Information</h2>

                    <div className="space-y-6">
                        {/* Limited Uses Identified */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Limited Uses Identified</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Personal information collected by Consumer Insight Pro will be used for: statistical analysis of customer's behavior; product and service development; content improvement; to customize the content and layout of Consumer Insight Pro website; for marketing related services from Consumer Insight Pro and from third parties in which customer may be interested in Consumer Insight Pro's judgement.
                            </p>
                        </div>

                        {/* Stored Information Uses */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stored Information Uses</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Consumer Insight Pro stores and retains customer information. Stored information is used by Consumer Insight Pro and Consumer Insight Pro agents and by third parties: to support customer interaction with the Consumer Insight Pro Website; to deliver customer purchases; and/or to contact customer again about other Consumer Insight Pro services and products.
                            </p>
                        </div>

                        {/* Online Advertising */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Advertising</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Some companies that help Consumer Insight Pro deliver interactive on-line advertising, such as banner ads, may collect and use information about Consumer Insight Pro's customers to help Consumer Insight Pro better understand the types of advertising or promotions that are most appealing to Consumer Insight Pro's customers. After it is collected the information is aggregated so it is not identifiable to a specific individual.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclosure of the Information */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclosure of the Information</h2>

                    <div className="space-y-6">
                        {/* Within Corporate Organization */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Within Corporate Organization</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Consumer Insight Pro is a multinational organization, with legal entities, business processes, management structures, and technical systems that cross borders. Consumer Insight Pro may share your personal information within the Consumer Insight Pro corporate organization, and may transfer the information to countries where Consumer Insight Pro conducts business. Some countries may provide less legal protection for customer personal information.
                            </p>
                        </div>

                        {/* Mergers and Acquisitions */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mergers and Acquisitions</h3>
                            <p className="text-gray-700 leading-relaxed">
                                For the purpose of developing and expanding its business, Consumer Insight Pro may share, rent, sell or buy business assets. In such transactions, customer information is generally one of the transferred business assets. Also, in the event Consumer Insight Pro is acquired, customer information will be one of the transferred assets.
                            </p>
                        </div>

                        {/* Affiliated Businesses */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Affiliated Businesses</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Consumer Insight Pro works closely with affiliated businesses operating website stores, providing services or selling products on each other's Websites. These businesses identify themselves to customers. Customer information related to a transaction with an affiliated business is shared with that affiliated business.
                            </p>
                        </div>

                        {/* Disclosure to Governmental Authorities */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Disclosure to Governmental Authorities</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Consumer Insight Pro releases personal identifying information when Consumer Insight Pro believes release is appropriate to comply with law, to enforce Consumer Insight Pro agreements, or to protect the rights, property or safety of Consumer Insight Pro customers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Use of Computer Tracking Technologies */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Use of Computer Tracking Technologies</h2>

                    <div className="space-y-6">
                        {/* No Tracking of Personal Information */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Tracking of Personal Information</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Consumer Insight Pro's Website(s) are set up via cookies and other means to track, collect or distribute information not entered by visitors. Through website access logs Consumer Insight Pro does collect clickstream data and HTTP protocol elements, which generate certain kinds of non-identifying site usage data, such as the number of hits and visits to our sites. This information is used for internal purposes by technical support staff for research and development, user analysis and business decision making, all of which provides better services to the public.
                            </p>
                        </div>

                        {/* Use of Cookies */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-l-4 border-purple-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Use of Cookies</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Consumer Insight Pro, or its third party vendors, collects non-identifiable and personal information through the use of various technologies, including "cookies." A cookie is an alphanumeric identifier that a Website can transfer to customer's hard drive through customer's browser. Customer can set its browser to notify customer before a cookie is received, giving an opportunity to decide whether to accept the cookie. Customer may also set its browser to turn off cookies; however, some Websites may not then work properly.
                            </p>
                        </div>

                        {/* Collection of Non-Identifiable Information */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Collection of Non-Identifiable Information</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Consumer Insight Pro may collect non-identifiable information from user visits to the Consumer Insight Pro Website(s) in order to provide better customer service. Examples of such collecting include: traffic analysis, such as tracking of the domains from which users visit, or tracking numbers of visitors; measuring visitor activity; Website and system administration; user analysis; and business decision making.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Information Security */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Lock className="w-8 h-8 text-teal-600" />
                        Information Security
                    </h2>

                    <div className="space-y-6">
                        {/* Commitment to Online Security */}
                        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border-l-4 border-green-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Commitment to Online Security</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Consumer Insight Pro employs physical, electronic and managerial procedures to safeguard the security and integrity of personal information. Billing and payment data is encrypted whenever transmitted or received online. Personal information is accessible only by staff designated to handle online requests or complaints.
                            </p>
                        </div>

                        {/* No Liability for Acts of Third Parties */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Liability for Acts of Third Parties</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Consumer Insight Pro will exercise all reasonable efforts to safeguard the confidentiality of customer personal information. However, transmissions protected by industry standard security technology and implemented by human beings cannot be made absolutely secure. Consequently, Consumer Insight Pro shall not be liable for unauthorized disclosure of personal information due to no fault of Consumer Insight Pro including, but not limited to, errors in transmission and unauthorized acts of Consumer Insight Pro staff and third parties.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy Changes and Opt-Out Rights */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy Changes and Opt-Out Rights</h2>

                    <div className="space-y-6">
                        {/* Changes to Privacy Policy */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Changes to Privacy Policy</h3>
                            <p className="text-gray-700 leading-relaxed">
                                This privacy notice was last updated on July 8, 2022. Consumer Insight Pro reserves the right to change its privacy policy statement at any time. A notice of such change will be posted on the Consumer Insight Pro Website on page for three (3) days prior to the implementation of such change.
                            </p>
                        </div>

                        {/* Opt-Out Rights */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Opt-Out Rights</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Customer has the right at any time to cease permitting personal information to be collected, used or disclosed by Consumer Insight Pro and/or by any third parties with whom Consumer Insight Pro has shared and/or transferred such personal information. Right of cancellation may be exercised by contacting Consumer Insight Pro via e-mail at <a href="mailto:consumerinsightpro@gmail.com" className="text-teal-600 hover:underline">consumerinsightpro@gmail.com</a>, telephone or certified postal mail. After processing the cancellation, Consumer Insight Pro will delete customer or prospective customer's personal information from its data base.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Access Rights to Data */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Access Rights to Data</h2>

                    <div className="space-y-6">
                        {/* Information Maintained by Consumer Insight Pro */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Information Maintained by Consumer Insight Pro</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Upon customer's request, Consumer Insight Pro will provide a reasonable description of customer's personally identifiable information that Consumer Insight Pro maintains in its data bank. Consumer Insight Pro can be contacted by e-mail at <a href="mailto:consumerinsightpro@gmail.com" className="text-teal-600 hover:underline">consumerinsightpro@gmail.com</a> or certified postal mail at 310 4th Ave S Suite 5010 PMB 99491 Minneapolis, MN.
                            </p>
                        </div>

                        {/* California Privacy Rights */}
                        <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">California Privacy Rights</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Beginning on January 1, 2005, California Civil Code Section 1798.83 permits customers of Consumer Insight Pro who are California residents to request certain information regarding Consumer Insight Pro's disclosure of personal information for their direct marketing purposes. To make such a request, please write to: 310 4th Ave S Suite 5010 PMB 99491 Minneapolis, MN.
                            </p>
                        </div>

                        {/* Corrections and Changes */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Corrections and Changes</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Help Consumer Insight Pro to keep customer personal information accurate. If customer's personal information changes, or if customer notes an error upon review of customer information that Consumer Insight Pro has on file, please promptly e-mail Consumer Insight Pro and provide the new or correct information.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Accountability */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Accountability</h2>

                    <div className="space-y-6">
                        {/* Questions, Problems and Complaints */}
                        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-teal-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <AlertCircle className="w-6 h-6 text-teal-600" />
                                Questions, Problems and Complaints
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have a question about this policy statement, or a complaint about Consumer Insight Pro compliance with this privacy policy, you may contact Consumer Insight Pro by e-mail at <a href="mailto:consumerinsightpro@gmail.com" className="text-teal-600 hover:underline font-semibold">consumerinsightpro@gmail.com</a>.
                            </p>
                        </div>

                        {/* Terms of Use */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <FileText className="w-6 h-6 text-teal-600" />
                                Terms of Use
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                If customer chooses to subscribe to Consumer Insight Pro's services, customer's action is hereby deemed acceptance of Consumer Insight Pro practices described in this policy statement. Any dispute over privacy between customer and Consumer Insight Pro is subject to the provisions of this notice and to Consumer Insight Pro's Terms of Use Agreement which is hereby incorporated herein as an integral part of this Privacy Policy with regard to the provisions covered by the Terms of Use.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
