import { useState } from 'react';

import Hamb_1 from '../../../assets/img/hot-dogs/01-tradicional.png';
import Hamb_2 from '../../../assets/img/hot-dogs/02-duplo.png';
import Hamb_3 from '../../../assets/img/hot-dogs/03-frango.png';
import Hamb_4 from '../../../assets/img/hot-dogs/04-bacon.png';
import Hamb_5 from '../../../assets/img/hot-dogs/05-calabresa.png';
import Hamb_6 from '../../../assets/img/hot-dogs/06-lombinho.png';
import Hamb_7 from '../../../assets/img/hot-dogs/07-frango-cheddar.png';
import Hamb_8 from '../../../assets/img/hot-dogs/08-frango-catupiry.png';
import Hamb_9 from '../../../assets/img/hot-dogs/10-frango-calabresa.png';
import Hamb_10 from '../../../assets/img/hot-dogs/09-frango-bacon.png';
import Hamb_11 from '../../../assets/img/hot-dogs/11-bacon-calabresa.png';
import Hamb_12 from '../../../assets/img/hot-dogs/12-lombinho-bacon.png';
import Hamb_13 from '../../../assets/img/hot-dogs/13-bacon-queijo.png';
import Hamb_14 from '../../../assets/img/hot-dogs/14-completao.png';

import { MenuItem } from '../../../components/itensMenu';
import { Menu } from '../../../components/carrinho';
import { DetalhesMenu } from '../../../components/detalhesMenu';

export function HotDog() {
  const [selectedItem, setSelectedItem] = useState<{ nome: string; preco: number } | null>(null);

  const handleMenuItemClick = (nome: string, preco: number) => {
    setSelectedItem({ nome, preco });
  };

  return (
    <div id='menu' onClick={Menu}>
      <div className='items-center justify-center flex flex-col mb-10'>
        <h2 className='mt-5 text-4xl font-bold text-center'>HOT DOG</h2>
        <p className='mt-5 mb-5 text-gray text-center text-sm'>Clique na imagem para adicionais.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 max-w-7xl px-2 mb-16' style={{ marginTop: '50px' }}>

          <MenuItem
            type="comida"
            src={Hamb_1}
            alt='Dog Tradicional'
            nome='Dog Tradicional'
            descricao='1 pão 15cm, 1 vina perdigão, maionese caseira, milho tomate picado, farofa especial, catchup, mostarda, batata palha crocante'
            preco='12,00'
            data_name='Dog Tradicional'
            data_price={12.00}
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamb_2}
            alt='Dog Duplo'
            nome='Dog Duplo'
            descricao='1 pão 15cm, 2 vinas perdigão, maionese caseira, milho, tomate picado, farofa especial, catchup, mostarda, batata palha crocante'
            preco='14,00'
            data_name='Dog Duplo'
            data_price={14.00}
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamb_3}
            alt='Dog Frango'
            nome='Dog Frango'
            descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, farofa, frango desfiado, catchup, mostarda, batata palha'
            preco='15,00'
            data_name='Dog Frango'
            data_price={15.00}
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamb_4}
            alt='Dog Bacon'
            nome='Dog Bacon'
            descricao='1 pão 15cm, 1 vina perdigão, maionese caseira, milho, tomate, farofa especial, bacon em cubos, catchup, mostarda, batata palha'
            preco='15,00'
            data_name='Dog Bacon'
            data_price={15.00}
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamb_5}
            alt='Dog Calabresa'
            nome='Dog Calabresa'
            descricao='1 pão 15cm, 1 vina perdigão, maionese caseira, milho, tomate, farofa, calabresa em cubos, catchup, mostarda, batata palha'
            preco='15,00'
            data_name='Dog Calabresa'
            data_price={15.00}
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamb_6}
            alt='Dog Lombinho'
            nome='Dog Lombinho'
            descricao='1 pão 15cm, 1 vina perdigão, maionese caseira, milho, tomate picado, lombinho, farofa especial, catchup, batata palha crocante'
            preco='15,00'
            data_name='Dog Lombinho'
            data_price={15.00}
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamb_7}
            alt='Dog Frango Cheddar'
            nome='Dog Frango Cheddar'
            descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, farofa, frango desfiado com cheddar, catchup, mostarda, batata palha'
            preco='15,00'
            data_name='Dog Frango Cheddar'
            data_price={15.00}
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamb_8}
            alt='Dog Frango Catupiry'
            nome='Dog Frango Catupiry'
            descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, farofa, frango desfiado com cheddar, catchup, mostarda, batata palha'
            preco='15,00'
            data_name='Dog Frango Catupiry'
            data_price={15.00}
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamb_9}
            alt='Dog Frango Calabresa'
            nome='Dog Frango Calabresa'
            descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, farofa, frango desfiado, calabresa, catchup, mostarda, batata palha'
            preco='17,00'
            data_name='Dog Frango Calabresa'
            data_price={17.00}
            onClick={handleMenuItemClick}
          />


          <MenuItem
            type="comida"
            src={Hamb_10}
            alt='Dog Frango Bacon'
            nome='Dog Frango Bacon'
            descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, farofa especial, frango desfiado, bacon, catchup, mostarda, batata palha'
            preco='18,00'
            data_name='Dog Frango Bacon'
            data_price={18.00}
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamb_11}
            alt='Dog Bacon Calabresa'
            nome='Dog Bacon Calabresa'
            descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, farofa, bacon e calabresa em cubos, catchup, mostarda, batata palha'
            preco='18,00'
            data_name='Dog Bacon Calabresa'
            data_price={18.00}
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamb_12}
            alt='Dog Lombinho Bacon'
            nome='Dog Lombinho Bacon'
            descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, lombinho, bacon em tiras, farofa, catchup, batata palha'
            preco='20,00'
            data_name='Dog Lombinho Bacon'
            data_price={20.00}
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamb_13}
            alt='Dog Bacon Queijo'
            nome='Dog Bacon Queijo'
            descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, bacon, queijo derretido, farofa especial, catchup, batata palha crocante'
            preco='20,00'
            data_name='Dog Bacon Queijo'
            data_price={20.00}
            onClick={handleMenuItemClick}
          />

          <MenuItem
            type="comida"
            src={Hamb_14}
            alt='Dog Completão'
            nome='Dog Completão'
            descricao='1 pão 20cm, 2 vinas perdigão, maionese, milho, tomate, frango, calabresa, bacon, requeijão, cheddar, farofa , batata palha'
            preco='28,00'
            data_name='Dog Completão'
            data_price={28.00}
            onClick={handleMenuItemClick}
          />
        </div>
      </div>

      {selectedItem && <DetalhesMenu type='hotDog' nome={selectedItem.nome} preco={selectedItem.preco} />}
    </div>
  );
}
