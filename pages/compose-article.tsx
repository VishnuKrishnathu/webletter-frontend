import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import CheckAuth from '@/components/CheckAuth';
import dynamic from 'next/dynamic'

const DynamicTextEditor = dynamic(() => import('@/components/editor/RichEditor'), {ssr :false});

export default function ComposeArticle() {

    return (
        <div>
            <CheckAuth />
            <Navbar />
            <Title />
            <Summary />
            <DynamicTextEditor />
        </div>
    )
}

const Title = () => {
    const [ length, setLength ] = useState<number>(0);
    return (
        <section className='mx-4 mt-5'>
            <label htmlFor="post-title" className='mr-2 font-semibold text-ml flex justify-between'>
                <span>Title :</span>
                {length <=50 && <span>{length} /50</span>}
                {length >50 && <span className='text-red-600'>{length} /50</span>}
            </label>
            <input 
                name="post-title"
                className='w-[100%] p-2 border-2 border-indigo-900 outline-none'
                type="text"
                onChange={(e) => setLength(e.target.value.length)}
            />
        </section>
    )
}

const Summary = () => {
    const [ length, setLength ] = useState<number>(0);
    return (
        <section className='mx-4 mt-5'>
            <label htmlFor="post-summary" className='mr-2 font-semibold text-ml flex justify-between'>
                <span>Summary :</span>
                {length <=150 && <span>{length} /150</span>}
                {length >150 && <span className='text-red-600'>{length} /50</span>}
            </label>
            <textarea 
                name="post-summary"
                className='w-[100%] p-2 border-2 border-indigo-900 outline-none h-32 resize-none'
                onChange={(e) => setLength(e.target.value.length)}
            />
        </section>
    )
}