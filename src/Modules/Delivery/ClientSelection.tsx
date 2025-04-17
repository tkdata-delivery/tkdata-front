import React, { useState } from 'react';
import { BreadcrumbNavigation } from './Clients/BreadcrumbNavigation';
import { ClientSection } from './Clients/ClientSection';
import { DeliveryPersonSection } from './Clients/DeliveryPersonSection';
import { ProductsSection } from './Clients/ProductsSection';
import { PaymentStatusSection } from './Clients/PaymentStatusSection';
import { TotalSection } from './Clients/TotalSection';
import { ActionsSection } from './Clients/ActionsSection';
import image from "./images/riz.png";
import PageTitle from '../../Components/PageTitle'; // ← assure-toi que le chemin est correct

const ConfigurationApp: React.FC = () => {
  const [products, setProducts] = useState([
    {
      id: "1",
      image: image,
      title: "Riz Basmati Premium",
      price: 25000,
      quantity: 1,
      total: 25000
    },
    {
      id: "2",
      image: image,
      title: "Riz Basmati Premium",
      price: 25000,
      quantity: 1,
      total: 25000
    }
  ]);

  const totalFinal = products.reduce((acc, product) => acc + product.total, 0);

  return (
    <>
      <PageTitle>Livraison</PageTitle>

      <div className="p-6 bg-white min-h-screen rounded-[5px]">
        <BreadcrumbNavigation paths={['Livraison', 'Sélectionner les produits', 'Configuration']} />
        
        <PageTitle>Configuration</PageTitle>

        <ClientSection />
        <DeliveryPersonSection />
        <ProductsSection products={products} setProducts={setProducts} />
        <PaymentStatusSection />
        <TotalSection total={`${totalFinal.toLocaleString()} cfa`} />
        <ActionsSection />
      </div>
    </>
  );
};

export default ConfigurationApp;
