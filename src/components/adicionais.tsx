import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function toastAdd() {
    Toastify({
        text: "Item adicionado!",
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

function toastRemove() {
    Toastify({
        text: "Item removido!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, rgb(200, 0, 0), red)",
        },
    }).showToast();
}

interface AdicionaisProps {
    type: 'hot-dog' | 'hamburger';
    adicional: string;
    valor: string;
    data_price_adc: number;
    data_name_adc: string;
}

export function Adicionais({ adicional, valor, data_price_adc, data_name_adc }: AdicionaisProps) {
    return (
        <div className='flex justify-between items-center p-1 text-sm item-adc'>

            <i className='fas fa-plus adicional-item' onClick={toastAdd} data-price-adc={data_price_adc} data-name-adc={data_name_adc}></i>

            <div>{adicional} R$ {valor}</div>

            <i className='fas fa-minus' onClick={toastRemove} data-price-adc={data_price_adc}></i>
        </div>
    )
}