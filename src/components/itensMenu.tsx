import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function toastCart() {
    Toastify({
        text: "Item adicionado ao carrinho",
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

interface MenuItemProps {
    type: 'comida' | 'bebida';
    src: string;
    alt?: string;
    nome: string;
    descricao?: string;
    preco: string;
    data_name: string;
    data_price: number;
    onClick: (nome: string, preco: number) => void;
}
export function MenuItem({ type, src, alt, nome, descricao, preco, data_name, data_price, onClick }: MenuItemProps) {

    function showModalMenu() {
        const menuModal = document.getElementById("menu-modal")!;

        if (menuModal) {
            menuModal.style.display = "flex";
        } else {
            console.error('Elemento ainda não está criado!')
        }
    }

    return (
        <div className='flex gap-2' onClick={() => onClick(nome, parseFloat(preco))}>
            <div className='w-60 h-30 hover:scale-110 hover:-rotate-2 duration-300 ' onClick={showModalMenu}>
                <img src={src} alt={alt} className='rounded menu-item' />
            </div>
            <div className='w-full'>
                {type === 'comida' && (
                    <>
                        <span className='font-bold'>{nome}</span>
                        <p className='text-sm text-gray'>{descricao}</p>
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