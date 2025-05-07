'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import SareeDetails from './SareeDetails';

export default function Page() {
    const params = useParams();
    const id = params?.id as string;

    return <SareeDetails id={id} />;
} 