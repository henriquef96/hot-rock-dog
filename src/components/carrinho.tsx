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

            let adicionaisText = item.nomeAdc ? `<span>Adicional: ${item.nomeAdc}</span>` : '';
            let observacaoText = item.observacao ? `<span><b>Obs: ${item.observacao}</b></span>` : '';

            cartItemElement.innerHTML = `
                <div class="flex items-center justify-between">
                    <div class="flex flex-col">
                        <span>${item.name}</span>
                        ${adicionaisText}
                        ${observacaoText}
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

const DeliveryFee = ({ show, onFeeChange }: { show: boolean, onFeeChange: (fee: number, feeText: string) => void }) => {
    const [fee, setFee] = useState(0);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFee = Number(event.target.value);
        const selectedFeeText = event.target.options[event.target.selectedIndex].text;
        setFee(selectedFee);
        onFeeChange(selectedFee, selectedFeeText);
    };

    if (!show) return null;

    return (
        <div className='mt-5'>
            <label className='font-bold'>Taxa entrega:</label><br />
            <select id="taxa-entrega" onChange={handleSelectChange} className='m-1 border p-1 rounded my-1'>
                <option value="0">Selecione o bairro</option>
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
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [deliveryFeeText, setDeliveryFeeText] = useState("");
    const [trocoAmount, setTrocoAmount] = useState(0);

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

    const handleFeeChange = (fee: number, feeText: string) => {
        setDeliveryFee(fee);
        setDeliveryFeeText(feeText);
    };

    const handleTrocoAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTrocoAmount(Number(event.target.value));
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

        // Formatação dos itens do carrinho
        const cartItems = cart.map((item) => {
            const adicionais = item.nomeAdc ? `\n*Adicional:* ${item.nomeAdc}` : "";
            const observacao = item.observacao ? `\n*Observacao*: ${item.observacao}` : "";
            return `${item.name}${adicionais}${observacao}\nR$ ${item.price.toFixed(2)}`;
        });

        const formattedItems = cartItems.join('\n\n');

        // Calcula o total do pedido
        const total = cart.reduce((acc, item) => acc + item.price, deliveryFee);

        // Formata as informações
        const pickupText = pickup === "sim" ? "Retirar no Local" : "Preciso de Entrega";
        const trocoText = showInputTroco ? `\n*Preciso de troco para:* R$ ${trocoAmount}.00` : '';
        const deliveryFeeTextFormatted = deliveryFee > 0 ? `\*Bairro:* ${deliveryFeeText}\n*Taxa de Entrega:* R$ ${deliveryFee}.00` : '';

        // Mensagem do WhatsApp
        const message = `*RESUMO DO PEDIDO*\n\n` +
            `*Nome:* ${name}\n` +
            `*Contato:* ${phone}\n\n` +

            `*${pickupText}*\n` +
            `${deliveryFeeTextFormatted}\n` +
            `${address ? `*Endereço de entrega:* ${address}\n\n` : ''}` +
            `*Total:* R$ ${total.toFixed(2)}\n` +
            `*Forma de pagamento:* ${paymentMethod}${trocoText}\n\n` +
            `*Data e Hora do pedido:* ${dateTime.toLocaleString()}\n\n` +
            `${formattedItems}\n`

        // Codifica a mensagem e abre o WhatsApp
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/41987479523?text=${encodedMessage}`);
    };

    return (
        <div id="cart-modal" className="cart-modal bg-black/60 w-full h-full fixed top-0 left-0 z-[99] items-center justify-center hidden" onClick={closeModal}>
            <div className="bg-white rounded-md cart min-w-[90%] max-h-[90%] md:min-w-[600px]">
                <div className="flex justify-center items-center mb-10">
                    <div className='flex items-center'>
                        <img src={Logo} alt="Logo" style={{ width: '50px', marginBlockStart: '15px' }} />
                        <h2 className="text-2xl font-bold mt-5">Seu Pedido</h2>
                    </div>
                </div>
                <div id="cart-items"></div>
                <div className="text-lg">
                    <strong className=''>Total: </strong><span id="cart-total">R$ 0.00</span>
                </div>
                <div className="mt-4">
                    <label className="font-bold">Nome:</label><br />
                    <input type="text" id="nome" value={name} onChange={handleNameChange} className="m-1 border p-1 rounded w-full" />
                </div>
                <div className="mt-4">
                    <label className="font-bold">Telefone:</label><br />
                    <input type="number" id="telefone" value={phone} onChange={handlePhoneChange} className="m-1 border p-1 rounded w-full" />
                </div>
                <div className="mt-4">
                    <label className="font-bold">Retirada | Entrega</label><br />
                    <select id="retirada" value={pickup} onChange={handleRetiradaChange} className="m-1 border p-1 rounded w-full">
                        <option value="0">--</option>
                        <option value="sim">Retirar no Local</option>
                        <option value="nao">Preciso de Entrega</option>
                    </select>
                </div>
                {showDeliveryFields && (
                    <>
                        <div className="mt-4">
                            <label className="font-bold">Endereço:</label><br />
                            <input type="text" id="endereco" value={address} onChange={handleAddressChange} className="m-1 border p-1 rounded w-full" />
                        </div>
                        <DeliveryFee show={true} onFeeChange={handleFeeChange} />
                    </>
                )}
                <div className="mt-4">
                    <label className="font-bold">Forma de pagamento:</label><br />
                    <select id="pagamento" value={paymentMethod} onChange={handlePaymentChange} className="m-1 border p-1 rounded w-full">
                        <option value="0">--</option>
                        <option value="Credito">Crédito</option>
                        <option value="Debito">Débito</option>
                        <option value="PIX">PIX</option>
                        <option value="dinheiro">Dinheiro</option>
                    </select>
                </div>
                {showInput && (
                    <div className="mt-4">
                        <label className="font-bold">Precisa de troco?</label><br />
                        <select id="precisa-troco" value={showInputTroco ? "sim" : "nao"} onChange={handleTrocoChange} className="m-1 border p-1 rounded w-full">
                            <option value="nao">Não</option>
                            <option value="sim">Sim</option>
                        </select>
                    </div>
                )}
                {showInputTroco && (
                    <div id="troco" className="mt-4">
                        <label className="font-bold">Troco para quanto?</label><br />
                        <input type="number" id="troco-amount" value={trocoAmount} onChange={handleTrocoAmountChange} className="m-1 border p-1 rounded w-full" />
                    </div>
                )}
                <div className="mt-5 flex justify-between">
                    <button id="checkout-btn" onClick={handleCloseModalBtn}>Fechar</button>
                    <button id="checkout-btn" onClick={checkoutBtn} className="bg-green-500 text-white btn-fnl rounded">Finalizar Pedido</button>
                </div>
            </div>
        </div>
    );
}

export default Carrinho;
