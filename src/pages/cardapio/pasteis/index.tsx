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

                    <MenuItem type="comida" src={Pastel_1} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_2} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_3} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_4} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_5} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_6} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_7} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_8} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_9} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_10} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_11} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_12} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_13} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_14} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                    <MenuItem type="comida" src={Pastel_15} alt='Carne Queijo' nome="Carne Queijo" preco='0' data_name='Carne Queijo' data_price={0} descricao="Teste" />

                </div>
            </div>
        </main>
    )
}