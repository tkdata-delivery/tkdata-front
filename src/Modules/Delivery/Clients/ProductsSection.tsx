import React from 'react';
import { ProductCard } from './ProductCard';

type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
};

type ProductsSectionProps = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const ProductsSection: React.FC<ProductsSectionProps> = ({ products, setProducts }) => {
  const updateProduct = (id: string, quantity: number) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? {
              ...product,
              quantity,
              total: product.price * quantity,
            }
          : product
      )
    );
  };

  const handleIncrement = (id: string) => {
    const product = products.find(p => p.id === id);
    if (product) {
      updateProduct(id, product.quantity + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = products.find(p => p.id === id);
    if (product && product.quantity > 1) {
      updateProduct(id, product.quantity - 1);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          total={product.total}
          onIncrement={() => handleIncrement(product.id)}
          onDecrement={() => handleDecrement(product.id)}
        />
      ))}
    </div>
  );
};
