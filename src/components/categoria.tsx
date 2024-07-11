import { Outlet, Link } from 'react-router-dom'

import Item_1 from '../assets/img/categorias/01-combos.png'
import Item_2 from '../assets/img/categorias/02-hot-dogs.png'
import Item_3 from '../assets/img/categorias/03-hamburgers.png'
import Item_4 from '../assets/img/categorias/04-pasteis.png'
import Item_5 from '../assets/img/categorias/05-porcoes.png'
import Item_6 from '../assets/img/categorias/06-bebidas.png'

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export interface CartProps {
    name: string;
    price: number;
    qtd: number;
}

export let cart: CartProps[] = [];

export function menu(event: MouseEvent) {
    const target = event.target as HTMLElement;

    let parentButton = target.closest(".add-to-cart-btn");

    if (parentButton instanceof HTMLElement) {
        const name = parentButton.getAttribute("data-name");
        const price = parentButton.getAttribute("data-price");

        if (price !== null && name !== null) {
            const priceFloat = parseFloat(price);
            addToCart(name, priceFloat);
        }
    }
}

function toastCart() {
    Toastify({
        text: "Item adicionado no carrinho",
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

function addToCart(name: string, price: number) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.qtd += 1;
    } else {
        cart.push({
            name,
            price,
            qtd: 1
        });
    }
    updateCartModal();
}

function updateCartModal() {
    const cartItemsContainer = document.getElementById("cart-items");
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = "";

        let total = 0;

        cart.forEach(item => {
            const cartItemElement = document.createElement("div");

            cartItemElement.classList.add("mb-5");

            cartItemElement.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex flex-col">
                    <span class="font-medium">${item.name}</span>
                    <span>Qtd: ${item.qtd}</span>
                    <span class="font-medium">R$ ${item.price.toFixed(2)}</span>
                </div>
                <button class="remove-btn" data-name="${item.name}">Remover</button>
            </div>`;

            total += item.price * item.qtd;

            cartItemsContainer.appendChild(cartItemElement);
        });

        const cartTotal = document.getElementById("cart-total");
        if (cartTotal) {
            cartTotal.textContent = `R$ ${total.toFixed(2)}`;
        }

        const cartCounter = document.getElementById("cart-count");
        if (cartCounter) {
            cartCounter.textContent = cart.length.toString();
        }

        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", function (event) {
                const target = event.target as HTMLElement;
                const name = target.getAttribute("data-name");
                if (name) {
                    removeFromCart(name);
                }
            });
        });
    }
}

function removeFromCart(name: string) {
    const item = cart.find(item => item.name === name);
    if (item) {
        if (item.qtd > 1) {
            item.qtd -= 1;
        } else {
            cart = cart.filter(item => item.name !== name);
        }
    }
    updateCartModal();
}

interface MenuItemProps {
    type: 'comida' | 'bebida';
    src: string;
    alt?: string;
    nome?: string;
    descricao?: string;
    preco: string;
    data_name: string;
    data_price: number;
}

export function MenuItem({ type, src, alt, nome, descricao, preco, data_name, data_price }: MenuItemProps) {
    return (
        <div className='flex gap-2'>
            <div className='w-60 h-30 hover:scale-110 hover:-rotate-2 duration-300'>
                <img src={src} alt={alt} className='rounded menu-item-shadow ' />
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

export function Categoria() {
    return (
        <main>
            <div className='flex items-center justify-center bg-categoria'>
                <div className='flex w-full flex-wrap div-categoria'>

                    <div className='itens-categoria w-1/2 sm:w-1/3 lg:w-1/6 text-center'>
                        <div className='w-28 h-28 rounded-full mx-auto'>
                            <Link to={'combos'}><img src={Item_1} alt='Combos' className='w-28 h-28 rounded-full menu-item-shadow hover:scale-110 duration-300 cursor-pointer' /></Link>
                            <h2 className='scroll font-bold mt-1'>Combos</h2>
                        </div>
                    </div>

                    <div className='itens-categoria w-1/2 sm:w-1/3 lg:w-1/6 text-center'>
                        <div className='w-28 h-28 rounded-full mx-auto'>
                            <Link to={'hot_dog'}><img src={Item_2} alt='Hot Dogs' className='w-28 h-28 rounded-full menu-item-shadow hover:scale-110 duration-300 cursor-pointer' /></Link>
                            <h2 className='font-bold mt-1'>Hot Dogs</h2>
                        </div>
                    </div>

                    <div className='itens-categoria w-1/2 sm:w-1/3 lg:w-1/6 text-center'>
                        <div className='w-28 h-28 rounded-full mx-auto'>
                            <Link to={'hamburgers'}><img src={Item_3} alt='Hamburgers' className='w-28 h-28 rounded-full menu-item-shadow hover:scale-110 duration-300 cursor-pointer' />
                                <h2 className='font-bold mt-1'>Hamburgers</h2></Link>
                        </div>
                    </div>

                    <div className='itens-categoria w-1/2 sm:w-1/3 lg:w-1/6 text-center'>
                        <div className='w-28 h-28 rounded-full mx-auto'>
                            <Link to={'pasteis'}><img src={Item_4} alt='Pasteis' className='w-28 h-28 rounded-full menu-item-shadow hover:scale-110 duration-300 cursor-pointer' />
                                <h2 className='font-bold mt-1'>Pasteis</h2></Link>
                        </div>
                    </div>

                    <div className='itens-categoria w-1/2 sm:w-1/3 lg:w-1/6 text-center'>
                        <div className='w-28 h-28 rounded-full mx-auto'>
                            <Link to={'porcoes'}><img src={Item_5} alt='Porções' className='w-28 h-28 rounded-full menu-item-shadow hover:scale-110 duration-300 cursor-pointer' />
                                <h2 className='font-bold mt-1'>Porções</h2></Link>
                        </div>
                    </div>

                    <div className='itens-categoria w-1/2 sm:w-1/3 lg:w-1/6 text-center'>
                        <div className='w-28 h-28 rounded-full mx-auto'>
                            <Link to='bebidas'><img src={Item_6} alt='Bebidas' className='w-28 h-28 rounded-full menu-item-shadow hover:scale-110 duration-300 cursor-pointer' />
                                <h2 className='font-bold mt-1'>Bebidas</h2></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Outlet />
            </div>
        </main>
    )
}