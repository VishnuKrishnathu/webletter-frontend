import Image from 'next/image'
import React from 'react'

interface IBlogProps {
    blogTitle : string;
    summary : string;
    imageUrl : string | undefined;
    displayImg : boolean;
    styleProp : object | null;
}

export default function Blog({props} : {props : IBlogProps}) {
    const image = props.imageUrl;
    return (
        <div className='rounded shadow-md p-2 flex flex-col' style={props.styleProp ? props.styleProp : {}}>
            {props.displayImg && image && <Image loader={() => image} src={image} alt="blog image" height={300} width={400} className='h-14 w-20 flex-initial shrink-0'/>}
            <div className='text-2xl font-black text-indigo-900 grow'>{props.blogTitle}</div>
            <p className='text-clip overflow-hidden text-indigo-900 grow'>{props.summary}</p>
            <button className='text-slate-50 bg-indigo-500 mt-2 p-2 rounded grow self-start'>Read Article</button>
        </div>
    )
}
