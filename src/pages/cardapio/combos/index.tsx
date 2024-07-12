import { useEffect } from 'react';

import Combo_1 from '../../../assets/img/combos/01-combo-completao.png';
import Combo_2 from '../../../assets/img/combos/02-combo-bacon.png';
import Combo_3 from '../../../assets/img/combos/03-combo-tudao.png';
import Combo_4 from '../../../assets/img/combos/04-combo-calabresa.png';

import { MenuItem } from '../../../components/categoria';
import { menu } from '../../../components/categoria';

export function Combos() {
    useEffect(() => {
        const menuElement = document.getElementById('menu');
        if (menuElement) {
            menuElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <main id='menu' onClick={(event) => menu(event as unknown as MouseEvent)}>
            <div className='items-center justify-center flex flex-col mb-10'>
                <h2 className='text-4xl font-bold text-center'>Promoção do dia</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mt-20 mb-16'>
                    <MenuItem type="comida" src={Combo_1} alt='Combo Completão' nome="Terça - Combo Completão" preco='59,90' data_name='Combo Completão' data_price={59.90} descricao='4 Dog Calabresa + Cini 2 Litros' />

                    <MenuItem type="comida" src={Combo_2} alt='Combo Bacon' nome="Quarta - Combo Bacon" preco='59,90' data_name='Combo Bacon' data_price={59.90} descricao="4 Dog Bacon + Cini 2 Litros" />

                    <MenuItem type="comida" src={Combo_3} alt='Combo X-Tudão' nome="Quinta - Combo X-Tudão" preco='59,90' data_name='Combo X-Tudão' data_price={59.90} descricao="2 X-Tudo + Cini 2 Litros" />

                    <MenuItem type="comida" src={Combo_4} alt='Combo Calabresa' nome="Sexta - Combo Calabresa" preco='59,90' data_name='Combo Calabresa' data_price={59.90} descricao="4 Dog Calabresa + Cini 2 Litros" />
                </div>
            </div>
        </main>
    );
}