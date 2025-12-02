"use client"

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface TrendingItem {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    link: string;
}

const TrendingLists: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const trendingItems: TrendingItem[] = [
        { id: 1, title: "Barefoot Shoes", subtitle: "Best shoes to wear", image: "/assets/grounded-shoes.webp", link: "#" },
        { id: 2, title: "Heated Vests", subtitle: "Best heated vests to wear", image: "/assets/heated-vests.webp", link: "/best-heated-vests" },
        { id: 3, title: "Fitness Rings", subtitle: "Best fitness rings to wear", image: "/assets/fitness-rings.webp", link: "#" },
        { id: 4, title: "Sleep Tapes", subtitle: "Best sleep tapes to wear", image: "/assets/sleep-tapes.webp", link: "#" },
        { id: 5, title: "Led Masks", subtitle: "Best led masks to wear", image: "/assets/led-masks.webp", link: "#" },
        { id: 6, title: "Power Washers", subtitle: "Best power washers for your home", image: "/assets/power-washers.webp", link: "#" },
        { id: 7, title: "Hearing Aids", subtitle: "Best hearing aids for your ears", image: "/assets/hearing-aids.webp", link: "#" },
        { id: 8, title: "Portable Coolers", subtitle: "Best portable coolers for summer", image: "/assets/portable-coolers.webp", link: "#" },
        { id: 9, title: "Mosquito Repellents", subtitle: "Best mosquito repellents for summer", image: "/assets/mosquito-repellents.webp", link: "#" },
        { id: 10, title: "Drone Models", subtitle: "Best Drones", image: "/assets/drone-models.webp", link: "#" },
        { id: 11, title: "Canes", subtitle: "Best Canes", image: "/assets/canes.webp", link: "#" },
        { id: 12, title: "Weed Trimmers", subtitle: "Best Weed Trimmers", image: "/assets/weed-trimmers.webp", link: "#" },
        { id: 13, title: "Grounding Sheets", subtitle: "Best Grounding Sheets", image: "/assets/grounding-sheets.webp", link: "/best-grounding-sheets" },
        { id: 14, title: "Anti Choking Devices", subtitle: "Best Anti Choking Devices", image: "/assets/anti-choking-devices.webp", link: "#" },
        { id: 15, title: "Ergonomic Pillows", subtitle: "Best Ergonomic Pillows", image: "/assets/ergonomic-pillows.webp", link: "#" },
        { id: 16, title: "Cutting Boards", subtitle: "Best Cutting Boards", image: "/assets/cutting-boards.webp", link: "#" },
        { id: 17, title: "Leaf Blowers", subtitle: "Best Leaf Blowers", image: "/assets/leaf-blowers.webp", link: "#" },
    ];

    const handlePrevSlide = (): void => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNextSlide = (): void => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <section className="py-20 px-6" id="trending-lists">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-black/60 font-semibold text-sm uppercase tracking-wider mb-4">
                        POPULAR CATEGORIES
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Trending{' '}
                        <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                            Lists
                        </span>
                    </h2>
                </div>

                {/* Swiper Carousel */}
                <div className="relative px-1">
                    {/* Custom Navigation Buttons */}
                    <button
                        onClick={handlePrevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white cursor-pointer hover:bg-teal-600 text-gray-800 hover:text-white w-12 h-12 rounded-full shadow-lg hidden md:flex items-center justify-center transition-all duration-300 -translate-x-6 group"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={handleNextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white cursor-pointer hover:bg-teal-600 text-gray-800 hover:text-white w-12 h-12 rounded-full shadow-lg hidden md:flex items-center justify-center transition-all duration-300 translate-x-6 group"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        onBeforeInit={(swiper: SwiperType) => {
                            swiperRef.current = swiper;
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            dynamicMainBullets: 3,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mySwiper"
                    >
                        {trendingItems.map((item: TrendingItem) => (
                            <SwiperSlide key={item.id}>
                                <Link href={item.link}>
                                    <div className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300 cursor-pointer mb-8 md:mb-10">
                                        {/* Image */}
                                        <div className="relative h-[230px] mb-5 overflow-hidden rounded-xl bg-white border border-gray-200">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Text */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            Top 5 Best <span className="text-teal-600">{item.title}</span>
                                        </h3>
                                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Custom Styles for Swiper Pagination */}
            <style jsx global>{`
                .mySwiper .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #d1d5db;
                    opacity: 1;
                    transition: all 0.3s ease;
                }

                .mySwiper .swiper-pagination-bullet-active {
                    background: #0d9488;
                    width: 24px;
                    border-radius: 5px;
                }

                .mySwiper .swiper-pagination-bullet:hover {
                    background: #14b8a6;
                    transform: scale(1.2);
                }

                .mySwiper .swiper-pagination {
                    bottom: 0 !important;
                }
            `}</style>
        </section>
    );
};

export default TrendingLists;