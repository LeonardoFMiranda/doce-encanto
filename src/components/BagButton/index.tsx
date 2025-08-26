'use client';
import React, { useState } from 'react'
import { ShoppingBag  } from "@phosphor-icons/react";
import BagModal from './BagModal';

function BagButton() {
    const [openBagModal, setOpenBagModal] = useState(false);
    const handleBagModal = () => setOpenBagModal(!openBagModal);

    return (
        <div>
            <ShoppingBag 
                size={32}
                className='cursor-pointer hover:text-primaryGreen'
                onClick={handleBagModal}
            />

            <div className={openBagModal ? 'block' : 'hidden'}>
                <BagModal handleModal={handleBagModal}  />
            </div>
        </div>
    )
}

export default BagButton