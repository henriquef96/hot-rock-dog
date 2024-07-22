export function ShowCarrinho() {
    function showModalCarrinho() {
        const cartModal = document.getElementById("cart-modal")!;
        cartModal.style.display = "flex";
    }

    return (
        <div id="carrinhoFixed" className='fixed bottom-0 show-carrinho w-full py-3 items-center justify-center flex'>
            <button id='cart-btn' className='flex items-center gap-2 text-white font-bold' onClick={showModalCarrinho}>(<span id='cart-count'>0</span>) Ver carrinho
                <i className='fa fa-cart-plus text-lg text-white'></i>
            </button>
        </div>
    )
}