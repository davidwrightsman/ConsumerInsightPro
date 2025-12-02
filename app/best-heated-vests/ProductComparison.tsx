import React from 'react';
import { Check, X, Star, Link } from 'lucide-react';

interface ProductFeature {
    text: string;
    isPositive: boolean;
}

interface Product {
    rank: number;
    name: string;
    image: string;
    brandimg: string;
    rating: number;
    score: string;
    url: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    shipping: string;
    usersCount: string;
    starsGiven: number;
    features: ProductFeature[];
    isBestSeller?: boolean;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-300 text-gray-300'
                    }`}
            />
        ));
    };

    return (
        <div className={`bg-white rounded-lg shadow relative overflow-hidden border ${product.isBestSeller ? 'border-teal-500 border-2' : 'border-gray-200'
            }`}>

            {/* Best Seller Badge or Rank Badge */}
            <div className='absolute top-0 left-0 bg-black text-white px-4 py-2 font-bold text-xs z-10 rounded-br-lg shadow-lg'>
                {product.isBestSeller ? (
                    <div>
                        #{product.rank} Solana Heated Vest
                    </div>
                ) : (
                    <div>
                        {product.rank}
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                {/* Left Column - Rank & Image & Name */}
                <div className="relative p-6 border-r border-gray-200 col-span-1 flex items-center justify-center flex-col gap-2">
                    {/* Product Image */}
                    <a href={product.url} target="_blank">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-56 object-contain"
                        />
                    </a>

                    {/* Brand/Product Name */}
                    <a href={product.url} target="_blank" className="text-center">
                        <img
                            src={product.brandimg}
                            alt={`${product.name} logo`}
                            className="h-10 mx-auto object-contain"
                        />
                    </a>
                </div>

                {/* Middle Column - Features */}
                <div className="p-6 border-r border-gray-200 col-span-2">
                    {/* Features List */}
                    <div className="space-y-3">
                        {product.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${feature.isPositive ? 'bg-green-100' : 'bg-red-100'
                                    }`}>
                                    {feature.isPositive ? (
                                        <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                                    ) : (
                                        <X className="w-3 h-3 text-red-600" strokeWidth={3} />
                                    )}
                                </div>

                                <span className={`text-base ${feature.isPositive ? 'text-gray-700' : 'text-gray-500'
                                    }`}>
                                    {feature.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Score & CTA */}
                <div className="p-6 flex flex-col bg-gray-50 col-span-1">
                    {/* Score Section */}
                    <div className="text-center mb-4">
                        <p className="text-base font-medium text-gray-600 uppercase tracking-wide">
                            Overall Score
                        </p>
                        <div className="text-[60px] font-bold text-gray-900 leading-tight">
                            {product.score}
                        </div>

                        <div className="flex justify-center gap-1 mb-2">
                            {renderStars(product.rating)}
                        </div>
                        <p className="text-sm font-medium text-gray-600 leading-relaxed">
                            <span>{product.usersCount} USERS GAVE<br />THIS BRAND {product.starsGiven} STARS</span>
                        </p>
                    </div>

                    {/* Discount Badge */}
                    {product.discount && (
                        <div className="bg-red-600 text-white text-center py-2 px-3 relative max-w-[200px] w-full mx-auto mb-2 text-[10px] leading-tight">
                            <span className='relative z-10'>{product.discount}</span>

                            <div className='w-7 h-7 bg-red-600 z-0 absolute bottom-0 left-1/2 -translate-x-1/2 rotate-45'></div>
                        </div>
                    )}

                    {/* CTA Button */}
                    <a href={product.url} target="_blank" className="bg-gradient-to-r from-teal-600 to-teal-700 hover:opacity-80 text-center text-white font-bold px-8 py-4 w-full rounded-full transition-all duration-500 cursor-pointer">
                        VISIT SITE
                    </a>

                    {/* Price */}
                    <div className="text-2xl font-semibold mb-1 text-gray-900 text-center mt-2">
                        {product.price}
                    </div>

                    {/* Shipping */}
                    <p className="text-center text-xs text-gray-600">
                        {product.shipping} Express Shipping
                    </p>
                </div>
            </div>
        </div>
    );
};

const ProductComparison: React.FC = () => {
    const products: Product[] = [
        {
            rank: 1,
            name: "Solana Heated Vest",
            image: "/assets/heated-vests.webp",
            brandimg: "/assets/vested-brand-1.svg",
            url: "https://offer.solanagear.com/heatedvest/landing?oid=126&affid=23&uid=2938&oidab=826&affidab=46&sub1=&sub3=692dae8b63783425651e305d",
            rating: 4.9,
            score: "4.9",
            price: "$59.99",
            discount: "50% OFF SALE ENDS SATURDAY, NOVEMBER 29, 2025",
            shipping: "1-3 Days",
            usersCount: "31451+",
            starsGiven: 5,
            isBestSeller: true,
            features: [
                { text: "8-Hour Battery Life (Actually lasts a full day, not 'up to')", isPositive: true },
                { text: "8 Strategic Heating Zones (Double what most competitors offer)", isPositive: true },
                { text: "NASA-Based Tech (Not just marketing fluff - actually works)", isPositive: true },
                { text: "Smart Overheat Protection (Because nobody likes being cooked)", isPositive: true },
                { text: "Waterproof Design (Tested in actual storms, not just light drizzle)", isPositive: true },
                { text: "One-Button Control (Works right out of the box)", isPositive: true },
                { text: "4.8/5 Rating (31,451+ real customers can't be wrong)", isPositive: true },
                { text: "30-Day Guarantee (Return it if you're not impressed)", isPositive: true },
                { text: "Limited Stock (Because word got out)", isPositive: false }
            ]
        },
        {
            rank: 2,
            name: "Whitin",
            image: "/assets/vest-2.webp",
            brandimg: "/assets/vested-brand-2.webp",
            url: "https://www.amazon.com/ORORO-Mens-Lightweight-Heated-Battery/dp/B0CNZSXQMD?tag=consumersmart-20",
            rating: 4.5,
            score: "4.6",
            price: "$149.99",
            shipping: "1-5 Days",
            usersCount: "10776+",
            starsGiven: 4.5,
            features: [
                { text: "Decent Build Quality (At least it looks nice)", isPositive: true },
                { text: "Water Resistant (Note: resistant, not waterproof)", isPositive: true },
                { text: "Known Brand Name (They've been around)", isPositive: true },
                { text: "Only 4 Heating Zones (Half of what you actually need)", isPositive: false },
                { text: "Battery Issues Everywhere (Check those 1-star reviews)", isPositive: false },
                { text: "1-Year Amazon Warranty (Good luck with that)", isPositive: false }
            ]
        },
        {
            rank: 3,
            name: "Xero Shoes",
            image: "/assets/vest-3.webp",
            brandimg: "/assets/vested-brand-3.webp",
            url: "amazon.com/LABEWVI-12000mAh-Lightweight-Rechargeable-Short-pile/dp/B0D97QQRV4?tag=consumersmart-20",
            rating: 4,
            score: "4.5",
            price: "$69.99",
            shipping: "2-5 Days",
            usersCount: "93+",
            starsGiven: 4,
            features: [
                { text: "Soft Interior (Hey, at least it's comfortable)", isPositive: true },
                { text: "Multiple Heat Settings (If you can get them to work)", isPositive: true },
                { text: "Weak Heating (Like wearing a slightly warm towel)", isPositive: false },
                { text: "Awkward Design (Power bank bounces around like a ping pong ball)", isPositive: false },
                { text: "Poor Quality (Falls apart faster than New Year's resolutions)", isPositive: false }
            ]
        },
        {
            rank: 4,
            name: "Vibram FiveFingers",
            image: "/assets/vest-4.webp",
            brandimg: "/assets/vested-brand-4.webp",
            url: "https://www.amazon.com/KRBORO-7-5Hour-Lifespan-Rechargeable-Lightweight/dp/B0DN66L4XV?tag=consumersmart-20",
            rating: 4,
            score: "4.5",
            price: "$69.99",
            shipping: "10-15 Days",
            usersCount: "665+",
            starsGiven: 4,
            features: [
                { text: "High Heat Settings (When they actually work)", isPositive: true },
                { text: "Zone Control (Until it shorts out)", isPositive: true },
                { text: "Battery Problems (Dies faster than your phone at 1%)", isPositive: false },
                { text: "Safety Issues (Unless you enjoy random electrical shorts)", isPositive: false },
                { text: "Customer Service (Good luck getting a response)", isPositive: false }
            ]
        },
        {
            rank: 5,
            name: "Merrell",
            image: "/assets/vest-5.webp",
            brandimg: "/assets/vested-brand-5.webp",
            url: "https://www.amazon.com/LABCOOL-12000mAh-Battery-Included-Rechargeable/dp/B0CG1DB7JH?tag=consumersmart-20",
            rating: 4,
            score: "4.4",
            price: "$79.99",
            shipping: "3-5 Days",
            usersCount: "156+",
            starsGiven: 4,
            features: [
                { text: "Simple Design (Nothing to break because nothing really works)", isPositive: true },
                { text: "Machine Washable (For when you need to clean your non-heating vest)", isPositive: true },
                { text: "Weak Heat Output (A cup of coffee provides more warmth)", isPositive: false },
                { text: "Charging Takes Forever (Might be ready by next winter)", isPositive: false },
                { text: "Reliability Issues (It's reliable... at being unreliable)", isPositive: false }
            ]
        }
    ];

    return (
        <section className="py-10 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Product Cards */}
                <div className="space-y-6">
                    {products.map((product) => (
                        <ProductCard key={product.rank} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductComparison;