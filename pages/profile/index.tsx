import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Navbar from 'components/Navbar';
import { authAxios } from '@/constants/axios.config';
import Link from 'next/link';

interface IUserData {
  username :string;
  email :string;
  full_name :string;
}
const Profile :NextPage = () => {

  const [userDetails, setUserDetails] = useState<IUserData | null>(null);

  useEffect(function(){

    authAxios.get('/get-user-data').then(({data}) => setUserDetails(data))
    .catch(err => console.error(err));
  }, [])

  return (
    <React.Fragment>
        <Navbar />
        <div>
          <div>
            <label htmlFor="username" className='ml-3'>Username :</label>
            <input name="username" type="text" value={userDetails ? userDetails.username : ""} className='p-2 border-2 border-blue-700 m-2'readOnly={true}/>
          </div>
          <div>
            <label htmlFor="user-email" className='ml-3'>Email Id :</label>
            <input name="user-email" type="email" value={userDetails ? userDetails.email : ""} className='p-2 border-2 border-blue-700 m-2'readOnly={true}/>
          </div>
          <div>
            <label htmlFor="full_name" className='ml-3'>Username :</label>
            <input name="full_name" type="text" value={userDetails ? userDetails.full_name : ""} className='p-2 border-2 border-blue-700 m-2'readOnly={true}/>
          </div>
        </div>
        <Link href='profile/blogs/' passHref>
          <button className='m-2 rounded bg-indigo-600 p-2 hover:bg-indigo-500'>SHOW ALL BLOGS</button>
        </Link>
    </React.Fragment>
  )
}

export default Profile;