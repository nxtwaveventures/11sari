// 'use client';

import React from 'react';
import { sarees } from '@/data/sarees';

export default function Page({ params }: { params: { id: string } }) {
    return <div>{params.id}</div>;
}

// For static export: generate all saree detail pages
export async function generateStaticParams() {
    return sarees.map((saree) => ({ id: saree.id.toString() }));
} 