import PromocoesCard from '@/components/PromocoesCard'
import React from 'react'

function PromocoesSection() {
    return (
        <section className='mt-10'>
            <h1 className='text-center text-5xl montserrat-600 text-gray-800'>Promoções imperdiveis</h1>

            <div className='mt-10 flex justify-center gap-5 flex-wrap'>
                {/*imageSrc, imageAlt, imageWidth, imageHeight ,title, description, price*/}
                <PromocoesCard
                    imageSrc={'/img/Combo1.png'}
                    imageAlt={'Combo 1'}
                    imageWidth={250}
                    imageHeight={250}
                    title={'Kit festa 10 pessoas'}
                    price={'R$ 80,00'}
                    description={'Combo perfeito para um aniversário'} />

                <PromocoesCard
                    imageSrc={'/img/Combo2.png'}
                    imageAlt={'Combo 2'}
                    imageWidth={250}
                    imageHeight={250}
                    title={'Kit doces para todo mundo'}
                    price={'R$ 45,00'}
                    description={'Combo perfeito para um aniversário'} />
            </div>
        </section>
    )
}

export default PromocoesSection