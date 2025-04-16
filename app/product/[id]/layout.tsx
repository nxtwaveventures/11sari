import { sareeData } from '../../../utils/sareeData';

export function generateStaticParams() {
    return Object.keys(sareeData).map(id => ({
        id: id
    }));
}

export default function ProductLayout({ children }) {
    return children;
} 