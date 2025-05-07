import { sarees } from '@/data/sarees';
import { notFound } from 'next/navigation';
import SareeDetails from './SareeDetails';

export function generateStaticParams() {
    return sarees.map((saree) => ({
        id: saree.id.toString(),
    }));
}

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
    const { id } = await params;
    const sareeId = parseInt(id);
    const saree = sarees.find((s) => s.id === sareeId);

    if (!saree) {
        notFound();
    }

    return <SareeDetails saree={saree} />;
} 