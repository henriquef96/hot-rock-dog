import { useState } from 'react';

import Combo_1 from '../../../assets/img/combos/01-combo-completao.png';
import Combo_2 from '../../../assets/img/combos/02-combo-bacon.png';
import Combo_3 from '../../../assets/img/combos/03-combo-tudao.png';
import Combo_4 from '../../../assets/img/combos/04-combo-calabresa.png';

import { MenuItem } from '../../../components/itensMenu'
import { Menu } from '../../../components/carrinho'

import { DetalhesMenu } from '../../../components/detalhesMenu';

export function Combos() {
  const [selectedItem, setSelectedItem] = useState<{ nome: string; preco: number; } | null>(null);

  const handleMenuItemClick = (nome: string, preco: number) => {
    setSelectedItem({ nome, preco });
  };

  return (
    <div id='menu' onClick={Menu}>
      <div className='items-center justify-center flex flex-col mb-10'>
        <h2 className='text-4xl font-bold text-center mt-5'>PROMOÇÃO DO DIA</h2>
        <p className='mt-5 mb-5 text-gray text-center text-sm'>Clique na imagem para alguma observação.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16' style={{ marginTop: '50px' }}>

          <MenuItem
            type="comida"
            src={Combo_1}
            alt='Combo Completão'
            nome="Terça - Combo Completão"
            preco='59,90'
            data_name='Combo Completão'
            data_price={59.90}
            descricao='2 Completão + Cini 2 Litros'
            onClick={handleMenuItemClick} />

          <MenuItem
            type="comida"
            src={Combo_2}
            alt='Combo Bacon'
            nome="Quarta - Combo Bacon"
            preco='59,90'
            data_name='Combo Bacon'
            data_price={59.90}
            descricao="4 Dog Bacon + Cini 2 Litros"
            onClick={handleMenuItemClick} />

          <MenuItem
            type="comida"
            src={Combo_3}
            alt='Combo X-Tudão'
            nome="Quinta - Combo X-Tudão"
            preco='59,90'
            data_name='Combo X-Tudão'
            data_price={59.90}
            descricao="2 X-Tudo + Cini 2 Litros"
            onClick={handleMenuItemClick} />

          <MenuItem
            type="comida"
            src={Combo_4}
            alt='Combo Calabresa'
            nome="Sexta - Combo Calabresa"
            preco='59,90'
            data_name='Combo Calabresa'
            data_price={59.90}
            descricao="4 Dog Calabresa + Cini 2 Litros"
            onClick={handleMenuItemClick} />
        </div>
      </div>

      {selectedItem && (
        <DetalhesMenu type='semAdicional' nome={selectedItem.nome} preco={selectedItem.preco} />
      )}
    </div>
  );
}
