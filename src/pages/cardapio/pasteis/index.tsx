import { useEffect } from 'react';

import Pastel_1 from '../../../assets/img/pasteis/01-carne-queijo.png'
import Pastel_2 from '../../../assets/img/pasteis/02-especial.png'
import Pastel_3 from '../../../assets/img/pasteis/03-frango-cheddar.png'
import Pastel_4 from '../../../assets/img/pasteis/04-queijo-goiabada.png'
import Pastel_5 from '../../../assets/img/pasteis/05-queijo.png'
import Pastel_6 from '../../../assets/img/pasteis/06-frango-catupiry.png'
import Pastel_7 from '../../../assets/img/pasteis/07-calabresa.png'
import Pastel_8 from '../../../assets/img/pasteis/08-frango.png'
import Pastel_9 from '../../../assets/img/pasteis/09-pizza.png'
import Pastel_10 from '../../../assets/img/pasteis/10-carne.png'
import Pastel_11 from '../../../assets/img/pasteis/11-bacon-queijo.png'
import Pastel_12 from '../../../assets/img/pasteis/12-chocolate-branco.png'
import Pastel_13 from '../../../assets/img/pasteis/13-chocolate-preto.png'
import Pastel_14 from '../../../assets/img/pasteis/14-dois-amores.png'
import Pastel_15 from '../../../assets/img/pasteis/15-paçoca.png'

import { MenuItem } from '../../../components/categoria'
import { menu } from '../../../components/categoria'

export function Pasteis() {
    useEffect(() => {
        const menuElement = document.getElementById('menu');
        if (menuElement) {
            menuElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <main id='menu' onClick={(event) => menu(event as unknown as MouseEvent)}>
            <div className='items-center justify-center flex flex-col  mb-10'>
                <h2 className='text-4xl font-bold text-center'>Pasteis</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mt-20 mb-16'>

                    <MenuItem type="comida" src={Pastel_1} alt='Carne Queijo' nome="Carne Queijo" preco='12,00' data_name='Carne Queijo' data_price={12.00} descricao="Delicioso pastel sabor carne com queijo tamanho 22cmx10cm" />

                    <MenuItem type="comida" src={Pastel_2} alt='Especial' nome="Especial" preco='17,00' data_name='Especial' data_price={17.00} descricao="Pastel especial 22cmx10cm, carne, queijo, azeitona e ovo" />

                    <MenuItem type="comida" src={Pastel_3} alt='Frango Cheddar' nome="Frango Cheddar" preco='13,00' data_name='Frango Cheddar' data_price={13.00} descricao="Delicioso pastel de frango com cheddar tamanho 22cmx10cm" />

                    <MenuItem type="comida" src={Pastel_4} alt='Queijo e Goiabada' nome="Queijo Goiabada" preco='14,00' data_name='Queijo Goiabada' data_price={14.00} descricao="Delicioso pastel sabor queijo com goiabada tamanho 22cmx10cm" />

                    <MenuItem type="comida" src={Pastel_5} alt='Queijo' nome="Queijo" preco='12,00' data_name='Queijo' data_price={12.00} descricao="Delicioso pastel crocante sabor queijo tamanho 22cmx10cm" />

                    <MenuItem type="comida" src={Pastel_6} alt='Frango Catupiry' nome="Frango Catupiry" preco='13,00' data_name='Frango Catupiry' data_price={13.00} descricao="Delicioso pastel sabor frango com Catupiry tamanho 22cmx10cm" />

                    <MenuItem type="comida" src={Pastel_7} alt='Calabresa' nome="Calabresa" preco='12,00' data_name='Calabresa' data_price={12.00} descricao="Delicioso pastel crocante sabor calabresa tamanho 22cmx10cm" />

                    <MenuItem type="comida" src={Pastel_8} alt='Frango' nome="Frango" preco='12,00' data_name='Frango' data_price={12.00} descricao="Delicioso pastel crocante sabor frango tamanho 22cmx10cm" />

                    <MenuItem type="comida" src={Pastel_9} alt='Pizza' nome="Pizza" preco='13,00' data_name='Pizza' data_price={13.00} descricao="Delicioso pastel crocante sabor pizza tamanho 22cmx10cm" />

                    <MenuItem type="comida" src={Pastel_10} alt='Carne' nome="Carne" preco='12,00' data_name='Carne' data_price={13.00} descricao="Delicioso pastel crocante sabor carne tamanho 22cmx10cm" />

                    <MenuItem type="comida" src={Pastel_11} alt='Bacon Queijo' nome="Bacon Queijo" preco='14,00' data_name='Bacon Queijo' data_price={14.00} descricao="Delicioso pastel sabor bacon com queijo tamanho 22cmx10cm" />

                    <MenuItem type="comida" src={Pastel_12} alt='Chocolate Branco' nome="Chocolate Branco" preco='14,00' data_name='Chocolate Branco' data_price={14.00} descricao="Delicioso pastel sabor chocolate branco tamanho 22cmx10xcm" />

                    <MenuItem type="comida" src={Pastel_13} alt='Chocolate Preto' nome="Chocolate Preto" preco='14,00' data_name='Chocolate Preto' data_price={14.00} descricao="Delicioso pastel sabor chocolate preto tamanho 22cmx10xcm" />

                    <MenuItem type="comida" src={Pastel_14} alt='Dois Amores' nome="Dois Amores" preco='14,00' data_name='Dois Amores' data_price={14.00} descricao="Delicioso pastel sabor chocolate branco e preto 22cmx10xcm" />

                    <MenuItem type="comida" src={Pastel_15} alt='Paçoca' nome="Paçoca" preco='14,00' data_name='Paçoca' data_price={14.00} descricao="Delicioso pastel crcante sabor paçoca 22cmx10xcm" />

                </div>
            </div>
        </main>
    )
}