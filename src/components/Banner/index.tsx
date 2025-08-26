import React from 'react'
import Image from 'next/image'


function Banner() {
    return (
        <div className="relative bg-fixed bg-no-repeat bg-cover bg-[url('https://plus.unsplash.com/premium_photo-1674327129931-7485affddfcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center h-[450px] flex items-center justify-center px-4 shadow-lg">
            <div className='flex'>
                <div className="absolute inset-0 bg-gradient-to-br from-primaryWhite/80 via-primaryYellow/60 to-primaryClay/40 z-0">
                    <div className='flex h-full items-center justify-center'>
                        <div className='relative text-gray-800 z-10 w-full max-w-2xl p-8 rounded-2xl shadow-xl flex flex-col items-start gap-4 backdrop-blur-md bg-primaryWhite/90 border border-primaryClay/30'>
                            <h1 className='delius-swash-caps-regular text-7xl  drop-shadow-lg'>Doce Encanto</h1>
                            <h2 className='montserrat-400 text-2xl text-foreground/90'>Doces de melhor qualidade na sua vida.</h2>
                            <span className="mt-2 text-lg italic">Sinta o aconchego em cada mordida!</span>
                        </div>
                        <div className=" z-10 hidden md:block">
                            <Image src={'/img/cupcake.png'} alt='banner foto' width={320} height={200} className="drop-shadow-2xl animate-bounce-slow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner