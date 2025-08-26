"use client"
import React from 'react'
import { Cake, Cookie, PintGlass } from "@phosphor-icons/react";

function CategoriasSection() {
    return (
        <section className='mt-10'>
            <h2 className='text-center text-5xl text-gray-800 montserrat-600'>Categorias</h2>
            <div className='flex justify-center'>
                <div className='w-1/3'>
                    <div className=' h-[450px] flex flex-col items-center justify-center'>
                        <div className='bg-primaryGreen rounded-full p-8'>
                            <Cake size={100} className="w-[100px] filter invert brightness-0"/>
                        </div>
                        <h3 className='text-2xl font-bold mt-4 text-gray-800'>Bolo</h3>
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className=' h-[450px] flex flex-col items-center justify-center'>
                        <div className='bg-primaryGreen rounded-full p-8'>
                            <Cookie size={100} className="w-[100px] filter invert brightness-0"/>
                        </div>
                        <h3 className='text-2xl font-bold mt-4 text-gray-800'>Cookies</h3>
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className=' h-[450px] flex flex-col items-center justify-center'>
                        <div className='bg-primaryGreen rounded-full p-8'>
                            <PintGlass size={100} className="w-[100px] filter invert brightness-0"/>
                        </div>
                        <h3 className='text-2xl font-bold mt-4 text-gray-800'>Bolo no copo</h3>
                    </div>
                </div>

                <div className='w-1/3'>
                    <div className=' h-[450px] flex flex-col items-center justify-center'>
                        <div className='bg-primaryGreen rounded-full p-8'>
                            <img
                                src="/icons/cupcake-icon.png"
                                alt="cupcake icon"
                                className="w-[100px] filter invert brightness-0"
                            />
                        </div>
                        <h3 className='text-2xl font-bold mt-4 text-gray-800'>Cupcake</h3>
                    </div>
                </div>
                {/* <div className='w-1/3'>
                    <div className=' h-[450px] flex items-center justify-center'>
                        <PintGlass size={32} />
                        <h3 className='text-2xl'>Categoria 3</h3>
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className=' h-[450px] flex items-center justify-center'>
                        <PintGlass size={32} />
                        <h3 className='text-2xl'>Categoria 3</h3>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default CategoriasSection