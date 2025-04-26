import { sareeCategories } from '@/data/sareeCategories';
import { sarees } from '@/data/sarees';
import CategoryContent from './CategoryContent';

export function generateStaticParams() {
    return sareeCategories.map((category) => ({
        id: category.id.toString(),
    }));
}

interface CategoryPageParams {
    params: {
        id: string;
    };
}

export default function CategoryPage({ params }: CategoryPageParams) {
    const id = params.id;
    const categoryId = parseInt(id);
    const category = sareeCategories.find((cat) => cat.id === categoryId);

    if (!category) {
        return (
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
                </div>
            </div>
        );
    }

    const categorySarees = sarees.filter((saree) => saree.categoryId === categoryId);

    return <CategoryContent category={category} sarees={categorySarees} />;
} 