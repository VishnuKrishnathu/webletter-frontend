import Link from 'next/link';
import { authAxios } from '@/constants/axios.config';
import { useRouter } from 'next/router';
import { store } from '@/store/store';
import { useEffect, useState } from 'react';
import { userDataState } from '@/store/actions/action';

export default function Navbar() {
    const router = useRouter();
    const [username, setUsername] = useState<string | null | undefined>(null);


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

    /**
     * TODO : change the navbar layout to show username
     */

    return (
        <div className='text-indigo-900 flex justify-between items-center py-1 shadow-md h-12'>
            <Link href="/" passHref><div className='ml-8 font-bold text-3xl cursor-pointer'>Logo</div></Link>
            <div className='grow-[0.25] mr-8'>
                <ul className='flex justify-between'>
                    {username && <li><Link href="#"><a className='hover:underline hover:font-bold'>Profile</a></Link></li>}
                    <li><Link href="/compose-article"><a href="compose-article" className='hover:underline hover:font-bold'>Compose</a></Link></li>
                    <li>
                        <button 
                            className='hover:underline hover:font-bold'
                            onClick={handleLogout}
                        >Logout</button></li>
                </ul>
            </div>
        </div>
    )
}
