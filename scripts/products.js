const sareeCollection = {
    banarasi: [
        {
            id: 'bn001',
            name: 'Royal Banarasi Silk',
            description: 'Traditional Banarasi silk saree with intricate zari work and rich pallu',
            price: 15999,
            originalPrice: 18999,
            images: ['banarasi-1.jpg', 'banarasi-1-alt.jpg'],
            fabric: 'Pure Silk',
            color: 'Maroon',
            occasion: ['Wedding', 'Festival'],
            blousePiece: true,
            blouseLength: '0.8 meters',
            sareeLength: '5.5 meters',
            care: 'Dry clean only'
        },
        // Add more Banarasi sarees
    ],
    kanjeevaram: [
        {
            id: 'kj001',
            name: 'Classic Kanjeevaram Silk',
            description: 'Pure Kanjeevaram silk saree with traditional temple border',
            price: 24999,
            originalPrice: 29999,
            images: ['kanjeevaram-1.jpg', 'kanjeevaram-1-alt.jpg'],
            fabric: 'Pure Kanjeevaram Silk',
            color: 'Red and Gold',
            occasion: ['Wedding', 'Festival'],
            blousePiece: true,
            blouseLength: '0.8 meters',
            sareeLength: '6 meters',
            care: 'Dry clean only'
        },
        // Add more Kanjeevaram sarees
    ],
    // Add other saree categories
};

const suitCollection = {
    anarkali: [
        {
            id: 'an001',
            name: 'Royal Anarkali Suit',
            description: 'Floor-length Anarkali suit with intricate embroidery',
            price: 12999,
            originalPrice: 15999,
            images: ['anarkali-1.jpg', 'anarkali-1-alt.jpg'],
            fabric: 'Georgette',
            color: 'Navy Blue',
            occasion: ['Wedding', 'Party'],
            included: ['Kameez', 'Bottom', 'Dupatta'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            care: 'Dry clean only'
        },
        // Add more Anarkali suits
    ],
    palazzo: [
        {
            id: 'pl001',
            name: 'Contemporary Palazzo Set',
            description: 'Modern palazzo suit with printed kurta',
            price: 4999,
            originalPrice: 5999,
            images: ['palazzo-1.jpg', 'palazzo-1-alt.jpg'],
            fabric: 'Cotton',
            color: 'Mint Green',
            occasion: ['Casual', 'Office'],
            included: ['Kurta', 'Palazzo', 'Dupatta'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            care: 'Machine wash cold'
        },
        // Add more Palazzo suits
    ],
    // Add other suit categories
};

// Helper functions for filtering and sorting products
const filterProducts = (collection, filters) => {
    let filtered = [...collection];

    if (filters.priceRange) {
        filtered = filtered.filter(product =>
            product.price >= filters.priceRange.min &&
            product.price <= filters.priceRange.max
        );
    }

    if (filters.occasion) {
        filtered = filtered.filter(product =>
            product.occasion.includes(filters.occasion)
        );
    }

    if (filters.fabric) {
        filtered = filtered.filter(product =>
            product.fabric.toLowerCase().includes(filters.fabric.toLowerCase())
        );
    }

    return filtered;
};

const sortProducts = (products, sortBy) => {
    switch (sortBy) {
        case 'price-low':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...products].sort((a, b) => b.price - a.price);
        case 'newest':
            return [...products].sort((a, b) => b.id.localeCompare(a.id));
        default:
            return products;
    }
};

export { sareeCollection, suitCollection, filterProducts, sortProducts };