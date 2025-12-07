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
            discount: "50% OFF SALE ENDS SOON",
            shipping: "1-3 Days",
            usersCount: "31451+",
            starsGiven: 5,
            isBestSeller: true,
            features: [
                { text: "All-Day Battery Power (Not the fake “up to 8 hours” nonsense)", isPositive: true },
                { text: "8 Precision Heat Zones (Twice the coverage of most vests)", isPositive: true },
                { text: "NASA-Inspired Heating Tech (Real science, not marketing fairy dust)", isPositive: true },
                { text: "Auto-Regulated Temp Control (Stays hot without roasting you alive)", isPositive: true },
                { text: "Fully Waterproof Construction (Survives real storms, not just drizzle)", isPositive: true },
                { text: "Simple One-Tap Operation (Hit the button, feel the heat)", isPositive: true },
                { text: "4.8/5 Average Rating (From over 31,451 verified customers)", isPositive: true },
                { text: "30-Day Guarantee (If it doesn’t blow you away, send it back)", isPositive: true },
                { text: "Low Inventory (People keep grabbing these fast)", isPositive: false }
            ]
        },
        {
            rank: 2,
            name: "Whitin",
            image: "/assets/vest-2.webp",
            brandimg: "/assets/vested-brand-2.webp",
            url: "https://www.amazon.com/ORORO-Mens-Lightweight-Heated-Battery/dp/B0CNZSXQMD",
            rating: 4.5,
            score: "4.6",
            price: "$149.99",
            shipping: "1-5 Days",
            usersCount: "10776+",
            starsGiven: 4.5,
            features: [
                { text: "Solid Build Quality (Looks sharp, we’ll give it that)", isPositive: true },
                { text: "Water-Resistant Only (Keeps out a sprinkle, not a storm)", isPositive: true },
                { text: "Recognizable Brand (They’ve been in the game a while)", isPositive: true },
                { text: "Just 4 Heating Zones (Half the coverage your body actually needs)", isPositive: false },
                { text: "Widespread Battery Complaints (Those 1-star reviews aren’t lying)", isPositive: false },
                { text: "Standard 1-Year Amazon Warranty (Hope you enjoy long hold times)", isPositive: false }
            ]
        },
        {
            rank: 3,
            name: "Xero Shoes",
            image: "/assets/vest-3.webp",
            brandimg: "/assets/vested-brand-3.webp",
            url: "https://amazon.com/LABEWVI-12000mAh-Lightweight-Rechargeable-Short-pile/dp/B0D97QQRV4",
            rating: 4,
            score: "4.5",
            price: "$69.99",
            shipping: "2-5 Days",
            usersCount: "93+",
            starsGiven: 4,
            features: [
                { text: "Soft Inner Lining (We’ll admit - it does feel nice)", isPositive: true },
                { text: "Multiple Heat Modes (When they work)", isPositive: true },
                { text: "Underwhelming Heat (More “warm towel” than “heated vest”)", isPositive: false },
                { text: "Clumsy Design (Power bank flops around like it’s trying to escape)", isPositive: false },
                { text: "Flimsy Construction (Breaks down faster than your gym goals)", isPositive: false }
            ]
        },
        {
            rank: 4,
            name: "Vibram FiveFingers",
            image: "/assets/vest-4.webp",
            brandimg: "/assets/vested-brand-4.webp",
            url: "https://www.amazon.com/KRBORO-7-5Hour-Lifespan-Rechargeable-Lightweight/dp/B0DN66L4XV",
            rating: 4,
            score: "4.5",
            price: "$69.99",
            shipping: "10-15 Days",
            usersCount: "665+",
            starsGiven: 4,
            features: [
                { text: "High Heat Options (When they actually turn on)", isPositive: true },
                { text: "Custom Zone Control (As long as it doesn't short out)", isPositive: true },
                { text: "Chronic Battery Failures (Drains faster than your phone)", isPositive: false },
                { text: "Sketchy Safety Track Record (Um, yikes!)", isPositive: false },
                { text: "Customer Support (Hope you’re patient - really patient)", isPositive: false }
            ]
        },
        {
            rank: 5,
            name: "Merrell",
            image: "/assets/vest-5.webp",
            brandimg: "/assets/vested-brand-5.webp",
            url: "https://www.amazon.com/LABCOOL-12000mAh-Battery-Included-Rechargeable/dp/B0CG1DB7JH",
            rating: 4,
            score: "4.4",
            price: "$79.99",
            shipping: "3-5 Days",
            usersCount: "156+",
            starsGiven: 4,
            features: [
                { text: "Basic Design (Hard to break something that barely works)", isPositive: true },
                { text: "Machine Washable (For cleaning the vest that never actually heats)", isPositive: true },
                { text: "Barely-There Warmth (Your morning coffee puts out more heat)", isPositive: false },
                { text: "Endless Charging Time (It'll be summer by the time it finishes)", isPositive: false },
                { text: "Reliability Problems (Consistently inconsistent - that’s its only talent)", isPositive: false }
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