import React, { useState, useEffect } from "react";
import { Adicionais } from "./adicionais";
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

interface DetalhesMenuProps {
    type: 'semAdicional' | 'hotDog' | 'hamburger';
    nome: string;
    preco: number;
}

export function DetalhesMenu({ type, nome, preco }: DetalhesMenuProps) {
    const [valorAdicional, setValorAdicional] = useState(0);

    useEffect(() => {
        const plusButtons = document.querySelectorAll<HTMLButtonElement>('.fa-plus');
        const minusButtons = document.querySelectorAll<HTMLButtonElement>('.fa-minus');

        const handlePlusClick = (event: MouseEvent): void => {
            const button = event.currentTarget as HTMLElement;
            const dataPriceAdc = parseFloat(button.getAttribute('data-price-adc') || "0");
            const dataNameAdc = button.getAttribute('data-name-adc')
            setValorAdicional(prevValor => prevValor + dataPriceAdc);
            console.log(dataNameAdc)
        };

        const handleMinusClick = (event: MouseEvent): void => {
            const button = event.currentTarget as HTMLElement;
            const dataPriceAdc = parseFloat(button.getAttribute('data-price-adc') || "0");
            setValorAdicional(prevValor => Math.max(prevValor - dataPriceAdc, 0));
        };

        plusButtons.forEach(button => {
            button.addEventListener('click', handlePlusClick);
        });

        minusButtons.forEach(button => {
            button.addEventListener('click', handleMinusClick);
        });

        return () => {
            plusButtons.forEach(button => {
                button.removeEventListener('click', handlePlusClick);
            });

            minusButtons.forEach(button => {
                button.removeEventListener('click', handleMinusClick);
            });
        };
    }, []);

    useEffect(() => {
        const menuItems = document.querySelectorAll<HTMLDivElement>('.menu-item');

        function handleClick(event: MouseEvent): void {
            const menuItem = (event.currentTarget as HTMLDivElement).cloneNode(true) as HTMLDivElement;

            const outputElement = document.getElementById('output');
            if (outputElement) {
                outputElement.innerHTML = '';
                outputElement.appendChild(menuItem);
            }
        }

        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', handleClick);
        });

        return () => {
            menuItems.forEach(menuItem => {
                menuItem.removeEventListener('click', handleClick);
            });
        };
    }, []);

    const handleCloseModalBtn = () => {
        const menuModal = document.getElementById("menu-modal");
        if (menuModal) {
            menuModal.style.display = "none";
        }
    };

    const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
        const menuModal = document.getElementById("menu-modal");
        if (menuModal && event.target === menuModal) {
            menuModal.style.display = "none";
        }
    };

    const handleAddToCart = () => {
        const totalPrice = preco + valorAdicional;
        toastCart();
        preco = totalPrice
        setValorAdicional(0);
    };


    // const [selectedItem, setSelectedItem] = useState<{ nome: string; preco: number } | null>(null);

    // const handleMenuItemClick = (nome: string, preco: number) => {
    //     setSelectedItem({ nome, preco });
    // };

    // onClick = { handleMenuItemClick }

    // {
    //     selectedItem && (
    //         <DetalhesMenu type='hamburger' nome={selectedItem.nome} preco={selectedItem.preco} />
    //     )
    // }

    return (
        <div id="menu-modal" className="bg-black/60 w-full h-full fixed top-0 left-0 z-[99] items-center justify-center hidden p-5" onClick={closeModal}>

            <div className="rounded-md flex modal-menu">
                <div className='img-modal-menu'>
                    <div id="output"></div>
                </div>

                {type === 'semAdicional' && (
                    <div className='detalhes-menu'>
                        <button onClick={handleCloseModalBtn} className='btn-close flex w-full'><i className="fa-solid fa-x"></i></button>
                        <div>
                            <h1 className='font-bold text-lg text-center'>{nome}</h1>
                            <div className='flex flex-col mt-5'>
                                <span className='font-bold text-sm'>Observações</span>
                                <textarea className='border rounded mt-1 bg-obs text-sm p-1' placeholder="Ex: tirar cebola, etc."></textarea>
                            </div>
                            <div className='mt-5'>
                                <span className='font-bold'>Total: <span>R$ {preco.toFixed(2)}</span></span>
                                <button data-name={nome} data-price={preco} className='w-full rounded bg-red text-white add-to-cart-btn p-1 mt-1 cart-btn' onClick={handleAddToCart}>Adicionar</button>
                            </div>
                        </div>
                    </div>
                )}

                {(type === 'hotDog' || type === 'hamburger') && (
                    <div className='detalhes-menu'>
                        <button onClick={handleCloseModalBtn} className='btn-close flex w-full'><i className="fa-solid fa-x"></i></button>
                        <div>
                            <h1 className='font-bold text-lg text-center'>{nome}</h1>
                            <div className="mt-5">
                                <h2 className='font-bold text-sm'>Adicionais</h2>
                            </div>
                            <div className='bg-modal-adc mt-1'>
                                {type === 'hotDog' && (
                                    <>
                                        <Adicionais type='hot-dog' adicional='Vina (perdigão)' valor={'2,00'} data_price_adc={2.00} data_name_adc="Vina" />
                                        <Adicionais type='hot-dog' adicional='Frango (desfiado)' valor={'3,00'} data_price_adc={3.00} data_name_adc="Frango" />
                                        <Adicionais type='hot-dog' adicional='Calabresa (cubos)' valor={'3,00'} data_price_adc={3.00} data_name_adc="Calabresa" />
                                        <Adicionais type='hot-dog' adicional='Lombinho (rodelas)' valor={'4,00'} data_price_adc={4.00} data_name_adc="Lombinho" />
                                        <Adicionais type='hot-dog' adicional='Bacon (cubos)' valor={'4,00'} data_price_adc={4.00} data_name_adc="Bacon" />
                                        <Adicionais type='hot-dog' adicional='Cheddar (s\amido)' valor={'4,00'} data_price_adc={4.00} data_name_adc="Cheddar" />
                                        <Adicionais type='hot-dog' adicional='Requeijão (s\amido)' valor={'4,00'} data_price_adc={4.00} data_name_adc="Requeijão" />
                                    </>
                                )}
                                {type === 'hamburger' && (
                                    <>
                                        <Adicionais type='hamburger' adicional='Hambúrger (un)' valor={'2,00'} data_price_adc={2.00} data_name_adc="Hambúrger" />
                                        <Adicionais type='hamburger' adicional='Frango (desfiado)' valor={'3,00'} data_price_adc={3.00} data_name_adc="Frango" />
                                        <Adicionais type='hamburger' adicional='Calabresa (rodelas)' valor={'3,00'} data_price_adc={3.00} data_name_adc="Calabresa" />
                                        <Adicionais type='hamburger' adicional='Bacon (cubos)' valor={'3,00'} data_price_adc={3.00} data_name_adc="Bacon" />
                                        <Adicionais type='hamburger' adicional='Lombinho (rodelas)' valor={'4,00'} data_price_adc={4.00} data_name_adc="Lombinho" />
                                        <Adicionais type='hamburger' adicional='Muçarela (fatiado)' valor={'4,00'} data_price_adc={4.00} data_name_adc="Muçarela" />
                                        <Adicionais type='hamburger' adicional='Presunto (fatiado)' valor={'3,00'} data_price_adc={3.00} data_name_adc="Presunto" />
                                    </>
                                )}
                            </div>
                            <div className='flex flex-col mt-5'>
                                <span className='font-bold text-sm'>Observações</span>
                                <textarea data-obs="data_obs" className='border rounded mt-1 bg-obs text-sm p-1' placeholder="Ex: tirar cebola, etc."></textarea>
                            </div>

                            <div className='mt-5'>
                                <span className='font-bold'>Total: <span>R$ {(preco + valorAdicional).toFixed(2)}</span></span>

                                <button data-name={nome} data-price={(preco + valorAdicional).toFixed(2)} className='w-full rounded bg-red text-white add-to-cart-btn cart-btn p-1 mt-1' onClick={handleAddToCart}>
                                    Adicionar<i className="cart-add fas fa-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
