import { useState } from 'react';

import Pastel_1 from '../../../assets/img/pasteis/01-carne-queijo.png';
import Pastel_2 from '../../../assets/img/pasteis/02-especial.png';
import Pastel_3 from '../../../assets/img/pasteis/03-frango-cheddar.png';
import Pastel_4 from '../../../assets/img/pasteis/04-queijo-goiabada.png';
import Pastel_5 from '../../../assets/img/pasteis/05-queijo.png';
import Pastel_6 from '../../../assets/img/pasteis/06-frango-catupiry.png';
import Pastel_7 from '../../../assets/img/pasteis/07-calabresa.png';
import Pastel_8 from '../../../assets/img/pasteis/08-frango.png';
import Pastel_9 from '../../../assets/img/pasteis/09-pizza.png';
import Pastel_10 from '../../../assets/img/pasteis/10-carne.png';
import Pastel_11 from '../../../assets/img/pasteis/11-bacon-queijo.png';
import Pastel_12 from '../../../assets/img/pasteis/12-chocolate-branco.png';
import Pastel_13 from '../../../assets/img/pasteis/13-chocolate-preto.png';
import Pastel_14 from '../../../assets/img/pasteis/14-dois-amores.png';
import Pastel_15 from '../../../assets/img/pasteis/15-paçoca.png';

import { MenuItem } from '../../../components/itensMenu';
import { Menu } from '../../../components/carrinho';
import { DetalhesMenu } from '../../../components/detalhesMenu';

export function Pasteis() {
    const [selectedItem, setSelectedItem] = useState<{ nome: string; preco: number } | null>(null);

    const handleMenuItemClick = (nome: string, preco: number) => {
        setSelectedItem({ nome, preco });
    };

    return (
        <div id='menu' onClick={Menu}>
            <div className='items-center justify-center flex flex-col mb-10'>
                <h2 className='mt-5 text-4xl font-bold text-center'>PASTEIS</h2>
                <p className='mt-5 mb-5 text-gray text-center text-sm'>Clique na imagem para adicionais.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16' style={{ marginTop: '50px' }}>

                    <MenuItem
                        type="comida"
                        src={Pastel_10}
                        alt='Pastel Carne'
                        nome="Pastel Carne"
                        preco='12,00'
                        data_name='Pastel Carne'
                        data_price={12.00}
                        descricao="Delicioso pastel crocante sabor carne tamanho 22cmx10cm"
                        onClick={handleMenuItemClick}
                    />

                    <MenuItem
                        type="comida"
                        src={Pastel_1}
                        alt='Pastel Carne Queijo'
                        nome="Pastel Carne Queijo"
                        preco='12,00'
                        data_name='Pastel Carne Queijo'
                        data_price={12.00}
                        descricao="Delicioso pastel sabor carne com queijo tamanho 22cmx10cm"
                        onClick={handleMenuItemClick}
                    />

                    <MenuItem
                        type="comida"
                        src={Pastel_5}
                        alt='Pastel Queijo'
                        nome="Pastel Queijo"
                        preco='12,00'
                        data_name='Pastel Queijo'
                        data_price={12.00}
                        descricao="Delicioso pastel crocante sabor queijo tamanho 22cmx10cm"
                        onClick={handleMenuItemClick}
                    />


                    <MenuItem
                        type="comida"
                        src={Pastel_7}
                        alt='Pastel Calabresa'
                        nome="Pastel Calabresa"
                        preco='12,00'
                        data_name='Pastel Calabresa'
                        data_price={12.00}
                        descricao="Delicioso pastel crocante sabor calabresa tamanho 22cmx10cm"
                        onClick={handleMenuItemClick}
                    />

                    <MenuItem
                        type="comida"
                        src={Pastel_8}
                        alt='Pastel Frango'
                        nome="Pastel Frango"
                        preco='12,00'
                        data_name='Pastel Frango'
                        data_price={12.00}
                        descricao="Delicioso pastel crocante sabor frango tamanho 22cmx10cm"
                        onClick={handleMenuItemClick}
                    />

                    <MenuItem
                        type="comida"
                        src={Pastel_3}
                        alt='Pastel Frango Cheddar'
                        nome="Pastel Frango Cheddar"
                        preco='13,00'
                        data_name='Pastel Frango Cheddar'
                        data_price={13.00}
                        descricao="Delicioso pastel de frango com cheddar tamanho 22cmx10cm"
                        onClick={handleMenuItemClick}
                    />

                    <MenuItem
                        type="comida"
                        src={Pastel_6}
                        alt='Pastel Frango Catupiry'
                        nome="Pastel Frango Catupiry"
                        preco='13,00'
                        data_name='Pastel Frango Catupiry'
                        data_price={13.00}
                        descricao="Delicioso pastel sabor frango com Catupiry tamanho 22cmx10cm"
                        onClick={handleMenuItemClick}
                    />

                    <MenuItem
                        type="comida"
                        src={Pastel_9}
                        alt='Pastel Pizza'
                        nome="Pastel Pizza"
                        preco='13,00'
                        data_name='Pastel Pizza'
                        data_price={13.00}
                        descricao="Delicioso pastel crocante sabor pizza tamanho 22cmx10cm"
                        onClick={handleMenuItemClick}
                    />


                    <MenuItem
                        type="comida"
                        src={Pastel_11}
                        alt='Pastel Bacon Queijo'
                        nome="Pastel Bacon Queijo"
                        preco='14,00'
                        data_name='Pastel Bacon Queijo'
                        data_price={14.00}
                        descricao="Delicioso pastel sabor bacon com queijo tamanho 22cmx10cm"
                        onClick={handleMenuItemClick}
                    />

                    <MenuItem
                        type="comida"
                        src={Pastel_4}
                        alt='Pastel Queijo e Goiabada'
                        nome="Pastel Queijo Goiabada"
                        preco='14,00'
                        data_name='Pastel Queijo Goiabada'
                        data_price={14.00}
                        descricao="Delicioso pastel sabor queijo com goiabada tamanho 22cmx10cm"
                        onClick={handleMenuItemClick}
                    />

                    <MenuItem
                        type="comida"
                        src={Pastel_2}
                        alt='Pastel Especial'
                        nome="Pastel Especial"
                        preco='17,00'
                        data_name='Pastel Especial'
                        data_price={17.00}
                        descricao="Pastel especial 22cmx10cm, carne, queijo, azeitona e ovo"
                        onClick={handleMenuItemClick}
                    />

                    <MenuItem
                        type="comida"
                        src={Pastel_12}
                        alt='Pastel Chocolate Branco'
                        nome="Pastel Chocolate Branco"
                        preco='14,00'
                        data_name='Pastel Chocolate Branco'
                        data_price={14.00}
                        descricao="Delicioso pastel sabor chocolate branco tamanho 22cmx10xcm"
                        onClick={handleMenuItemClick}
                    />

                    <MenuItem
                        type="comida"
                        src={Pastel_13}
                        alt='Pastel Chocolate Preto'
                        nome="Pastel Chocolate Preto"
                        preco='14,00'
                        data_name='Pastel Chocolate Preto'
                        data_price={14.00}
                        descricao="Delicioso pastel sabor chocolate preto tamanho 22cmx10xcm"
                        onClick={handleMenuItemClick}
                    />

                    <MenuItem
                        type="comida"
                        src={Pastel_14}
                        alt='Pastel Dois Amores'
                        nome="Pastel Dois Amores"
                        preco='14,00'
                        data_name='Pastel Dois Amores'
                        data_price={14.00}
                        descricao="Delicioso pastel sabor chocolate branco e preto 22cmx10xcm"
                        onClick={handleMenuItemClick}
                    />

                    <MenuItem
                        type="comida"
                        src={Pastel_15}
                        alt='Pastel Paçoca'
                        nome="Pastel Paçoca"
                        preco='14,00'
                        data_name='Pastel Paçoca'
                        data_price={14.00}
                        descricao="Delicioso pastel crcante sabor paçoca 22cmx10xcm"
                        onClick={handleMenuItemClick}
                    />
                </div>
            </div>

            {selectedItem && <DetalhesMenu type='semAdicional' nome={selectedItem.nome} preco={selectedItem.preco} />}
        </div>
    );
}
