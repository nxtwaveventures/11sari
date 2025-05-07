import React from 'react';
import Image from 'next/image';

const sareeDeals = [
    // Amazon Deals
    {
        name: "SWORNOF Women's kanjivaram banarasi silk saree",
        image: '/saree-images/swarnof-kanjivaram.jpg',
        originalPrice: "₹19,999",
        currentPrice: "₹4,999",
        discount: "75% OFF",
        link: "https://www.amazon.in/SWORNOF-kanjivaram-banarasi-festival-Wedding/dp/B0D81C4CBV/",
        source: "Amazon"
    },
    {
        name: "SGF11- Women's Kanjivaram Pure Soft Silk Handloom Saree",
        image: '/saree-images/sgf11-kanjivaram.jpg',
        originalPrice: "₹8,999",
        currentPrice: "₹1,395",
        discount: "84% OFF",
        link: "https://www.amazon.in/SGF11-Womens-Kanjivaram-Handloom-Golden/dp/B0C3M839Z8/",
        source: "Amazon"
    },
    {
        name: "SWORNOF Women's Banarasi Patola Silk Saree",
        image: '/saree-images/swarnof-banarasi-patola.jpg',
        originalPrice: "-",
        currentPrice: "-",
        discount: "-",
        link: "https://www.amazon.in/SWORNOF-Womens-Banarasi-Patola-Blouse/dp/B0BPCWJ555/",
        source: "Amazon"
    },
    {
        name: "SWORNOF Women's Patola Silk Saree With Unstitched Blouse Piece",
        image: '/saree-images/swarnof-patola.jpg',
        originalPrice: "-",
        currentPrice: "-",
        discount: "-",
        link: "https://www.amazon.in/SWORNOF-Womens-Patola-Unstitched-Boluse/dp/B0BML2ZBC1/",
        source: "Amazon"
    },
    {
        name: "SIRIL Women's Shimmer Chiffon Bead Lace Dual Tone Saree",
        image: '/saree-images/siril-shimmer-chiffon.jpg',
        originalPrice: "₹4,599",
        currentPrice: "₹1,139",
        discount: "75% OFF",
        link: "https://www.amazon.in/SIRIL-Shimmer-Chiffon-Unstitched-4344S142_Mauve/dp/B0F5Q2NVTJ/",
        source: "Amazon"
    },
    {
        name: "Mimosa Women's Patola Art Silk Saree",
        image: '/saree-images/mimosa-patola.jpg',
        originalPrice: "₹5,699",
        currentPrice: "₹1,759",
        discount: "69% OFF",
        link: "https://www.amazon.in/Mimosa-Patola-style-saree-Color/dp/B081L9PTXM/",
        source: "Amazon"
    },
    // Myntra/Ajio Deals via Cuelinks
    {
        name: "Sangria Embroidered Net Saree",
        image: '/saree-images/sangria-embroidered-net.jpg',
        originalPrice: "-",
        currentPrice: "-",
        discount: "40%+ OFF",
        link: "https://linksredirect.com/?cid=24861&source=linkkit&url=https%3A%2F%2Fwww.myntra.com%2Fsarees%2Fsangria%2Fsangria-embroidered-net-sarees%2F24780748%2Fbuy",
        source: "Myntra"
    },
    {
        name: "Kalini Printed Batik Saree",
        image: '/saree-images/kalini-printed-batik.jpg',
        originalPrice: "-",
        currentPrice: "-",
        discount: "40%+ OFF",
        link: "https://linksredirect.com/?cid=24861&source=linkkit&url=https%3A%2F%2Fwww.myntra.com%2Fsarees%2Fkalini%2Fkalini-printed-batik-saree%2F22010258%2Fbuy",
        source: "Myntra"
    }
];

export default function PriceDropPage() {
    return (
        <main className="min-h-screen py-16 px-4 bg-gradient-to-br from-pink-50 to-yellow-50">
            <h1 className="text-4xl font-bold text-center mb-8">🔥 Saree Price Drops & Hot Deals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {sareeDeals.map((deal, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition-transform duration-200">
                        <div className="w-full h-56 relative mb-4 rounded-lg overflow-hidden bg-gray-100">
                            <Image
                                src={deal.image}
                                alt={deal.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={idx < 3}
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{deal.name}</h2>
                        {deal.originalPrice !== '-' && deal.currentPrice !== '-' && (
                            <div className="mb-2">
                                <span className="line-through text-gray-400 mr-2">{deal.originalPrice}</span>
                                <span className="text-green-600 font-bold">{deal.currentPrice}</span>
                                <span className="ml-2 bg-yellow-300 text-yellow-900 px-2 py-1 rounded text-xs font-bold">{deal.discount}</span>
                            </div>
                        )}
                        {deal.discount !== '-' && deal.originalPrice === '-' && deal.currentPrice === '-' && (
                            <span className="mb-2 bg-yellow-300 text-yellow-900 px-2 py-1 rounded text-xs font-bold">{deal.discount}</span>
                        )}
                        <span className="mb-4 text-sm text-gray-500">{deal.source}</span>
                        <a
                            href={deal.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 text-white font-semibold shadow hover:scale-110 transition-all"
                        >
                            Buy Now
                        </a>
                    </div>
                ))}
            </div>
            <p className="text-center text-gray-400 mt-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        </main>
    );
} 