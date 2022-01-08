import React from 'react';
import Image from 'next/image'

interface IMinorBlogProps {
    imageUrl ?:string;
    blogTitle :string;
    summary :string;
}
export default function MinorBlog({props} : {props :IMinorBlogProps}) {
    let image = props.imageUrl ? props.imageUrl : "";
    return (
        <div className='rounded shadow-md p-2 flex flex-col w-72' style={{height: "calc(200px + 7rem)"}}>
            {props.imageUrl && <Image loader={() => image} src={image} alt="blog image" height={300} width={300} objectFit='cover'/>}
            <div className='text-xl font-semibold text-indigo-900'>{props.blogTitle}</div>
            <p className='text-clip overflow-hidden text-indigo-900'>{props.summary}</p>
            <button className='text-slate-50 bg-indigo-500 mt-2 p-1 rounded self-start'>Read Article</button>
        </div>
    )
}
