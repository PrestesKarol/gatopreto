import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css'

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
    isConfigurable: boolean;
};

const ProductDetail = ({ products }: { products: Product[] }) => {
    const { id } = useParams();

    // Verifique se `id` não é `undefined` antes de usá-lo
    if (id === undefined) {
        return <div>ID do produto não fornecido.</div>;
    }

    const productId = parseInt(id, 10);
    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }
    return (
        <div className="container">
            <div className="left-column">
                <h2>Conheça mais sobre o produto:</h2>
                <img src={product.pictureUrl} alt="" />
            </div>

            <div className="right-column">
                <div className="product-description">
                    <span>Doces</span>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>

                <div className="product-configuration">
                    {product.isConfigurable && (
                        <div className="cable-config">
                            <span>Quantidade por embalagem:</span>
                            <div className="cable-choose">
                                <button>6 Unidades</button>
                                <button>8 Unidades</button>
                                <button>12 Unidades</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="product-price">
                    <span>${product.price.toFixed(2)}</span>
                    <a href="#" className="cart-btn">
                        Adicionar no Carrinho
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
