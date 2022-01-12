import React from 'react';
import Articles from './Articles';
import BlogsSection from './BlogsSection';
import Post from './Post';
import Promotion from './Promotion';

export default function ArticlesSection() {
    return (
        <div 
            className='overflow-hidden'
        >
            <Promotion 
                imageUrl="https://images.pexels.com/photos/359620/pexels-photo-359620.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                posterTitle="Time to Get Your House Clean and in Order"
                summary="Aliqua enim do est pariatur eu reprehenderit ea excepteur. Sunt tempor incididunt velit exercitation veniam dolore velit culpa occaecat nisi quis dolor et. Enim exercitation mollit occaecat nulla nostrud."
            />
            <BlogsSection />
            <Articles />
        </div>
    )
}
