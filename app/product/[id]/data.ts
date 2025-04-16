// Define the saree type
export interface Saree {
    id: string;
    name: string;
    type: string;
    price: number;
    difficulty: number;
    weaverId: string;
    origin: string;
    dyes: string;
    description: string;
    model3dUrl: string;
    images: string[];
}

// Mock data for demonstration
export const sareeData: Record<string, Saree> = {
    kanch001: {
        id: 'kanch001',
        name: 'Royal Kanjivaram',
        type: 'Kanjivaram',
        price: 8500,
        difficulty: 3,
        weaverId: 'WVR78923',
        origin: 'Kanchipuram, Tamil Nadu',
        dyes: 'Natural indigo, turmeric, madder root',
        description: 'A regal Kanjivaram silk saree featuring intricate zari work and a rich purple base with gold motifs. This heirloom-quality piece represents centuries of weaving tradition from Tamil Nadu.',
        model3dUrl: '/models/kanch001.glb', // This would be a real 3D model path
        images: [
            '/images/kanch001_1.jpg',
            '/images/kanch001_2.jpg',
            '/images/kanch001_3.jpg',
        ]
    },
    bnrs002: {
        id: 'bnrs002',
        name: 'Golden Banarasi',
        type: 'Banarasi',
        price: 6200,
        difficulty: 2,
        weaverId: 'WVR45672',
        origin: 'Varanasi, Uttar Pradesh',
        dyes: 'Synthetic gold zari, crimson dye',
        description: 'A stunning Banarasi silk saree with intricate gold zari work throughout. The rich crimson base is complemented by traditional motifs woven with real gold thread making it perfect for wedding ceremonies.',
        model3dUrl: '/models/bnrs002.glb',
        images: [
            '/images/bnrs002_1.jpg',
            '/images/bnrs002_2.jpg',
            '/images/bnrs002_3.jpg',
        ]
    },
    chnd003: {
        id: 'chnd003',
        name: 'Azure Chanderi',
        type: 'Chanderi',
        price: 3400,
        difficulty: 1,
        weaverId: 'WVR12345',
        origin: 'Chanderi, Madhya Pradesh',
        dyes: 'Natural indigo, alum mordant',
        description: 'A lightweight Chanderi cotton-silk blend saree in a soothing azure blue shade. Features delicate silver zari borders and buttas scattered across the body, making it ideal for summer events and casual wear.',
        model3dUrl: '/models/chnd003.glb',
        images: [
            '/images/chnd003_1.jpg',
            '/images/chnd003_2.jpg',
            '/images/chnd003_3.jpg',
        ]
    }
};

// Required for static site generation
export function generateStaticParams() {
    return Object.keys(sareeData).map(id => ({
        id: id
    }));
} 