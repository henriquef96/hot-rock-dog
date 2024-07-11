import { Home } from './components/home'
import { Categoria } from './components/categoria'
import { Carrinho } from './components/carrinho'
import { ShowCarrinho } from './components/show_carrinho'

export function App() {
    return (
        <>
            <Home />
            <Categoria />
            <Carrinho />
            <ShowCarrinho />
        </>
    )
}