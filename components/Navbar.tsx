import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='text-indigo-900 flex justify-between items-center py-1 shadow-md h-12'>
            <Link href="/" passHref><div className='ml-8 font-bold text-3xl cursor-pointer'>Logo</div></Link>
            <div className='grow-[0.25] mr-8'>
                <ul className='flex justify-between'>
                    <li><Link href="#"><a className='hover:underline hover:font-bold'>Profile</a></Link></li>
                    <li><Link href="/compose-article"><a href="compose-article" className='hover:underline hover:font-bold'>Compose</a></Link></li>
                    <li><button className='hover:underline hover:font-bold'>Logout</button></li>
                </ul>
            </div>
        </div>
    )
}
