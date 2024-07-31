import { useState } from 'react';
import Porcao from '../../../assets/img/porcoes/01-porcao-batata-frita.png';

import { MenuItem } from '../../../components/itensMenu';
import { Menu } from '../../../components/carrinho';
import { DetalhesMenu } from '../../../components/detalhesMenu';

export function Porcoes() {
    const [selectedItem, setSelectedItem] = useState<{ nome: string; preco: number } | null>(null);

    const handleMenuItemClick = (nome: string, preco: number) => {
        setSelectedItem({ nome, preco });
    };

    return (
        <div id='menu' onClick={Menu}>
            <div className='items-center justify-center flex flex-col mb-10'>
                <h2 className='mt-5 text-4xl font-bold text-center'>PORÇÕES</h2>
                <p className='mt-5 mb-5 text-gray text-center text-sm'>Clique na imagem para alguma observação.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16' style={{ marginTop: '50px' }}>

                    <MenuItem
                        type="comida"
                        src={Porcao}
                        alt='Porção de batata'
                        nome="Porção de batata"
                        preco='28,00'
                        data_name='Porção de batata'
                        data_price={28.00}
                        descricao="Batata frita, cheddar, bacon. 500g"
                        onClick={() => handleMenuItemClick('Porção de batata', 28.00)}
                    />
                </div>
            </div>

            {selectedItem && <DetalhesMenu type='semAdicional' nome={selectedItem.nome} preco={selectedItem.preco} />}
        </div>
    );
}
