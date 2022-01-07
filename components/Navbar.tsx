import React from 'react'

export default function Navbar() {
    return (
        <div className='text-indigo-900 h-10 flex justify-between items-center py-1 shadow-md h-12'>
            <div className='ml-8 font-bold text-3xl'>Logo</div>
            <div className='grow-[0.3] mr-8'>
                <ul className='flex justify-between'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Compose</a></li>
                </ul>
            </div>
        </div>
    )
}
