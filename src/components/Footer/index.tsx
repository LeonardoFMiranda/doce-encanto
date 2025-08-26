import Link from 'next/link'
import React from 'react'


function Footer() {
    return (
        <footer className="mt-12 montserrat-400 bg-primaryWhite/80 border-t border-primaryClay/20 shadow-inner">
            <div className="h-1 bg-gradient-to-r from-primaryYellow via-primaryGreen to-primaryClay bg-[length:300%_100%] bg-repeat-x animate-gradient-x"></div>
            <div className="p-8 flex flex-col md:flex-row justify-between items-start w-full max-w-6xl mx-auto gap-8">
                <div>
                    <h1 className='delius-swash-caps-regular text-2xl text-primaryClay mb-2'>Como podemos ajudar</h1>
                    <div className='flex flex-col gap-2 mt-3 text-primaryClay/80'>
                        <div className="group relative cursor-pointer">
                            <span className="transition-colors">O que eu faço?</span>
                            <div className="absolute left-0 top-full mt-2 w-64 bg-primaryWhite text-primaryClay text-sm rounded-lg shadow-lg p-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 group-hover:pointer-events-auto pointer-events-none transition-all duration-300 z-10 hover:opacity-100 hover:translate-x-4 hover:pointer-events-auto">
                                Desenvolvimento de sites, landing pages, sistemas web e soluções digitais personalizadas para negócios e eventos.
                            </div>
                        </div>
                        <div className="group relative cursor-pointer">
                            <span className="transition-colors">Minhas especialidades</span>
                            <div className="absolute left-0 top-full mt-2 w-64 bg-primaryWhite text-primaryClay text-sm rounded-lg shadow-lg p-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 group-hover:pointer-events-auto pointer-events-none transition-all duration-300 z-10 hover:opacity-100 hover:translate-x-4 hover:pointer-events-auto">
                                <ul className="list-disc pl-4">
                                    <li>React / Next.js</li>
                                    <li>TypeScript & JavaScript</li>
                                    <li>Tailwind CSS</li>
                                    <li>Node.js</li>
                                    <li>APIs REST</li>
                                </ul>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer">
                            <span className="transition-colors">Precisa de um desenvolvedor?</span>
                            <div className="absolute left-0 top-full mt-2 w-72 bg-primaryWhite text-primaryClay text-sm rounded-lg shadow-lg p-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 group-hover:pointer-events-auto pointer-events-none transition-all duration-300 z-10 hover:opacity-100 hover:translate-x-4 hover:pointer-events-auto">
                                <div className="flex flex-col gap-1">
                                    <span>Email: leonardo.dev1997@gmail.com</span>
                                    <span>Linkedin: <a href="https://www.linkedin.com/in/leonardo-f-miranda/" target="_blank" className="underline hover:text-primaryGreen">leonardo-f-miranda</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='delius-swash-caps-regular text-2xl text-primaryClay mb-2'>Para entrar em contato comigo!</h1>
                    <div className='flex flex-col gap-2 mt-3 text-primaryClay/80'>
                        <p>Email: leonardo.dev1997@gmail.com</p>
                        <Link href="https://www.linkedin.com/in/leonardo-f-miranda/" target='_blank' className="hover:underline hover:text-primaryGreen transition-colors">Linkedin</Link>
                        <Link href="https://github.com/LeonardoFMiranda" target='_blank' className="hover:underline hover:text-primaryGreen transition-colors">Github</Link>
                        <Link href="https://leonardomiranda-portfolio.vercel.app/" target='_blank' className="hover:underline hover:text-primaryGreen transition-colors">Portfolio</Link>
                    </div>
                </div>
            </div>
            <div className="text-center text-xs text-primaryClay/60 pb-2">© {new Date().getFullYear()} Doce Encanto. Todos os direitos reservados.</div>
        </footer>
    )
}

export default Footer;
