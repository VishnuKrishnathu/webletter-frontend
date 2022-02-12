import { authAxios } from '@/constants/axios.config';
import { useRouter } from 'next/router';
import { store } from '@/store/store';
import { useEffect, useState, useRef } from 'react';
import { userDataState } from '@/store/actions/action';
import Link from 'next/link';

export default function Navbar() {
    const router = useRouter();
    const [username, setUsername] = useState<string | null | undefined>(null);
    const drop_menu = useRef<HTMLDivElement>(null);


    function handleLogout(){
        authAxios.get('/logout-user')
        router.push('/login');
    }

    useEffect(function(){
        let subsriber = store.subscribe(() => {
            setUsername(store.getState().user);
        })

        return () => subsriber()

    }, [])

    function logOut() :void{
        authAxios.get('/logout-user')
    }

    useEffect(function(){
        authAxios.get('/get-user').then(({data}) => store.dispatch(userDataState(data.id)))
        .catch(err => logOut())
    }, [])

    useEffect(()=> {
        if (!drop_menu.current) return;
        console.log("ref hook effect")
        drop_menu.current.style.opacity = "0";
    }, [drop_menu])

    function handleDropAction(){
        if (!drop_menu.current) return;
        drop_menu.current.style.opacity = drop_menu.current.style.opacity == "0" ? "1" : "0"
    }

    return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" className="flex">
                LOGO
            </a>
            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 flex align-center" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <Link href="/">
                        <a  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Home
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/compose-article">
                        <a  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Compose
                        </a>
                        </Link>
                    </li>
                    <li>
                        <div className="relative">
                            <input type="checkbox" id="sortbox" className="hidden absolute" onChange={handleDropAction}/>
                            <label htmlFor="sortbox" className="flex items-center space-x-1 cursor-pointer">
                                <span className="text-gray-700">{username}</span>
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </label>

                            <div id="sortboxmenu" ref={drop_menu} className="absolute mt-1 right-1 top-full min-w-max shadow rounded bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10">
                                <ul className="block text-right text-gray-900">
                                    <li><Link href="/profile" passHref><span className="block px-3 py-2 hover:bg-gray-200">Profile</span></Link></li>
                                    <li><Link href="/profile" passHref><span onClick={handleLogout} className="block px-3 py-2 hover:bg-gray-200">Logout</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )

}