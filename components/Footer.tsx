"use client"

import Link from "next/link";

const Footer: React.FC = () => {

    return (
        <footer className="py-20 px-6 bg-black/80">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                <div className="max-w-[800px] w-full">
                    <Link href="/">
                        <img src="/assets/logo.webp" alt="logo" />
                    </Link>

                    <p className="text-white/90 text-sm mt-5 max-w-[450px]">
                        We are a free resource providing opinions on the latest online products. We may be compensated when products are bought through Consumer Smart Reviews, which may influence the rankings of products.
                    </p>
                </div>

                <div>
                    <h2 className="text-white text-xl font-semibold mb-5">INFORMATION</h2>

                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link href="/" className="text-white/90 text-sm hover:text-white transition-all duration-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/#about" className="text-white/90 text-sm hover:text-white transition-all duration-300">About us</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white/90 text-sm hover:text-white transition-all duration-300">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="text-white/90 text-sm hover:text-white transition-all duration-300">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/terms-conditions" className="text-white/90 text-sm hover:text-white transition-all duration-300">Terms of Use</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;