import { sareeCategories } from '@/data/sareeCategories';
import { sarees } from '@/data/sarees';
import { notFound } from 'next/navigation';
import CategoryContent from './CategoryContent';

export function generateStaticParams() {
    return sareeCategories.map((category) => ({
        id: category.id.toString(),
    }));
}

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
    const { id } = await params;
    const categoryId = parseInt(id);
    const category = sareeCategories.find((cat) => cat.id === categoryId);

    if (!category) {
        notFound();
    }

    const categorySarees = sarees.filter((saree) => saree.categoryId === categoryId);

    return <CategoryContent category={category} sarees={categorySarees} />;
} 