import Link from 'next/link';
import React from 'react';

const MainNavbar = () => {
    return (
        <nav className='bg-slate-700 text-white flex justify-between py-4'>
            <div>
                <Link href='/home' className='px-5 py-4 hover:bg-slate-500'>Home</Link>
                <Link href='/jobOpening' className='px-5 py-4 hover:bg-slate-500'>Job Opening</Link>
                <Link href='/interviews' className='px-5 py-4 hover:bg-slate-500'>Interviews</Link>
                <Link href='/clients' className='px-5 py-4 hover:bg-slate-500'>Clients</Link>
                <Link href='/candidates' className='px-5 py-4 hover:bg-slate-500'>Candidates</Link>
                <Link href='/contacts' className='px-5 py-4 hover:bg-slate-500'>Contacts</Link>
                <Link href='/campaigns' className='px-5 py-4 hover:bg-slate-500'>Campaigns</Link>
                
                {/* <button className='px-5 py-4 hover:bg-slate-500'>Campaigns</button> */}
            </div>
            <div>

            </div>
        </nav>  
    );
};

export default MainNavbar;