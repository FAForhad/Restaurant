import React from 'react';
import { Link } from "react-router-dom";
import { CakeIcon } from '@heroicons/react/24/solid'

const Header = () => {

    return (
        <div className=' bg-gray-500 p-8 flex items-center justify-between'>
            <div className='flex items-center font-bold'>
                <CakeIcon className="h-6 w-24 " />
                <h1 className='text-4xl text-blue-400 '>Restaurant</h1>
            </div>
            <nav>
                <Link className='m-2 px-5 py-3 border border-sky-500 hover:bg-slate-500 hover:text-white' to='/'> Home</Link>
                <Link className='m-2 px-5 py-3 border border-sky-500 hover:bg-slate-500 hover:text-white' to='/products'> Products</Link>
                <Link className='m-2 px-5 py-3 border border-sky-500 hover:bg-slate-500 hover:text-white' to='/about'> About</Link>
                <Link className='m-2 px-5 py-3 border border-sky-500 hover:bg-slate-500 hover:text-white' to='/contacts'> Contacts</Link>
            </nav>

        </div>
    );
};

export default Header;