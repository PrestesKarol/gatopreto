import React, { useState, useEffect } from 'react';
import Item from '../item';
import imagem1 from './itemListImagens/cookies.png';
import imagem2 from './itemListImagens/cupcake_baunilha.png';
import imagem3 from './itemListImagens/macarrons.png';
import imagem4 from './itemListImagens/cupcake_chocolate.png';
import './style.css'

type ItemType = {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
};

const ItemList = () => {
    const [items, setItems] = useState<ItemType[]>([]); // Inicialize com um array vazio de ItemType

    useEffect(() => {
        const fetchItems = new Promise<ItemType[]>((resolve) => {
            setTimeout(() => {
                const mockData = [
                    {
                        id: 1,
                        title: 'Cookies - Bolinha de pelo',
                        description: 'Cream cheese, açúcar demerara, ovo, cacau, farinha de aveia, chocolate amargo nobre, leite condensado, creme de leite.',
                        price: 13.99,
                        pictureUrl: imagem1,
                    },
                    {
                        id: 2,
                        title: 'CupCake - Gatinho Feliz',
                        description: 'Feito com mix de farinhas sem glúten, massa de baunilha e coberto com um delicioso chantily.',
                        price: 24.99,
                        pictureUrl: imagem2,
                    },
                    {
                        id: 3,
                        title: 'Macarons - Arco-Íris',
                        description: 'Feitos com maestria, esses docinhos são uma celebração de aromas e texturas que se combinam em uma experiência única.',
                        price: 29.99,
                        pictureUrl: imagem3,
                    },
                    {
                        id: 4,
                        title: 'Cupcake - Gatinho Dorminhoco',
                        description: 'Feito com mix de farinhas sem glúten, massa de chocolate 100% cacau e coberto com um delicioso brigadeiro.',
                        price: 24.99,
                        pictureUrl: imagem4,
                    },
                ];
                resolve(mockData);
            }, 2000);
        });

        fetchItems.then((data) => setItems(data));
    }, []);

    return (
        <div className="item-list">
            {items.map((item) => (
                <div key={item.id} className="item-card">
                    <div className="item">
                        <Item item={item} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
