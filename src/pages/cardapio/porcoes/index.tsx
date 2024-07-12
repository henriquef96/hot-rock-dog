import { useEffect } from 'react';

import Porcao from '../../../assets/img/porcoes/porcao-batata.png'

import { MenuItem } from '../../../components/categoria'
import { menu } from '../../../components/categoria'

export function Porcoes() {
    useEffect(() => {
        const menuElement = document.getElementById('menu');
        if (menuElement) {
            menuElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <main id='menu' onClick={(event) => menu(event as unknown as MouseEvent)}>
            <div className='items-center justify-center flex flex-col mb-10'>
                <h2 className='text-4xl font-bold text-center'>Porções</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mt-20 mb-16'>
                    <MenuItem type="comida" src={Porcao} alt='Porção de batata' nome="Porção de batata" preco='28,00' data_name='Porção de batata' data_price={28.00} descricao="Bata frita, cheddar, bacon. 500g" />
                </div>
            </div>

        </main>
    )
}