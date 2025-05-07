// 'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import SareeDetails from './SareeDetails';
import { sarees } from '@/data/sarees';

export default function Page() {
    const params = useParams();
    const id = params?.id as string;

    return <SareeDetails id={id} />;
}

// For static export: generate all saree detail pages
export async function generateStaticParams() {
    return sarees.map((saree) => ({ id: saree.id.toString() }));
} 