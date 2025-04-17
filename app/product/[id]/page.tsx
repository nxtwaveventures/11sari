// This is the server component file for static generation
import ProductClient from './product-client';

// Mock data for the saree types - moved to server component for static generation
const sareeData = {
    '1': {
        id: '1',
        name: 'Royal Kanjivaram Silk',
        price: '₹8,999',
        weaverId: 'WVR-12345',
        dyeIngredients: 'Natural indigo, turmeric, madder root',
        drapeDifficulty: 3,
        description: 'Exquisite Kanjivaram silk saree with intricate gold zari work and traditional temple border design. This luxurious piece showcases the exceptional craftsmanship of Tamil Nadu weavers.',
        material: '100% Pure Silk',
        color: 'Royal Blue with Gold Border',
        modelPath: '/models/kanjivaram.glb', // placeholder - would be a real 3D model path
        rating: 4.8,
        reviews: 24,
    },
    '2': {
        id: '2',
        name: 'Banarasi Heritage',
        price: '₹6,499',
        weaverId: 'WVR-23456',
        dyeIngredients: 'Saffron, lac dye, iron mordant',
        drapeDifficulty: 4,
        description: 'Traditional Banarasi saree with elaborate brocade patterns and intricate zari work. Handcrafted by master artisans from Varanasi, this saree represents the pinnacle of Indian textile heritage.',
        material: 'Silk with Gold Zari',
        color: 'Crimson Red with Golden Motifs',
        modelPath: '/models/banarasi.glb', // placeholder
        rating: 4.9,
        reviews: 36,
    },
    '3': {
        id: '3',
        name: 'Chanderi Fusion',
        price: '₹3,699',
        weaverId: 'WVR-34567',
        dyeIngredients: 'Pomegranate rind, myrobalan, ferrous sulfate',
        drapeDifficulty: 2,
        description: 'Lightweight Chanderi saree with contemporary geometric patterns blended with traditional motifs. The perfect balance of heritage and modern aesthetics.',
        material: 'Chanderi Cotton-Silk Blend',
        color: 'Mint Green with Silver Accents',
        modelPath: '/models/chanderi.glb', // placeholder
        rating: 4.7,
        reviews: 18,
    }
};

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
    // Return an array of objects with the id param for each product
    return Object.keys(sareeData).map(id => ({
        id
    }));
}

// Server component that passes data to the client component
export default function ProductPage({ params }: { params: { id: string } }) {
    const id = params.id;
    // Get product data based on ID
    const product = sareeData[id as keyof typeof sareeData] || sareeData['1'];

    return <ProductClient product={product} />;
} 