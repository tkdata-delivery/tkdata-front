import { useState } from "react";
import { Input, Button, Checkbox, Card, Breadcrumb, Tabs } from "antd";
import { SearchOutlined, RightOutlined } from "@ant-design/icons";

export default function DeliveryProductSelection() {
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const categories = [
    { key: "1", label: "Tous les produits", count: 77 },
    { key: "2", label: "Épicerie", count: 10 },
    { key: "3", label: "Boissons", count: 30 },
    { key: "4", label: "Produits Ménagers", count: 9 },
    { key: "5", label: "Produits Laitiers", count: 0 },
    { key: "6", label: "Produits Surgelés", count: 16 },
    { key: "7", label: "Fruits", count: 12 },
  ];

  // Create 8 rice products for the grid
  const products = Array(8).fill().map((_, index) => ({
    id: index + 1,
    name: "Sac de riz Bijou de 25Kg",
    price: "25,000cfa",
    image: "/api/placeholder/120/120"
  }));

  const toggleProductSelection = (productId) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Custom tab items with counts
  const tabItems = categories.map(category => ({
    key: category.key,
    label: (
      <div className="px-2">
        <div>{category.label}</div>
        <div>{category.count} articles</div>
      </div>
    )
  }));

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Livraison</h1>
        
        <Card className="p-2">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { title: <span className="text-blue-600">Livraison</span> },
              { title: <span className="text-blue-600 font-medium">Sélectionner les produits</span> }
            ]}
            separator=">"
            className="mb-4"
          />
          
          {/* Main Title */}
          <h2 className="text-2xl font-medium mb-6">Sélectionner les produits de la livraison</h2>
          
          {/* Categories */}
          <div className="relative mb-6">
            <Tabs
              items={tabItems}
              activeKey={selectedCategory}
              onChange={setSelectedCategory}
              className="w-full"
              tabBarStyle={{ backgroundColor: "#f3f4f6" }}
              tabBarGutter={16}
              size="large"
            />
            <Button 
              type="default" 
              shape="circle" 
              icon={<RightOutlined />} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 shadow"
            />
          </div>
          
          {/* Search and Continue */}
          <div className="flex justify-between mb-6">
            <Input.Search
              placeholder="Rechercher"
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              style={{ width: 240 }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              enterButtonStyle={{ backgroundColor: "#9333ea", borderColor: "#9333ea" }}
            />
            <Button size="large" className="bg-gray-200 text-gray-600">
              Continuer
            </Button>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <Card 
                key={product.id} 
                bordered={true}
                bodyStyle={{ padding: 16 }}
                className="relative"
              >
                <div className="absolute top-4 left-4 z-10">
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleProductSelection(product.id)}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-pink-100 rounded-lg p-2 mb-2 w-full flex justify-center">
                    <img src={product.image} alt={product.name} className="w-24 h-24 object-contain" />
                  </div>
                  <div className="text-center w-full">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-right font-bold mt-2">{product.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}