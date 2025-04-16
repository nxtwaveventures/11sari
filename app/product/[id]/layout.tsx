import { sareeData } from '../../../utils/sareeData';

// This function must be exported to work with Next.js static export
export async function generateStaticParams() {
    // Create parameters for each product ID
    return Object.keys(sareeData).map(id => ({
        id
    }));
}

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
} 