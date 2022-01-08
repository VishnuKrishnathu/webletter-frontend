import React from 'react'
import Blog from './Blog'
import { useState } from 'react'
export default function BlogsSection() {
    const [ blogs, setBlogs ] = useState([
        {
            blogTitle : "Dolor cillum culpa dolor aliqua mollit officia esse ad ut.",
            imageUrl : "https://images.pexels.com/photos/10679992/pexels-photo-10679992.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            summary : "Ipsum dolore irure fugiat aute mollit fugiat anim labore quis est duis ad proident. Consequat reprehenderit anim irure aliquip incididunt reprehenderit id cupidatat et deserunt. Nulla deserunt consectetur in aute irure aute qui consectetur ex ad nisi ex. Sunt aliquip fugiat qui magna Lorem incididunt nulla nostrud proident tempor eu labore.",
            displayImg : true
        },
        {
            blogTitle : "Dolor cillum culpa dolor aliqua mollit officia esse ad ut.",
            imageUrl : "https://images.pexels.com/photos/10588300/pexels-photo-10588300.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            summary : "Ipsum dolore irure fugiat aute mollit fugiat anim labore quis est duis ad proident. Consequat reprehenderit anim irure aliquip incididunt reprehenderit id cupidatat et deserunt. Nulla deserunt consectetur in aute irure aute qui consectetur ex ad nisi ex. Sunt aliquip fugiat qui magna Lorem incididunt nulla nostrud proident tempor eu labore.",
            displayImg : true
        },
        {
            blogTitle : "Dolor cillum culpa dolor aliqua mollit officia esse ad ut.",
            imageUrl : "https://images.pexels.com/photos/9304473/pexels-photo-9304473.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            summary : "Ipsum dolore irure fugiat aute mollit fugiat anim labore quis est duis ad proident. Consequat reprehenderit anim irure aliquip incididunt reprehenderit id cupidatat et deserunt. Nulla deserunt consectetur in aute irure aute qui consectetur ex ad nisi ex. Sunt aliquip fugiat qui magna Lorem incididunt nulla nostrud proident tempor eu labore.",
            displayImg : false
        },
        {
            blogTitle : "Dolor cillum culpa dolor aliqua mollit officia esse ad ut.",
            imageUrl : "https://images.pexels.com/photos/9904214/pexels-photo-9904214.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            summary : "Ipsum dolore irure fugiat aute mollit fugiat anim labore quis est duis ad proident. Consequat reprehenderit anim irure aliquip incididunt reprehenderit id cupidatat et deserunt. Nulla deserunt consectetur in aute irure aute qui consectetur ex ad nisi ex. Sunt aliquip fugiat qui magna Lorem incididunt nulla nostrud proident tempor eu labore.",
            displayImg : false
        },
        {
            blogTitle : "Dolor cillum culpa dolor aliqua mollit officia esse ad ut.",
            imageUrl : "https://images.pexels.com/photos/8984273/pexels-photo-8984273.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            summary : "Ipsum dolore irure fugiat aute mollit fugiat anim labore quis est duis ad proident. Consequat reprehenderit anim irure aliquip incididunt reprehenderit id cupidatat et deserunt. Nulla deserunt consectetur in aute irure aute qui consectetur ex ad nisi ex. Sunt aliquip fugiat qui magna Lorem incididunt nulla nostrud proident tempor eu labore.",
            displayImg : false
        }
    ])

    return (
        <div className='mt-5 grid grid-cols-3 gap-4 grid-rows-3' style={{height : "calc(15rem + 300px)"}}>
            {
                blogs.map((blog, index) => {
                    let styleProp = index <= 1 ? {
                        gridRow : "span 3"
                    } : null

                    return (<Blog 
                        key={index}
                        props = {{
                            blogTitle : blog.blogTitle,
                            imageUrl : blog.imageUrl,
                            summary : blog.summary,
                            displayImg : blog.displayImg,
                            styleProp
                        }}
                    />)
                })
            }
        </div>
    )
}
