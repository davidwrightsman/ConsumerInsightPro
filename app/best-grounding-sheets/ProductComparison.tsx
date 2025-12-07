import React from 'react';
import { Check, X, Star } from 'lucide-react';

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
                        #{product.rank} BareEarth Sheets
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
                            <span>{product.starsGiven} Based on {product.usersCount} <br /> Verified Customers</span>
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
            name: "BareEarth Sheets",
            image: "/assets/1.webp",
            brandimg: "/assets/bareearth-logo.webp",
            url: "https://offer.bareearthlife.com/groundedsheets/landing?uid=3061&oid=858&affid=831",
            rating: 4.9,
            score: "4.9",
            price: "$109.99",
            discount: "50% OFF SALE ENDS SATURDAY, NOVEMBER 29, 2025",
            shipping: "1-3 Days",
            usersCount: "1200+",
            starsGiven: 4.9,
            isBestSeller: true,
            features: [
                { text: "Passive recovery while you sleep", isPositive: true },
                { text: "EMF-blocking & naturally antimicrobial", isPositive: true },
                { text: "Enormous range of health and wellness benefits", isPositive: true },
                { text: "100% organic and chemical-free with zero side effects", isPositive: true },
                { text: "Doctor recommended and backed by science", isPositive: true },
                { text: "Built with your comfort in mind and extremely durable", isPositive: true },
                { text: "Easily set it up in seconds", isPositive: true },
                { text: "Always selling out due to high demand", isPositive: false }
            ]
        },
        {
            rank: 2,
            name: "Restembarace",
            image: "/assets/2.webp",
            brandimg: "/assets/restembarace-logo.webp",
            url: "https://www.amazon.com/Grounding-Organic-Grounded-Connected-Bedding/dp/B0FLJTV5YL/",
            rating: 4.8,
            score: "4.8",
            price: "169.99",
            shipping: "2-5 Days",
            usersCount: "75+",
            starsGiven: 4.8,
            features: [
                { text: "High-quality, soft material", isPositive: true },
                { text: "Helps users fall asleep faster and relax", isPositive: true },
                { text: "Dual grounding plugs for convenience", isPositive: true },
                { text: "Great fit for king-size beds", isPositive: true },
                { text: "Very easy to set up", isPositive: true },
                { text: "Extremely high price for similar benefits", isPositive: false },
                { text: "Heavier and less breathable than other sheets", isPositive: false },
                { text: "Corded design limits mobility", isPositive: false },
                { text: "Far better value available from other brands", isPositive: false }
            ]
        },
        {
            rank: 3,
            name: "Zajaz",
            image: "/assets/3.webp",
            brandimg: "/assets/zajaz-logo.webp",
            url: "https://www.amazon.com/Grounding-Sheets-Organic-Connected-Bedding/dp/B0FMNXR6FT/",
            rating: 4.5,
            score: "4.5",
            price: "$99.99",
            shipping: "2-5 Days",
            usersCount: "63+",
            starsGiven: 4.5,
            features: [
                { text: "Facilitates restful sleep and boosts energy", isPositive: true },
                { text: "Soft on the skin and feels well-made", isPositive: true },
                { text: "Reported to provide noticeable pain relief", isPositive: true },
                { text: "Fits mattresses snugly and is easy to set up", isPositive: true },
                { text: "Fewer reviews; long-term durability is unproven", isPositive: false },
                { text: "Thinner material than premium competitors", isPositive: false },
                { text: "Grounding connection feels less robust", isPositive: false },
                { text: "Only available in very limited sizes and colors", isPositive: false }
            ]
        },
        {
            rank: 4,
            name: "OneOMG",
            image: "/assets/4.webp",
            brandimg: "/assets/oneomg-logo.webp",
            url: "https://www.amazon.com/Grounding-Earthing-Grounded-grounding-Improved/dp/B0D69LMKM4/",
            rating: 4.2,
            score: "4.2",
            price: "$55.99",
            shipping: "3-6 Days",
            usersCount: "541+",
            starsGiven: 4.2,
            features: [
                { text: "Very low price point", isPositive: true },
                { text: "Feels soft and smooth", isPositive: true },
                { text: "Long connection cord included", isPositive: true },
                { text: "Inconsistent performance from user to user", isPositive: false },
                { text: "Feels cheaply made despite initial softness", isPositive: false },
                { text: "Gets uncomfortably warm during use", isPositive: false },
                { text: "Vague benefits that are hard to verify", isPositive: false },
                { text: "Questionable long-term durability", isPositive: false }
            ]
        },
        {
            rank: 5,
            name: "Sayorg",
            image: "/assets/5.webp",
            brandimg: "/assets/sayorg-logo.webp",
            url: "https://www.amazon.com/Grounding-Sheets-Organic-Grounded-Relieves/dp/B0DRW7R9RG/",
            rating: 4.2,
            score: "4.2",
            price: "$74.99",
            shipping: "3-6 Days",
            usersCount: "335+",
            starsGiven: 4.2,
            features: [
                { text: "Made with organic cotton", isPositive: true },
                { text: "Reduces morning stiffness for some", isPositive: true },
                { text: "Fits king-size mattresses well", isPositive: true },
                { text: "Straightforward to connect", isPositive: true },
                { text: "Technical glitches reported with grounding connection", isPositive: false },
                { text: "Uncomfortable fit for many mattress types", isPositive: false },
                { text: "Poor coverage around key areas of the bed", isPositive: false },
                { text: "Flimsy connection snap breaks easily", isPositive: false },
                { text: "Lower quality silver fiber", isPositive: false },
                { text: "More expensive than other budget options for no added benefit", isPositive: false }
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