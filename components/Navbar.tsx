export default function Navbar() {
    return (
        <div className='text-indigo-900 flex justify-between items-center py-1 shadow-md h-12'>
            <div className='ml-8 font-bold text-3xl cursor-pointer'>Logo</div>
            <div className='grow-[0.3] mr-8'>
                <ul className='flex justify-between'>
                    <li><a href="#" className='hover:underline hover:font-bold'>Home</a></li>
                    <li><a href="#" className='hover:underline hover:font-bold'>Profile</a></li>
                    <li><a href="compose-article" className='hover:underline hover:font-bold'>Compose</a></li>
                </ul>
            </div>
        </div>
    )
}
