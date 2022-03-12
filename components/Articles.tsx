import React, { useState, useEffect } from 'react';
import MinorBlog from './MinorBlog';
import { apiAxios } from '@/constants/axios.config';
import { IBlogAPI } from 'types/api_types';

export default function Articles() {

    const [blogs, setBlogs] = useState<Array<IBlogAPI>>([]);

    useEffect(() => {
        apiAxios.get('/get-blogs').then(({data}) => setBlogs(data.blogs))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className='flex flex-col justify-start mt-8'>
            <div className='font-bold text-indigo-900 text-2xl'>The Science behind SmartUV</div>
            <div className='grid grid-cols-4'>
                {
                    blogs.map((blog) => <MinorBlog key={blog.id} props = {{
                        imageUrl : blog.imageUrl ? blog.imageUrl : "NoImageFound.jpg" ,
                        blogTitle: blog.title,
                        summary: blog.summary,
                        route : `blogs/${blog.id}`
                    }} />)
                }
            </div>
        </div>
    )
}
