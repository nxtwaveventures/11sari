import { sareeData } from '../../../utils/sareeData';

export async function generateStaticParams() {
    return Object.keys(sareeData).map(id => ({
        id: id
    }));
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return children;
} 