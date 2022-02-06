import Head from 'next/head'
import React from 'react'
import { useEffect, useState } from 'react';
import { authAxios } from '@/constants/axios.config';
import { useRouter } from 'next/router';

export default function Signup() {

    const [error, setErrorState] = useState<string>("");
    const [loadingState, setLoadingState] = useState<boolean>(false);
    const router = useRouter();

    function submitHandle(e :any){
        setErrorState("");
        e.preventDefault();
        let full_name = (e.target[1].value); // name
        let username = (e.target[2].value); // username
        let email = (e.target[3].value); // email
        let password = (e.target[4].value); // password
        let confirm_password = (e.target[5].value); // password

        if(password != confirm_password){
            setErrorState("Password doesn't match");
            return;
        }

        setLoadingState(true);

        authAxios.post("/register-user/", {
            username, full_name, email, password
        }).then(({data}) => {
            setLoadingState(false);
            router.push('/login');
        })
        .catch(err => {
            setLoadingState(false);
            console.log(err);
        });
    }

    return (
        <div className='flex align-items-center justify-center mt-24'>
            <div className="w-80">
                <Head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
                </Head>
                <div className='text-red-600 font-bold align text-center text-lg'>{error != "" && error}</div>
                <form onSubmit={submitHandle} method='POST'>
                    <legend className="relative w-full block bg-indigo-900 p-4 text-slate-50 text-xl after:content-[''] after:bg-[url(http://simpleicon.com/wp-content/uploads/multy-user.png)] after:bg-no-repeat after:bg-right after:bg-[length:100px_100px] after:absolute after:opacity-5 after:inset-0">
                        Sign up
                    </legend>
                    <fieldset>
                        <div className="w-[90%] relative my-4 mx-[auto]">
                            <input type="text" placeholder="Name" maxLength={50} minLength={2} required disabled={loadingState} className="w-full py-[10px] pr-1 pl-10 block border-2 border-solid border-[#ededed] rounded-md transition-all text-[darken(#ededed, 30%)] focus:py-[10px] focus:pr-1 focus:pl-[10px] focus:outline-0 focus:border-indigo-500"/>
                        </div>
                        <div className="w-[90%] relative my-4 mx-[auto]">
                            <input type="text" placeholder="Username" disabled={loadingState} required maxLength={50} minLength={5} className="w-full py-[10px] pr-1 pl-10 block border-2 border-solid border-[#ededed] rounded-md transition-all text-[darken(#ededed, 30%)] focus:py-[10px] focus:pr-1 focus:pl-[10px] focus:outline-0 focus:border-indigo-500"/>
                        </div>
                        <div className="w-[90%] relative my-4 mx-[auto]">
                            <input type="email" disabled={loadingState} placeholder="Email" required className="w-full py-[10px] pr-1 pl-10 block border-2 border-solid border-[#ededed] rounded-md transition-all text-[darken(#ededed, 30%)] focus:py-[10px] focus:pr-1 focus:pl-[10px] focus:outline-0 focus:border-indigo-500"/>
                        </div>
                        <div className="w-[90%] relative my-4 mx-[auto]">
                            <input type="password" disabled={loadingState} placeholder="Password" maxLength={20} minLength={5} required className="w-full py-[10px] pr-1 pl-10 block border-2 border-solid border-[#ededed] rounded-md transition-all text-[darken(#ededed, 30%)] focus:py-[10px] focus:pr-1 focus:pl-[10px] focus:outline-0 focus:border-indigo-500"/>
                        </div>
                        <div className="w-[90%] relative my-4 mx-[auto]">
                            <input type="password" disabled={loadingState} placeholder="Confirm Password" maxLength={20} minLength={5} required className="w-full py-[10px] pr-1 pl-10 block border-2 border-solid border-[#ededed] rounded-md transition-all text-[darken(#ededed, 30%)] focus:py-[10px] focus:pr-1 focus:pl-[10px] focus:outline-0 focus:border-indigo-500"/>
                        </div>
                    </fieldset>
                    {!loadingState && <button type="submit" className="w-11 h-11 block mt-0 ml-[auto] mb-[-15px] mr-[auto] bg-slate-50 rounded-[100%] border-2 border-solid border-indigo-500 text-indigo-500 text-2xl cursor-pointer shadow transition-all focus:bg-indigo-500 focus:text-slate-50 hover:bg-indigo-500/80 hover:text-slate-50 hover:border-0">
                        <i className="fa fa-long-arrow-right"></i>
                    </button>}
                    {loadingState && <button disabled className="w-11 h-11 block mt-0 ml-[auto] mb-[-15px] mr-[auto] bg-slate-400 rounded-[100%] border-2 border-solid text-slate-50 text-2xl cursor-pointer shadow transition-all">
                        <i className="fa fa-long-arrow-right"></i>
                    </button>}
                </form>
            </div>
        </div>
    )
}
