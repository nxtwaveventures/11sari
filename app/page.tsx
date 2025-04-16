import Link from 'next/link';
import Image from 'next/image';

// Bubble component for ocean animation
const Bubble = ({ size, delay, left }: { size: number, delay: number, left: string }) => {
    return (
        <div
            className={`absolute bottom-0 rounded-full bg-ocean-200/30 z-10`}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                left: left,
                animationDelay: `${delay}s`,
                animation: `bubble ${5 + size / 10}s ease-in-out infinite ${delay}s`
            }}
        ></div>
    );
};

export default function Home() {
    // Sample featured sarees data - in a real app this would come from a database/API
    const featuredSarees = [
        { id: 'kanch001', name: 'Royal Kanjivaram', type: 'Kanjivaram', price: 8500, difficulty: 3, imageUrl: '/images/kanch001.jpg' },
        { id: 'bnrs002', name: 'Golden Banarasi', type: 'Banarasi', price: 6200, difficulty: 2, imageUrl: '/images/bnrs002.jpg' },
        { id: 'chnd003', name: 'Azure Chanderi', type: 'Chanderi', price: 3400, difficulty: 1, imageUrl: '/images/chnd003.jpg' },
    ];

    // Generate random bubbles
    const bubbles = Array.from({ length: 20 }, (_, i) => ({
        size: Math.floor(Math.random() * 40) + 10,
        delay: Math.random() * 10,
        left: `${Math.random() * 100}%`,
    }));

    return (
        <div className="min-h-screen bg-gradient-to-b from-sunrise-100 to-ocean-100">
            {/* Ocean waves and bubbles animation in the background */}
            <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
                <div className="absolute bottom-0 w-full h-64 bg-ocean-500/20 animate-wave"
                    style={{ borderRadius: '50% 50% 0 0', transform: 'scaleX(1.5)', transformOrigin: 'bottom' }}>
                </div>
                <div className="absolute bottom-0 w-full h-48 bg-ocean-600/30 animate-wave"
                    style={{ borderRadius: '50% 50% 0 0', transform: 'scaleX(1.3)', animationDelay: '0.5s', transformOrigin: 'bottom' }}>
                </div>
                <div className="absolute bottom-0 w-full h-32 bg-ocean-700/40 animate-wave"
                    style={{ borderRadius: '50% 50% 0 0', transform: 'scaleX(1.1)', animationDelay: '1s', transformOrigin: 'bottom' }}>
                </div>

                {/* Bubbles */}
                {bubbles.map((bubble, index) => (
                    <Bubble
                        key={index}
                        size={bubble.size}
                        delay={bubble.delay}
                        left={bubble.left}
                    />
                ))}
            </div>

            <div className="relative container mx-auto px-4 py-8 z-10">
                <header className="flex justify-between items-center mb-12 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-3xl font-bold bg-gradient-to-r from-sunrise-500 to-sunrise-700 text-transparent bg-clip-text">11Sari.com</div>
                    <nav className="flex gap-6">
                        <Link href="/collection" className="text-ocean-800 hover:text-sunrise-500 transition-colors">Collection</Link>
                        <Link href="/about" className="text-ocean-800 hover:text-sunrise-500 transition-colors">Our Story</Link>
                        <Link href="/blockchain" className="text-ocean-800 hover:text-sunrise-500 transition-colors">Blockchain</Link>
                        <Link href="/account" className="text-ocean-800 hover:text-sunrise-500 transition-colors">My Account</Link>
                    </nav>
                </header>

                <section className="mb-16">
                    <div className="relative h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-sunrise-600/70 to-sunrise-900/70 z-10" />
                        <div className="absolute inset-0 flex flex-col justify-center items-start p-16 z-20 text-white">
                            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Sunrise on Silk Heritage</h1>
                            <p className="text-xl mb-8 max-w-2xl">Each saree captures the radiance of dawn, authenticated on blockchain with traceable artisan origins and minted as an exclusive NFT.</p>
                            <Link href="/collection" className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg">
                                Explore Collection
                            </Link>
                        </div>
                        <div className="relative w-full h-full">
                            {/* Sunrise gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-b from-sunrise-900 via-sunrise-500 to-ocean-500"></div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-sunrise-800">Featured Sarees</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredSarees.map((saree) => (
                            <Link href={`/product/${saree.id}`} key={saree.id} className="group">
                                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                                    <div className="relative h-80 bg-gradient-to-br from-ocean-200 to-sunrise-200">
                                        {/* Placeholder for saree image */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-lg font-medium text-gray-800">{saree.name}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-xl mb-2 group-hover:text-sunrise-600 transition-colors">{saree.name}</h3>
                                        <p className="text-gray-600 mb-2">Type: {saree.type}</p>
                                        <p className="text-gray-600 mb-4">Drape Difficulty: {saree.difficulty}/5</p>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-lg text-sunrise-800">₹{saree.price.toLocaleString()}</span>
                                            <span className="text-ocean-600 font-medium">View Details →</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-lg">
                        <h2 className="text-3xl font-bold mb-6 text-sunrise-700">AI-Powered Styling</h2>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <p className="text-lg mb-6 text-gray-700">
                                    Our AI stylist analyzes your body type, skin tone, and preferences to recommend the perfect saree for your occasion.
                                </p>
                                <Link href="/stylist" className="inline-block bg-ocean-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-ocean-700 transition-colors shadow-md">
                                    Try AI Stylist
                                </Link>
                            </div>
                            <div className="flex-1 bg-gradient-to-br from-sunrise-100 to-ocean-100 p-6 rounded-xl shadow-md">
                                <div className="rounded-lg h-64 bg-white/50 flex items-center justify-center">
                                    <span className="text-gray-500 font-medium">AI Stylist Preview</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="py-8 border-t border-sunrise-200 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-sunrise-700">11Sari.com</h3>
                            <p className="text-gray-600">
                                Revolutionizing saree shopping with blockchain verification and AI styling assistance.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-sunrise-700">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="/collection" className="text-gray-600 hover:text-ocean-600 transition-colors">Collection</Link></li>
                                <li><Link href="/blockchain" className="text-gray-600 hover:text-ocean-600 transition-colors">Blockchain NFT</Link></li>
                                <li><Link href="/stylist" className="text-gray-600 hover:text-ocean-600 transition-colors">AI Stylist</Link></li>
                                <li><Link href="/about" className="text-gray-600 hover:text-ocean-600 transition-colors">Our Story</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-sunrise-700">Connect With Us</h3>
                            <p className="text-gray-600 mb-4">
                                Join our community of saree enthusiasts.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-600 hover:text-sunrise-500 transition-colors">Twitter</a>
                                <a href="#" className="text-gray-600 hover:text-sunrise-500 transition-colors">Instagram</a>
                                <a href="#" className="text-gray-600 hover:text-sunrise-500 transition-colors">Discord</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-sunrise-200 text-center text-gray-500">
                        © 2024 11Sari.com — All Rights Reserved
                    </div>
                </footer>
            </div>
        </div>
    );
} 