import { Home } from './components/home'
import { Categoria } from './components/categoria'
import { DetalhesProduto } from './components/detalhesProduto'
import { Carrinho } from './components/carrinho'

export function App() {
    return (
        <>
            <Home />
            <Categoria />
            <DetalhesProduto/>
            <Carrinho />
        </>
    )
}