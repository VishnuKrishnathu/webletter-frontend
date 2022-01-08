import React from 'react'
import MinorBlog from './MinorBlog'

export default function Articles() {
    return (
        <div className='flex flex-col justify-start mt-8'>
            <div className='font-bold text-indigo-900 text-2xl'>The Science behind SmartUV</div>
            <div className='mt-8 grid grid-cols-4 gap-3' style={{ height: "calc(200px + 7rem)"}}>
                <MinorBlog props = {{
                    imageUrl : "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                    blogTitle: "Voluptate officia mollit sunt dolore exercitation.", 
                    summary: "Cillum magna aute labore dolore amet laboris sunt ut. Nulla tempor commodo ad ullamco irure nulla fugiat sint nisi mollit laborum officia eu Lorem. Sint tempor officia tempor fugiat ex sit. Officia quis veniam laboris nisi officia magna non Lorem excepteur enim incididunt culpa aute. Consequat veniam aliquip anim nostrud duis. Deserunt fugiat commodo duis elit officia commodo. Ea incididunt occaecat dolore qui exercitation exercitation fugiat nulla ut exercitation est ut aliquip."
                }}/>
                <MinorBlog props = {{
                    imageUrl : "https://images.pexels.com/photos/748626/pexels-photo-748626.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                    blogTitle: "Voluptate officia mollit sunt dolore exercitation.", 
                    summary: "Cillum magna aute labore dolore amet laboris sunt ut. Nulla tempor commodo ad ullamco irure nulla fugiat sint nisi mollit laborum officia eu Lorem. Sint tempor officia tempor fugiat ex sit. Officia quis veniam laboris nisi officia magna non Lorem excepteur enim incididunt culpa aute. Consequat veniam aliquip anim nostrud duis. Deserunt fugiat commodo duis elit officia commodo. Ea incididunt occaecat dolore qui exercitation exercitation fugiat nulla ut exercitation est ut aliquip."
                }}/>
                <MinorBlog props = {{
                    imageUrl : "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    blogTitle: "Voluptate officia mollit sunt dolore exercitation.", 
                    summary: "Cillum magna aute labore dolore amet laboris sunt ut. Nulla tempor commodo ad ullamco irure nulla fugiat sint nisi mollit laborum officia eu Lorem. Sint tempor officia tempor fugiat ex sit. Officia quis veniam laboris nisi officia magna non Lorem excepteur enim incididunt culpa aute. Consequat veniam aliquip anim nostrud duis. Deserunt fugiat commodo duis elit officia commodo. Ea incididunt occaecat dolore qui exercitation exercitation fugiat nulla ut exercitation est ut aliquip."
                }}/>
                <MinorBlog props = {{
                    imageUrl: "https://images.pexels.com/photos/38326/pexels-photo-38326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    blogTitle: "Voluptate officia mollit sunt dolore exercitation.",
                    summary: "Cillum magna aute labore dolore amet laboris sunt ut. Nulla tempor commodo ad ullamco irure nulla fugiat sint nisi mollit laborum officia eu Lorem. Sint tempor officia tempor fugiat ex sit. Officia quis veniam laboris nisi officia magna non Lorem excepteur enim incididunt culpa aute. Consequat veniam aliquip anim nostrud duis. Deserunt fugiat commodo duis elit officia commodo. Ea incididunt occaecat dolore qui exercitation exercitation fugiat nulla ut exercitation est ut aliquip."
                }}/>
            </div>
        </div>
    )
}
