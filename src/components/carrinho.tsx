import React, { useState, useEffect, MouseEvent } from 'react';
import Logo from '../../public/logo.png'

interface CartProps {
    name: string;
    price: number;
}

let cart: CartProps[] = [];

export function Menu(event: MouseEvent<HTMLButtonElement | HTMLSpanElement>) {
    const target = event.target as HTMLElement;

    const parentButton = target.closest(".add-to-cart-btn") || target.closest(".fa-plus");

    if (parentButton instanceof HTMLElement) {
        const name = parentButton.getAttribute("data-name");
        const price = parentButton.getAttribute("data-price");

        if (price !== null && name !== null) {
            const priceFloat = parseFloat(price);
            addToCart(name, priceFloat);
        }
    }
}

function addToCart(name: string, price: number) {
    cart.push({ name, price });
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
                        <span>Item: ${item.name}</span>
                        <span>Adicional: </span>
                        <span>Obs: </span>
                        <span>R$ ${item.price.toFixed(2)}</span>
                    </div>
                    <button class="remove-btn" data-name="${item.name}">Remover</button>
                </div>`;

            total += item.price;

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
        cart = cart.filter(item => item.name !== name);
    }
    updateCartModal();
}

export function Carrinho() {
    const [address, setAddress] = useState("");
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
        const cartModal = document.getElementById("cart-modal");
        if (cartModal && event.target === cartModal) {
            cartModal.style.display = "none";
        }
    };

    const handleCloseModalBtn = () => {
        const cartModal = document.getElementById("cart-modal");
        if (cartModal) {
            cartModal.style.display = "none";
        }
    };

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const validateFields = (): boolean => {
        let isValid = true;
        const inputs = document.querySelectorAll<HTMLInputElement>("#cart-modal input");
        const selects = document.querySelectorAll<HTMLSelectElement>("#cart-modal select");

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.border = "1px solid #EF4444";
                isValid = false;
            } else {
                input.style.border = "1px solid #E5E7EB";
            }
        });

        selects.forEach(select => {
            if (select.value === "0" || select.value === "--") {
                select.style.border = "1px solid #EF4444";
                isValid = false;
            } else {
                select.style.border = "1px solid #E5E7EB";
            }
        });

        return isValid;
    };

    const checkoutBtn = () => {
        if (!validateFields()) {
            return;
        }

        const cartItems = cart.map((item) => {
            return `${item.name} | Preço: R$ ${item.price}\n\n`;
        }).join("");

        const total = cart.reduce((acc, item) => acc + item.price, 0);
        const message = encodeURIComponent(`${cartItems}Total: R$ ${total.toFixed(2)}\nEndereço: ${address}`);
        const phone = "41987479523";

        window.open(`https://wa.me/${phone}?text=${message}`);
    };

    return (
        <div id="cart-modal" className="cart-modal bg-black/60 w-full h-full fixed top-0 left-0 z-[99] items-center justify-center hidden" onClick={closeModal}>

            <div className="bg-white p-5 rounded-md min-w-[90%] max-h-[90%] md:min-w-[600px] overflow-auto cart">

                <div className='flex items-center justify-center'>
                    <img src={Logo} alt="" width="60" className='mb-2'/>
                    <h2 className="text-center font-bold text-2xl" >Hot Rock Dog</h2>
                </div>

                <h2 className="text-center font-bold text-lg">Meu carrinho</h2>
                <p className="text-center font-bold mb-10">{dateTime.toLocaleString()}</p>

                <div id="cart-items"></div>

                <p className="font-bold">Total: <span id="cart-total">R$ 0.00</span></p>


                <div className='flex justify-between mt-5'>
                    <div className='flex flex-col input-nome'>
                        <p className='font-bold'>Nome: </p>
                        <input type="text" placeholder="Digite seu nome..." className="border p-1 rounded my-1 " />
                    </div>

                    <div className='flex flex-col input-contato'>
                        <p className='font-bold'>Contato: </p>
                        <input type="text" placeholder="Digite seu contato..." className="border p-1 rounded my-1 mb-5" />
                    </div>
                </div>

                <p className="font-bold">Endereço:</p>

                <input id='input-adress' type="text" placeholder="Digite seu endereço completo..." className="w-full border p-1 rounded my-1" value={address} onChange={handleAddressChange} />


                <div className='mt-3'>
                    <label className='font-bold'>Taxa entrega:</label><br />
                    <select name="pagamento" id="pagamento">
                        <option value="0">Selecion</option>
                        <option value="1">Bairro 1</option>
                        <option value="2">Bairro 2</option>
                        <option value="3">Bairro 3</option>
                        <option value="4">Bairro 4</option>
                    </select>
                    <span>R$ 0.00</span>
                </div>

                <div className='flex justify-between mt-3'>
                    <div>
                        <label className='font-bold'>Precisa de Troco?</label><br />
                        <select name="troco" id="troco">
                            <option value="0">--</option>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                        </select>
                        <input className='m-1' style={{ width: '100px' }} type="text" placeholder='Valor' />
                    </div>

                    <div>
                        <label className='font-bold'>Forma Pagamento</label><br />
                        <select name="pagamento" id="pagamento">
                            <option value="0">--</option>
                            <option value="credito">Crédito</option>
                            <option value="debito">Débito</option>
                            <option value="pix">PIX</option>
                            <option value="dinheiro">Dinheiro</option>
                        </select>
                    </div>
                </div>

                <div className='mt-3 flex justify-end'>
                    <label className='font-bold'>Retirada? </label><br />
                    <select name="pagamento" id="pagamento">
                        <option value="0">--</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                    </select>
                </div>

                <div className="flex items-center justify-between mt-5 w-full">
                    <button onClick={handleCloseModalBtn}>Fechar</button>
                    <button className="bg-green-500 text-white px-4 py-1 rounded" onClick={checkoutBtn}>Finalizar pedido</button>
                </div>
            </div>
        </div>
    );
}
