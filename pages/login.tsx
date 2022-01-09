import Head from 'next/head'
import React from 'react'

export default function login() {
    return (
        <div className='flex align-items-center justify-center mt-24'>
            <div className="w-80">
                <Head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
                </Head>
                <legend className="relative w-full block bg-indigo-900 p-4 text-slate-50 text-xl after:content-[''] after:bg-[url(http://simpleicon.com/wp-content/uploads/multy-user.png)] after:bg-no-repeat after:bg-right after:bg-[length:100px_100px] after:absolute after:opacity-5 after:inset-0">
                    Login
                </legend>
                <div className="w-[90%] relative my-4 mx-[auto]">
                    <input type="text" placeholder="Username" required className="w-full py-[10px] pr-1 pl-10 block border-2 border-solid border-[#ededed] rounded-md transition-all text-[darken(#ededed, 30%)] focus:py-[10px] focus:pr-1 focus:pl-[10px] focus:outline-0 focus:border-indigo-500"/>
                </div>
                <div className="w-[90%] relative my-4 mx-[auto]">
                    <input type="password" placeholder="Password" required className="w-full py-[10px] pr-1 pl-10 block border-2 border-solid border-[#ededed] rounded-md transition-all text-[darken(#ededed, 30%)] focus:py-[10px] focus:pr-1 focus:pl-[10px] focus:outline-0 focus:border-indigo-500"/>
                </div>
                <button type="submit" className="w-11 h-11 block mt-0 ml-[auto] mb-[-15px] mr-[auto] bg-slate-50 rounded-[100%] border-2 border-solid border-indigo-500 text-indigo-500 text-2xl cursor-pointer shadow transition-all focus:bg-indigo-500 focus:text-slate-50 hover:bg-indigo-500/80 hover:text-slate-50 hover:border-0">
                    <i className="fa fa-long-arrow-right"></i>
                </button>
            </div>
        </div>

    )
}
