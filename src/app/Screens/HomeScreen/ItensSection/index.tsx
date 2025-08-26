// filepath: /F:/Programação/DoceEncanto/doce-encanto/src/app/Screens/HomeScreen/ItensSection/index.tsx
"use client"
import React, { useEffect, useState, useContext } from 'react'
import Image from 'next/image';
import { ShoppingCart } from "@phosphor-icons/react";
import { Produto } from '@/app/interface/Produtos';
import { ModalContext } from '@/context/ModalContext';
import { Modal } from '@/components/Modal';
import ProdutoModalSelected from '@/components/Modal/ProdutoModalSelected';

function ItensSection() {
    const { openModal, isOpen } = useContext(ModalContext);
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('api/produtos');
            const data = await res.json();
            setProdutos(data)
            console.log(data);
        }
        fetchData()
    }, [])

    return (
        <section>
            <h2 className='text-center text-5xl montserrat-600 text-gray-800'>Itens</h2>
            <div className='flex justify-center gap-5 flex-wrap '>
                {produtos.map((produto) => (
                    <div key={produto.id} className='w-[300px] h-[350px] flex flex-col items-center justify-center'>
                        <div className='relative w-full h-[250px] rounded-lg overflow-hidden group'>
                            <Image
                                src={produto.image}
                                alt={`foto ${produto.name}`}
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 items-center justify-center cursor-pointer hidden group-hover:flex' onClick={() => openModal(produto)}>
                                <ShoppingCart size={55} className='text-yellow-400' />
                            </div>
                        </div>
                        <div className='h-12'>
                            <h3 className='text-2xl text-start font-bold mt-4 text-gray-800'>{produto.name}</h3>
                            <h4 className='text-gray-800'>{produto.description}</h4>
                        </div>
                    </div>
                ))}
            </div>
            {isOpen && <ProdutoModalSelected />}
        </section>
    )
}

export default ItensSection