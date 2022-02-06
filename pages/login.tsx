import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { authAxios } from '@/constants/axios.config';
import Link from 'next/link';

export default function Login() {
    const [error, setErrorState] = useState<string>("");
    const [loadingState, setLoadingState] = useState<boolean>(false);


    const router = useRouter();

    function loginHandler(e :React.FormEvent){
        e.preventDefault();
        setErrorState("");
        let username = (e.target as any)[1].value; //username
        let password = (e.target as any)[2].value; //password
        setLoadingState(true);

        authAxios.post('/login-user/', {
            username, password
        }).then(data => {
            setLoadingState(false);
            console.log(data);
            router.push("/");
        }).catch(err => {
            setErrorState(err.response.data["message"]);
            setLoadingState(false);
        })
    }
    return (
        <div className='flex align-items-center justify-center mt-24'>
            <div className="w-80 flex flex-col items-center">
                <Head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"/>
                </Head>
                <div className='text-red-600 font-bold align text-center text-lg'>{error != "" && error}</div>
                <form onSubmit={loginHandler} method='POST' className='w-80'>
                    <legend className="relative w-full block bg-indigo-900 p-4 text-slate-50 text-xl after:content-[''] after:bg-[url(http://simpleicon.com/wp-content/uploads/multy-user.png)] after:bg-no-repeat after:bg-right after:bg-[length:100px_100px] after:absolute after:opacity-5 after:inset-0">
                        Login
                    </legend>
                    <fieldset>
                        <div className="w-[90%] relative my-4 mx-[auto]">
                            <input type="text" name="username" placeholder="Username" disabled={loadingState} required maxLength={50} minLength={5} className="w-full py-[10px] pr-1 pl-10 block border-2 border-solid border-[#ededed] rounded-md transition-all text-[darken(#ededed, 30%)] focus:py-[10px] focus:pr-1 focus:pl-[10px] focus:outline-0 focus:border-indigo-500"/>
                        </div>
                        <div className="w-[90%] relative my-4 mx-[auto]">
                            <input type="password" disabled={loadingState} placeholder="Password" maxLength={20} minLength={5} required className="w-full py-[10px] pr-1 pl-10 block border-2 border-solid border-[#ededed] rounded-md transition-all text-[darken(#ededed, 30%)] focus:py-[10px] focus:pr-1 focus:pl-[10px] focus:outline-0 focus:border-indigo-500"/>
                        </div>
                    </fieldset>
                    {!loadingState && <button type="submit" className="w-11 h-11 block mt-0 ml-[auto] mb-[-15px] mr-[auto] bg-slate-50 rounded-[100%] border-2 border-solid border-indigo-500 text-indigo-500 text-2xl cursor-pointer shadow transition-all focus:bg-indigo-500 focus:text-slate-50 hover:bg-indigo-500/80 hover:text-slate-50 hover:border-0">
                        <i className="fa fa-long-arrow-right"></i>
                    </button>}
                    {loadingState && <button disabled className="w-11 h-11 block mt-0 ml-[auto] mb-[-15px] mr-[auto] bg-slate-400 rounded-[100%] border-2 border-solid text-slate-50 text-2xl cursor-pointer shadow transition-all">
                        <i className="fa fa-long-arrow-right"></i>
                    </button>}
                </form>
                <div className='mt-5'>Don&apos;t have an account ?<Link href="/signup"><a className='text-blue-900 underline'>SignUp</a></Link></div>
            </div>
        </div>
    )
}
