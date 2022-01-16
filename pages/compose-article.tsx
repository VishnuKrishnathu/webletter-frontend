import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic'

const DynamicTextEditor = dynamic(() => import('@/components/editor/RichEditor'), {ssr :false});

export default function ComposeArticle() {


    return (
        <div>
            <Navbar />
            <DynamicTextEditor />
        </div>
    )
}
