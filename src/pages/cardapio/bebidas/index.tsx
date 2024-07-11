import { useEffect } from 'react';

import Bebida_1 from '../../../assets/img/bebidas/01-coca-cola.png'
import Bebida_2 from '../../../assets/img/bebidas/02-coca-cola-lata-zero.png'
import Bebida_3 from '../../../assets/img/bebidas/03-fanta-laranja-lata.png'
import Bebida_4 from '../../../assets/img/bebidas/04-fanta-uva-lata.png'
import Bebida_5 from '../../../assets/img/bebidas/05-guarana-lata.png'

import Bebida_6 from '../../../assets/img/bebidas/06-coca-cola-2l.png'
import Bebida_7 from '../../../assets/img/bebidas/07-cini-framboesa.png'
import Bebida_8 from '../../../assets/img/bebidas/08-cini-laranjinha.png'
import Bebida_9 from '../../../assets/img/bebidas/09-cini-abacaixi.png'

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

import { menu } from '../../../components/categoria'

interface MenuItemProps {
    type: 'comida' | 'bebida';
    src: string;
    alt?: string;
    nome?: string;
    descricao?: string;
    preco: string;
    data_name: string;
    data_price: number;
}

function toastCart() {
    Toastify({
        text: "Item adicionado no carrinho",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, green, #00C21F)",
        },
    }).showToast();
}

function MenuItem({ type, src, alt, nome, descricao, preco, data_name, data_price }: MenuItemProps) {
    return (
        <div className='flex gap-2'>
            <div className='w-60 h-30 hover:scale-110 hover:-rotate-2 duration-300'>
                <img src={src} alt={alt} className='rounded' />
            </div>

            <div className='w-full'>
                {type === 'comida' && (
                    <>
                        <span className='font-bold'>{nome}</span>
                        <p className='text-sm'>{descricao}</p>
                    </>
                )}
                {type === 'bebida' && (
                    <span className='font-bold'>{nome}</span>
                )}
                <div className='flex items-center gap-2 justify-between mt-3'>
                    <span className='font-bold text-lg'>R$ {preco}</span>
                    <button data-name={data_name} data-price={data_price} className='bg-black px-5 pt-1 rounded add-to-cart-btn hover:scale-110 duration-300' onClick={toastCart}><i className='fa fa-cart-plus text-lg text-white'></i></button>
                </div>
            </div>
        </div>
    );
}

export function Bebidas() {
    useEffect(() => {
        const menuElement = document.getElementById('menu');
        if (menuElement) {
            menuElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <main id='menu' onClick={(event) => menu(event as unknown as MouseEvent)}>
            <div className='items-center justify-center flex flex-col mb-10'>
                <h2 className='text-4xl font-bold text-center'>Bebidas</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mt-20 mb-16'>
                    <MenuItem type="bebida" src={Bebida_1} alt='Coca Cola lata' nome="Coca Cola Lata" preco='' data_name='Coca Cola lata' data_price={6.00} />

                    <MenuItem type="bebida" src={Bebida_2} alt='Coca Cola Zero' nome="Coca Cola 2L" preco='' data_name='Coca Cola 2L' data_price={14.00} />

                    <MenuItem type="bebida" src={Bebida_3} alt='Cine Framboesa 2L' nome="Cine Framboesa 2L" preco='' data_name='Cine Framboesa 2L' data_price={9.00} />

                    <MenuItem type="bebida" src={Bebida_4} alt='Cine Abacaxi 2L' nome="Cine Abacaxi 2L" preco='' data_name='Cine Abacaxi 2L' data_price={9.00} />

                    <MenuItem type="bebida" src={Bebida_5} alt='Cine Laranjinha 2L' nome="Cine Laranjinha 2L" preco='' data_name='Cine Laranjinha 2L' data_price={9.00} />

                    <MenuItem type="bebida" src={Bebida_6} alt='Coca Cola lata' nome="Coca Cola Lata" preco='' data_name='Coca Cola lata' data_price={6.00} />

                    <MenuItem type="bebida" src={Bebida_7} alt='Coca Cola 2L' nome="Coca Cola 2L" preco='' data_name='Coca Cola 2L' data_price={14.00} />

                    <MenuItem type="bebida" src={Bebida_8} alt='Cine Framboesa 2L' nome="Cine Framboesa 2L" preco='' data_name='Cine Framboesa 2L' data_price={9.00} />

                    <MenuItem type="bebida" src={Bebida_9} alt='Cine Abacaxi 2L' nome="Cine Abacaxi 2L" preco='' data_name='Cine Abacaxi 2L' data_price={9.00} />
                </div>
            </div>
        </main>
    )
}