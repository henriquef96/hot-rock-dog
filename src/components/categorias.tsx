import { Outlet, Link } from 'react-router-dom';

import Item_1 from '../assets/img/categorias/01-combos.png';
import Item_2 from '../assets/img/categorias/02-hot-dogs.png';
import Item_3 from '../assets/img/categorias/03-hamburgers.png';
import Item_4 from '../assets/img/categorias/04-pasteis.png';
import Item_5 from '../assets/img/categorias/05-porcoes.png';
import Item_6 from '../assets/img/categorias/06-bebidas.png';

export function Categoria() {

    interface CategoriaItemProps {
        link: string;
        img: string;
        nome: string;
    }

    const CategoriaItem: React.FC<CategoriaItemProps> = ({ link, img, nome }) => {
        return (
            <div className='itens-categoria w-1/2 sm:w-1/3 lg:w-1/6 text-center'>
                <div className='w-28 h-28 rounded-full mx-auto'>
                    <Link to={link}><img src={img} alt={nome} className='w-28 h-28 rounded-full menu-item-shadow hover:scale-110 duration-300 cursor-pointer' onClick={Scroll} /></Link>
                    <h2 className='scroll font-bold mt-1'>{nome}</h2>
                </div>
            </div>
        );
    };

    function Scroll() {
        const handleResize = () => {
            if (window.innerWidth < 639) {
                const menuElement = document.getElementById('menu');
                if (menuElement) {
                    menuElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }

    return (
        <div className='h-dvh'>
            <div className='flex items-center justify-center bg-categoria '>
                <div className='flex w-full flex-wrap div-categoria'>
                    <CategoriaItem link={'/combos'} img={Item_1} nome='Combos' />
                    <CategoriaItem link={'/hot_dog'} img={Item_2} nome='Hot Dogs' />
                    <CategoriaItem link={'/hamburgers'} img={Item_3} nome='Hamburgers' />
                    <CategoriaItem link={'/pasteis'} img={Item_4} nome='Pasteis' />
                    <CategoriaItem link={'/porcoes'} img={Item_5} nome='Porções' />
                    <CategoriaItem link={'/bebidas'} img={Item_6} nome='Bebidas' />
                </div>
            </div>
            <Outlet />
        </div>
    );
}











