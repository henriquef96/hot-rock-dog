import { Home } from './components/home'
import { Categoria } from './components/categorias'
import { Carrinho } from './components/carrinho'
import { ShowCarrinho } from './components/showCarrinho'

export function App() {
    return (
        <>
            <Home />
            <Categoria />
            <ShowCarrinho />
            <Carrinho />
        </>
    )
}