import React, { useEffect, useState } from 'react';
import NavBar from '@/components/Navbar';
import { apiAxios } from '@/constants/axios.config';
import { IBlogAPI } from 'types/api_types';
import MinorBlog from '@/components/MinorBlog';

const UserBlogs = () => {
    const [username, setUsername] = useState<null | string>(null);
    const [blogs, setBlogs] = useState<Array<IBlogAPI>>([]);

    useEffect(() => {
        apiAxios.get('/get-user-blogs')
        .then(({data}) => setBlogs(data.blogs))
        .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        if(!username) return;
    }, [username])

  return (
    <React.Fragment>
        <NavBar />
        <div className='grid grid-cols-4'>
            {
                blogs.map((blog) => <MinorBlog key={blog.id} props = {{
                    imageUrl : blog.imageUrl ? blog.imageUrl : "../NoImageFound.jpg" ,
                    blogTitle: blog.title,
                    summary: blog.summary,
                    route: `blogs/${blog.id}`
                }} editable={true}/>)
            }
        </div>
    </React.Fragment>
  )
}

export default UserBlogs;