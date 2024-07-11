import React, { useState } from 'react';
import { cart } from './categoria';

export function Carrinho() {
    const [address, setAddress] = useState("");
    const [showAddressWarning, setShowAddressWarning] = useState(false);

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
        setShowAddressWarning(false);
    };

    const checkoutBtn = () => {
        if (address === "") {

            setShowAddressWarning(true);
        } else {

            const cartItems = cart.map((item) => {
                return `${item.name} | Qtd: (${item.qtd}) | Preço: R$ ${item.price}\n\n`;
            }).join("");

            const total = cart.reduce((acc, item) => acc + item.price * item.qtd, 0);
            const message = encodeURIComponent(`${cartItems}Total: R$ ${total.toFixed(2)}\nEndereço: ${address}`);
            const phone = "41987479523";

            window.open(`https://wa.me/${phone}?text=${message}`);
        }
    };

    return (
        <div
            id="cart-modal"
            className="bg-black/60 w-full h-full fixed top-0 left-0 z-[99] items-center justify-center hidden"
            onClick={closeModal}
        >
            <div className="bg-white p-5 rounded-md min-w-[90%] max-h-[90%] md:min-w-[600px] overflow-auto">
                <h2 className="text-center font-bold text-2xl mb-2">Meu carrinho</h2>

                <div id="cart-items"></div>

                <p className="font-bold">Total: <span id="cart-total">R$ 0.00</span></p>

                <p className="font-bold mt-5">Endereço de entrega:</p>

                <input
                    type="text"
                    placeholder="Digite seu endereço completo..."
                    className="w-full border p-1 rounded my-1 mb-5"
                    value={address}
                    onChange={handleAddressChange}
                />

                {showAddressWarning && (

                    <p className="text-red-500">
                        Digite seu endereço completo!
                    </p>
                )}

                <p className="font-bold">Observações:</p>

                <input
                    type="text"
                    placeholder="Digite seu endereço completo..."
                    className="w-full border p-1 rounded my-1 mb-10"
                    value={address}
                    onChange={handleAddressChange}
                />

                <div className='flex justify-between'>
                    <div>
                        <label htmlFor="">Precisa de Troco?</label><br />
                        <select name="troco" id="troco">
                            <option value="0">--</option>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>

                        </select>
                        <input className='text-center' style={{ width: '100px' }} type="text" placeholder='Valor' />
                    </div>

                    <div>
                        <label htmlFor="">Forma Pagamento</label><br />
                        <select name="pagamento" id="pagamento">
                            <option value="0">--</option>
                            <option value="credito">Crédito</option>
                            <option value="debito">Débito</option>
                            <option value="pix">PIX</option>
                            <option value="dinheiro">Dinheiro</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-5 w-full">
                    <button onClick={handleCloseModalBtn}>Fechar</button>
                    <button className="bg-green-500 text-white px-4 py-1 rounded" onClick={checkoutBtn}>Finalizar pedido</button>
                </div>
            </div>
        </div>
    );
}