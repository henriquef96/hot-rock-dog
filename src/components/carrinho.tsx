import React, { useState, useEffect, MouseEvent } from 'react';
import Logo from '../../public/logo.png';

interface CartProps {
    name: string;
    price: number;
    nomeAdc: string;
    observacao: string;
}

let cart: CartProps[] = [];

export function Menu(event: MouseEvent<HTMLButtonElement | HTMLSpanElement>) {
    const target = event.target as HTMLElement;

    const parentButton = target.closest(".add-to-cart-btn") || target.closest(".fa-plus");

    if (parentButton instanceof HTMLElement) {
        const name = parentButton.getAttribute("data-name");
        const price = parentButton.getAttribute("data-price");
        const nomeAdc = parentButton.getAttribute("data-nome-adc") || "";
        const observacao = parentButton.getAttribute("data-observacao") || "";

        if (price !== null && name !== null) {
            const priceFloat = parseFloat(price);
            addToCart(name, priceFloat, nomeAdc, observacao);
        }
    }
}

function addToCart(name: string, price: number, nomeAdc: string, observacao: string) {
    cart.push({ name, price, nomeAdc, observacao });
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
                        <span>Adicional: ${item.nomeAdc}</span>
                        <span><b>Obs: ${item.observacao}</b></span>
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

const DeliveryFee = ({ show, onFeeChange }: { show: boolean, onFeeChange: (fee: number) => void }) => {
    const [fee, setFee] = useState(0);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFee = Number(event.target.value);
        setFee(selectedFee);
        onFeeChange(selectedFee);
    };

    if (!show) return null;

    return (
        <div className='mt-5'>
            <label className='font-bold'>Taxa entrega:</label><br />
            <select id="taxa-entrega" onChange={handleSelectChange} className='m-1 border p-1 rounded my-1'>
                <option value="0">Selecione o seu bairro</option>
                <option value="4">Santa Maria</option>
                <option value="5">Green Maria</option>
                <option value="6">Estados</option>
                <option value="7">Santa Terezinha</option>
                <option value="8">Iguaçu 1</option>
                <option value="9">Iguaçu 2</option>
                <option value="8">Pioneiros</option>
                <option value="9">Eucaliptos</option>
                <option value="9">Greenfield</option>
                <option value="8">Nações</option>
                <option value="9">Nações 2</option>
                <option value="7">Gralha</option>
                <option value="7">Veneza</option>
            </select>
            <span>R$ {fee}.00</span>
        </div>
    );
};

export function Carrinho() {
    const [address, setAddress] = useState("");
    const [dateTime, setDateTime] = useState(new Date());
    const [showDeliveryFields, setShowDeliveryFields] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [pickup, setPickup] = useState("0");
    const [showInput, setShowInput] = useState(false);
    const [showInputTroco, setShowInputTroco] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [deliveryFee, setDeliveryFee] = useState(0); // Novo estado para a taxa de entrega

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

    const handleRetiradaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setPickup(value);
        setShowDeliveryFields(value === "nao");
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setPaymentMethod(value);
        setShowInput(value === "dinheiro");
        if (value !== "dinheiro") {
            setShowInputTroco(false);
        }
    };

    const handleTrocoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setShowInputTroco(value === "sim");
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
            const adicionais = item.nomeAdc ? `\nADICIONAL: ${item.nomeAdc}` : '';
            const observacao = item.observacao ? `\nOBSERVACAO: ${item.observacao}` : '';
            return `ITEM: ${item.name}${adicionais}${observacao}\nPREÇO: R$ ${item.price.toFixed(2)}\n\n\n`;
        }).join("");

        const total = cart.reduce((acc, item) => acc + item.price, 0);
        const pickupText = pickup === "sim" ? "RETIRADA: SIM" : "RETIRADA: NAO";
        const addressText = address ? `ENDEREÇO: ${address}` : '';
        const paymentText = paymentMethod ? `FORMA DE PAGAMENTO: ${paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}\n` : '';
        const deliveryFeeText = deliveryFee > 0 ? `TAXA DE ENTREGA: R$ ${deliveryFee}.00\n` : '';

        const message = encodeURIComponent(
            `CLIENTE: ${name}\nCONTATO: ${phone}\n\n\n${pickupText}\n${addressText}\n\n${cartItems}${deliveryFeeText}TOTAL: R$ ${total + deliveryFee}.00\n${paymentText}`
        );
        const phoneToSend = "41987479523";

        window.open(`https://wa.me/${phoneToSend}?text=${message}`);
    };

    return (
        <div id="cart-modal" className="cart-modal bg-black/60 w-full h-full fixed top-0 left-0 z-[99] items-center justify-center hidden" onClick={closeModal}>
            <div className="bg-white rounded-md cart min-w-[90%] max-h-[90%] md:min-w-[600px]">
                <div className='flex items-center justify-center'>
                    <img src={Logo} alt="" width="60" className='mb-2' />
                    <h2 className="text-center font-bold text-2xl">Hot Rock Dog</h2>
                </div>
                <h2 className="text-center font-bold text-lg">Meu carrinho</h2>
                <p className="text-center font-bold mb-10">{dateTime.toLocaleString()}</p>

                <div id="cart-items"></div>

                <p className="font-bold text-lg">Total: <span id="cart-total">R$ 0.00</span></p>

                <div className='inputs-info justify-between mt-5'>
                    <div className='input-nome'>
                        <p className='font-bold'>Nome: </p>
                        <input type="text" placeholder="Digite seu nome..." className="border rounded p-1 my-1" value={name} onChange={handleNameChange} />
                    </div>
                    <div>
                        <p className='font-bold'>Contato: </p>
                        <input type="number" placeholder="Digite seu contato..." className="border rounded p-1 my-1" value={phone} onChange={handlePhoneChange} />
                    </div>
                </div>

                <div id="retirada" className='mt-5'>
                    <label className='font-bold'>Entrega\Retirada</label><br />
                    <select className='m-1 border p-1 rounded my-1' onChange={handleRetiradaChange}>
                        <option value="0">--</option>
                        <option value="sim">Entrega</option>
                        <option value="nao">Retirada</option>
                    </select>
                </div>

                {showDeliveryFields && (
                    <div>
                        <p className="font-bold mt-5">Endereço:</p>
                        <input id='input-address' type="text" placeholder="Digite seu endereço completo..." className="w-full border p-1 rounded my-1" value={address} onChange={handleAddressChange} />
                        <DeliveryFee show={showDeliveryFields} onFeeChange={setDeliveryFee} />
                    </div>
                )}

                <div className='flex justify-between mt-5'>
                    <div id="pagamento">
                        <label className='font-bold'>Forma Pagamento</label><br />
                        <select className='m-1 border p-1 rounded my-1' onChange={handlePaymentChange}>
                            <option value="0">--</option>
                            <option value="credito">Crédito</option>
                            <option value="debito">Débito</option>
                            <option value="pix">PIX</option>
                            <option value="dinheiro">Dinheiro</option>
                        </select>
                    </div>

                    {showInput && (
                        <div id="troco">
                            <label className='font-bold'>Precisa de Troco?</label><br />
                            <select className='m-1 border p-1 rounded my-1' onChange={handleTrocoChange}>
                                <option value="0">--</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                            {showInputTroco && (
                                <input id='input-troco' className='m-1 border p-1 rounded my-1' type="text" placeholder='Ex: R$ 50' style={{ width: 80 }} />
                            )}
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between mt-5 w-full">
                    <button onClick={handleCloseModalBtn}>Fechar</button>
                    <button className="bg-green-500 text-white px-4 py-1 rounded" onClick={checkoutBtn}>Finalizar pedido</button>
                </div>
            </div>
        </div>
    );
}
