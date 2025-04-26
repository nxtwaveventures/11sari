export interface SareeCategory {
    id: number;
    name: string;
    count: number;
    image: string;
    description: string;
}

export const sareeCategories: SareeCategory[] = [
    { id: 1, name: 'Banarasi Silk', count: 15, image: '/banarasi-placeholder.jpg', description: 'Luxurious silk sarees with intricate gold and silver zari work' },
    { id: 2, name: 'Kanjeevaram', count: 12, image: '/kanjeevaram-placeholder.jpg', description: 'Rich silk sarees with temple-inspired designs' },
    { id: 3, name: 'Chanderi', count: 9, image: '/chanderi-placeholder.jpg', description: 'Lightweight silk-cotton blend with subtle gold motifs' },
    { id: 4, name: 'Patola', count: 7, image: '/patola-placeholder.jpg', description: 'Double ikat silk sarees with geometric patterns' },
    { id: 5, name: 'Pochampally Ikat', count: 11, image: '/pochampally-placeholder.jpg', description: 'Traditional ikat designs in vibrant colors' },
    { id: 6, name: 'Bhagalpuri Silk', count: 8, image: '/bhagalpuri-placeholder.jpg', description: 'Pure silk sarees with traditional motifs' },
    { id: 7, name: 'Tussar Silk', count: 10, image: '/tussar-placeholder.jpg', description: 'Wild silk sarees with natural golden sheen' },
    { id: 8, name: 'Mysore Silk', count: 9, image: '/mysore-placeholder.jpg', description: 'Pure silk sarees with royal heritage' },
    { id: 9, name: 'Baluchari', count: 6, image: '/baluchari-placeholder.jpg', description: 'Silk sarees with narrative motifs' },
    { id: 10, name: 'Bandhani', count: 14, image: '/bandhani-placeholder.jpg', description: 'Tie-dye silk sarees with intricate patterns' },
    { id: 11, name: 'Gadwal', count: 8, image: '/gadwal-placeholder.jpg', description: 'Cotton body with silk border and pallu' },
]; 