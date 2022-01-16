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
        <div className='rounded shadow-md p-2 flex flex-col min-w-[17rem]'>
            {props.imageUrl && image && 
            <Image 
                loader={({ src, width, quality }) => image} 
                src={image} 
                alt="blog image" 
                height={200} 
                width={300} 
                objectFit='cover'
                quality={30}
            />}
            <div className='text-xl font-black text-indigo-900 grow'>{props.blogTitle}</div>
            <p className='text-clip overflow-hidden text-indigo-900 grow max-h-28'>{props.summary}</p>
            <button className='text-indigo-900 mt-2 p-2 rounded grow self-start underline text-sm'>Read in x minutes</button>
        </div>
    )
}
