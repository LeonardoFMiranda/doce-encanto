'use client';
import React from 'react'
import Link from 'next/link'
import BagButton from '../BagButton'
import { User } from "@phosphor-icons/react";



function Header() {
    return (
        <header className='w-full h-24 flex items-center justify-between px-4 bg-primaryWhite/90 shadow-md sticky top-0 z-50'>
            <nav className='w-full max-w-5xl flex m-auto justify-between items-center'>
                <Link href={"/"} className='delius-swash-caps-regular text-4xl text-primaryClay drop-shadow-sm hover:text-primaryGreen transition-colors duration-200'>
                    Doce Encanto
                </Link>
                <div className='flex gap-7 text-primaryClay'>
                    <Link className='delius-swash-caps-regular text-2xl hover:text-primaryGreen hover:underline underline-offset-4 transition-colors duration-200' href={'/'}>Menu</Link>
                    <Link className='delius-swash-caps-regular text-2xl hover:text-primaryGreen hover:underline underline-offset-4 transition-colors duration-200' href={'/'}>Sobre</Link>
                </div>
                <div className='flex gap-4 items-center text-primaryClay'>
                    <span className="rounded-full bg-primaryClay/20 p-2 hover:bg-primaryGreen/30 transition-colors duration-200 cursor-pointer">
                        <User size={28}/>
                    </span>
                    <BagButton />
                </div>
            </nav>
        </header>
    )
}

export default Header