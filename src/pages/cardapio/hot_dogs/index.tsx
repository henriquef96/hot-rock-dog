import { useEffect } from 'react';

import Hamb_1 from '../../../assets/img/hot-dogs/01-tradicional.png'
import Hamb_2 from '../../../assets/img/hot-dogs/02-duplo.png'
import Hamb_3 from '../../../assets/img/hot-dogs/03-frango.png'
import Hamb_4 from '../../../assets/img/hot-dogs/04-bacon.png'
import Hamb_5 from '../../../assets/img/hot-dogs/05-calabresa.png'
import Hamb_6 from '../../../assets/img/hot-dogs/06-lombinho.png'
import Hamb_7 from '../../../assets/img/hot-dogs/07-frango-cheddar.png'
import Hamb_8 from '../../../assets/img/hot-dogs/08-frango-catupiry.png'
import Hamb_9 from '../../../assets/img/hot-dogs/09-frango-bacon.png'
import Hamb_10 from '../../../assets/img/hot-dogs/10-frango-calabresa.png'
import Hamb_11 from '../../../assets/img/hot-dogs/11-bacon-calabresa.png'
import Hamb_12 from '../../../assets/img/hot-dogs/12-lombinho-bacon.png'
import Hamb_13 from '../../../assets/img/hot-dogs/13-bacon-queijo.png'
import Hamb_14 from '../../../assets/img/hot-dogs/14-completao.png'

import { MenuItem } from '../../../components/categoria'
import { menu } from '../../../components/categoria'

export function HotDog() {
    useEffect(() => {
        const menuElement = document.getElementById('menu');
        if (menuElement) {
            menuElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <main id='menu' onClick={(event) => menu(event as unknown as MouseEvent)}>
            <div className='items-center justify-center flex flex-col mb-10'>

                <h2 className='text-4xl font-bold text-center'>Hot Dog</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 max-w-7xl px-2 mt-20 mb-16'>
                    <MenuItem type="comida" src={Hamb_1} alt='Tradicional' nome='Tradicional' descricao='1 pão 15cm, 1 vina perdigão, maionese caseira, milho tomate picado, farofa especial, catchup, mostarda, batata palha crocante' preco='12,00' data_name='Tradicional' data_price={12.00} />

                    <MenuItem type="comida" src={Hamb_2} alt='Duplo' nome='Duplo' descricao='1 pão 15cm, 2 vinas perdigão, maionese caseira, milho, tomate picado, farofa especial, catchup, mostarda, batata palha crocante' preco='14,00' data_name='Duplo' data_price={14.00} />

                    <MenuItem type="comida" src={Hamb_3} alt='Frango' nome='Frango' descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, farofa, frango desfiado, catchup, mostarda, batata palha' preco='15,00' data_name='Frango' data_price={15.00} />

                    <MenuItem type="comida" src={Hamb_4} alt='Bacon' nome='Bacon' descricao='1 pão 15cm, 1 vina perdigão, maionese caseira, milho, tomate, farofa especial, bacon em cubos, catchup, mostarda, batata palha' preco='15,00' data_name='Bacon' data_price={15.00} />

                    <MenuItem type="comida" src={Hamb_5} alt='Calabresa' nome='Calabresa' descricao='1 pão 15cm, 1 vina perdigão, maionese caseira, milho, tomate, farofa, calabresa em cubos, catchup, mostarda, batata palha' preco='15,00' data_name='Calabresa' data_price={15.00} />

                    <MenuItem type="comida" src={Hamb_6} alt='Lombinho' nome='Lombinho' descricao='1 pão 15cm, 1 vina perdigão, maionese caseira, milho, tomate picado, lombinho, farofa especial, catchup, batata palha crocante' preco='15,00' data_name='Lombinho' data_price={15.00} />

                    <MenuItem type="comida" src={Hamb_7} alt='Frango Cheedar' nome='Frango Cheedar' descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, farofa, frango desfiado com cheddar, catchup, mostarda, batata palha' preco='15,00' data_name='Frango Cheedar' data_price={15.00} />

                    <MenuItem type="comida" src={Hamb_8} alt='Frango Catupiry' nome='Frango Catupiry' descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, farofa, frango desfiado com cheddar, catchup, mostarda, batata palha' preco='15,00' data_name='Frango Catupiry' data_price={15.00} />

                    <MenuItem type="comida" src={Hamb_9} alt='Frango Bacon' nome='Frango Bacon' descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, farofa especial, frango desfiado, bacon, catchup, mostarda, batata palha' preco='18,00' data_name='Frango Bacon' data_price={18.00} />

                    <MenuItem type="comida" src={Hamb_10} alt='Frango Calabresa' nome='Frango Calabresa' descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, farofa, frango desfiado, calabresa, catchup, mostarda, batata palha' preco='17,00' data_name='Frango Calabresa' data_price={17.00} />

                    <MenuItem type="comida" src={Hamb_11} alt='Bacon Calabresa' nome='Bacon Calabresa' descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, farofa, bacon e calabresa em cubos, catchup, mostarda, batata palha' preco='18,00' data_name='Bacon Calabresa' data_price={18.00} />

                    <MenuItem type="comida" src={Hamb_12} alt='Lombinho Bacon' nome='Lombinho Bacon' descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, lombinho, bacon em tiras, farofa, catchup, batata palha' preco='20,00' data_name='Lombinho Bacon' data_price={20.00} />

                    <MenuItem type="comida" src={Hamb_13} alt='Bacon Queijo' nome='Bacon Queijo' descricao='1 pão 15cm, 1 vina perdigão, maionese, milho, tomate, bacon, queijo derretido, farofa especial, catchup, batata palha crocante' preco='20,00' data_name='Bacon Queijo' data_price={20.00} />

                    <MenuItem type="comida" src={Hamb_14} alt='Completão' nome='Completão' descricao='1 pão 20cm, 2 vinas perdigão, maionese, milho, tomate, frango, calabresa, bacon, requeijão, cheddar, farofa , batata palha' preco='28,00' data_name='Completão' data_price={28.00} />
                </div>
            </div>
        </main>
    )
}