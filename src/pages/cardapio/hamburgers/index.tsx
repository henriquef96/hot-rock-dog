import { useState } from 'react';

import Hamburger from '../../../assets/img/hamburgers/hamburger.png';
import Hamburger_2 from '../../../assets/img/hamburgers/x-salada.png';
import Hamburger_3 from '../../../assets/img/hamburgers/x-calabresa.png';
import Hamburger_4 from '../../../assets/img/hamburgers/x-bacon.png';
import Hamburger_5 from '../../../assets/img/hamburgers/x-lombinho.png';
import Hamburger_6 from '../../../assets/img/hamburgers/x-frango.png';
import Hamburger_7 from '../../../assets/img/hamburgers/x-calabresa-bacon.png';
import Hamburger_8 from '../../../assets/img/hamburgers/x-frango-calabresa.png';
import Hamburger_9 from '../../../assets/img/hamburgers/x-tudo.png';

import { MenuItem } from '../../../components/itensMenu';
import { Menu } from '../../../components/carrinho';
import { DetalhesMenu } from '../../../components/detalhesMenu';

export function Hamburgers() {
  const [selectedItem, setSelectedItem] = useState<{ nome: string; preco: number } | null>(null);

  const handleMenuItemClick = (nome: string, preco: number) => {
    setSelectedItem({ nome, preco });
  };

  return (
    <div id='menu' onClick={Menu}>
      <div className='items-center justify-center flex flex-col mb-10'>
        <h2 className='text-4xl font-bold text-center mt-5'>HAMBÚRGUER</h2>
        <p className='mt-5 mb-5 text-gray text-center text-sm'>Clique na imagem para adicionais.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16' style={{ marginTop: '50px' }}>

          <MenuItem
            type="comida"
            src={Hamburger}
            alt='X Burger'
            nome="X Burger"
            preco='12,00'
            data_name='X Burger'
            data_price={12.00}
            descricao='1 pão argolinha, maionese caseira, ketchup, 1 hambúrguer perdigão, queijo muçarela, presunto, cheddar, Catupiry'
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamburger_2}
            alt='X Salada'
            nome="X Salada"
            preco='15,00'
            data_name='X Salada'
            data_price={15.00}
            descricao='1 pão, maionese, mostarda, ketchup, 1 hambúrguer, alface, tomate, milho, queijo muçarela, presunto, cheddar ou Catupiry'
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamburger_3}
            alt='X Calabresa'
            nome="X Calabresa"
            preco='17,00'
            data_name='X Calabresa'
            data_price={17.00}
            descricao='1 pão, maionese, mostarda, ketchup, 1 hambúrguer, alface, tomate, milho, queijo, presunto, calabresa, cheddar ou Catupiry'
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamburger_4}
            alt='X Bacon'
            nome="X Bacon"
            preco='17,00'
            data_name='X Bacon'
            data_price={17.00}
            descricao='1 pão, maionese, mostarda, ketchup, 1 hambúrguer, alface, tomate, milho, queijo, presunto, bacon, cheddar ou Catupiry'
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamburger_5}
            alt='X Lombinho'
            nome="X Lombinho"
            preco='17,00'
            data_name='X Lombinho'
            data_price={17.00}
            descricao='1 pão, maionese, ketchup, 1 hambúrguer, alface, tomate, lombinho, milho, queijo muçarela, presunto, cheddar ou Catupiry'
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamburger_6}
            alt='X Frango'
            nome="X Frango"
            preco='17,00'
            data_name='X Frango'
            data_price={17.00}
            descricao='1 pão, maionese, mostarda, ketchup, 1 hambúrguer, alface, tomate, milho, queijo, presunto, frango, cheddar ou Catupiry'
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamburger_7}
            alt='X Salada Duplo'
            nome="X Salada Duplo"
            preco='17,00'
            data_name='X Salada Duplo'
            data_price={17.00}
            descricao='1 pão, maionese, ketchup, 2 hambúrguer perdigão, alface, tomate, milho, queijo, presunto, cheddar ou Catupiry'
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamburger}
            alt='X Egg'
            nome="X Egg"
            preco='17,00'
            data_name='X Egg'
            data_price={17.00}
            descricao='1 pão, maionese caseira, ketchup, 1 hambúrguer perdigão, alface crespa, tomate, ovo, milho, queijo, presunto, cheddar ou Catupiry'
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamburger_7}
            alt='X Calabresa Bacon'
            nome="X Calabresa Bacon"
            preco='20,00'
            data_name='X Calabresa Bacon'
            data_price={20.00}
            descricao='1 pão, maionese, mostarda, ketchup, 1 hambúrguer, alface, tomate, milho, queijo, presunto, calabresa, cheddar ou Catupiry'
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamburger_8}
            alt='X Frango Calabresa'
            nome="X Frango Calabresa"
            preco='20,00'
            data_name='X Frango Calabresa'
            data_price={20.00}
            descricao='1 pão, maionese, ketchup, 2 hambúrguer, alface, tomate, milho, queijo, presunto, bacon, calabresa, frango, cheddar'
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamburger}
            alt='X Frango Bacon'
            nome="X Frango Bacon"
            preco='20,00'
            data_name='X Frango Bacon'
            data_price={20.00}
            descricao='1 pão, maionese, 1 hambúrguer, alface, tomate, milho, queijo, presunto, bacon em cubos, frango, cheddar, catupiry'
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamburger_9}
            alt='X Tudo'
            nome="X Tudo"
            preco='28,00'
            data_name='X Tudo'
            data_price={28.00}
            descricao='1 pão, 2 hambúrguer, alface crespa, tomate, milho, queijo, presunto, bacon, calabresa, frango, cheddar, Catupiry'
            onClick={handleMenuItemClick}
          />
        </div>
      </div>

      {selectedItem && (
        <DetalhesMenu type='hamburger' nome={selectedItem.nome} preco={selectedItem.preco} />
      )}
    </div>
  );
}
