import Banner from '@/components/Banner'
import React from 'react'
import CategoriasSection from './CategoriasSection'
import ItensSection from './ItensSection'
import PromocoesSection from './PromocoesSection'

function HomeScreen() {
  return (
    <div className='montserrat-400'>
      <Banner />
      <div className='container mx-auto'>
        <CategoriasSection />
        <ItensSection/>
        <PromocoesSection/>
      </div>
    </div>
  )
}

export default HomeScreen