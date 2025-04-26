export interface Saree {
    id: number;
    name: string;
    price: number;
    image: string;
    nftId: string;
    weaver: string;
    isReserved: boolean;
    colors: string[];
    material: string;
    categoryId: number;
}

export const sarees: Saree[] = [
    {
        id: 101,
        name: 'Traditional Handwoven Saree',
        price: 12500,
        image: '/saree-placeholder-1.jpg',
        nftId: '11SARI-2023-0001',
        weaver: 'Master Artisan Rajesh Kumar',
        isReserved: false,
        colors: ['Gold', 'Red', 'Maroon'],
        material: 'Pure Silk',
        categoryId: 1
    },
    {
        id: 102,
        name: 'Festive Collection Saree',
        price: 18900,
        image: '/saree-placeholder-2.jpg',
        nftId: '11SARI-2023-0002',
        weaver: 'Master Artisan Lakshmi Devi',
        isReserved: true,
        colors: ['Purple', 'Gold', 'Green'],
        material: 'Pure Silk',
        categoryId: 1
    },
    {
        id: 103,
        name: 'Heritage Design Saree',
        price: 9500,
        image: '/saree-placeholder-3.jpg',
        nftId: '11SARI-2023-0003',
        weaver: 'Master Artisan Mohan Prajapati',
        isReserved: false,
        colors: ['Beige', 'Gold', 'Blue'],
        material: 'Silk Cotton Blend',
        categoryId: 2
    },
    {
        id: 104,
        name: 'Premium Handcrafted Saree',
        price: 22500,
        image: '/saree-placeholder-4.jpg',
        nftId: '11SARI-2023-0004',
        weaver: 'Master Artisan Bharat Salvi',
        isReserved: false,
        colors: ['Red', 'Black', 'Gold'],
        material: 'Pure Silk',
        categoryId: 2
    },
    {
        id: 105,
        name: 'Wedding Elegance',
        price: 22000,
        image: '/saree-placeholder-5.jpg',
        nftId: '11SARI-2023-0105',
        weaver: 'Master Artisan Meena Kumari',
        isReserved: false,
        colors: ['Red', 'Gold', 'Pink'],
        material: 'Pure Silk',
        categoryId: 3
    },
    {
        id: 106,
        name: 'Modern Classic',
        price: 13500,
        image: '/saree-placeholder-6.jpg',
        nftId: '11SARI-2023-0106',
        weaver: 'Master Artisan Ramesh Mehta',
        isReserved: true,
        colors: ['Blue', 'Silver', 'White'],
        material: 'Silk Cotton Blend',
        categoryId: 3
    }
]; 