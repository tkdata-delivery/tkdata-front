// SalesZoneChart.jsx

// Importation des dépendances React, Ant Design et Recharts
import React, { useState } from 'react';
import { Card, Typography, Select } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const { Title } = Typography;
const { Option } = Select;

/**
 * Liste des zones géographiques disponibles pour filtrer les données.
 * Chaque zone a une valeur unique et un libellé lisible.
 */
const zones = [
  { value: 'douala', label: 'Douala' },
  { value: 'yaounde', label: 'Yaoundé' },
  { value: 'bafoussam', label: 'Bafoussam' }
];

/**
 * Données par défaut à afficher sur le graphique.
 * Chaque entrée représente une zone locale avec un montant total de ventes.
 */
const defaultData = [
  { name: 'Bonaberi', value: 180000 },
  { name: 'Yassa', value: 150000 },
  { name: 'Makepe', value: 152000 },
  { name: 'Bonamoussadi', value: 135000 },
  { name: 'Ndokotti', value: 105000 },
];

/**
 * Formateur de l’axe Y pour afficher les valeurs avec des abréviations lisibles.
 * Exemple : 50000 => "50K"
 * @param {number} value - La valeur numérique à formater
 */
const formatYAxis = (value) => {
  if (value === 0) return '0';
  if (value === 50000) return '50K';
  if (value === 100000) return '100K';
  if (value === 150000) return '150K';
  if (value === 200000) return '200K';
  return `${value / 1000}K`;
};

/**
 * Composant `SalesZoneChart`
 * 
 * Ce composant affiche un graphique en barres représentant les ventes dans
 * différentes sous-zones d’une ville donnée. L'utilisateur peut choisir la zone via un menu déroulant.
 * 
 * Props :
 * - title : Titre du graphique (par défaut : "Zone de ventes maximales")
 * - data : Données à afficher dans le graphique (par défaut : `defaultData`)
 * - defaultZone : Zone sélectionnée par défaut dans le menu déroulant
 * - className : Classe(s) CSS personnalisée(s) pour styliser la carte
 */
const SalesZoneChart = ({
  title = "Zone de ventes maximales",
  data = defaultData,
  defaultZone = 'douala',
  className = "",
}) => {
  // État local pour suivre la zone sélectionnée dans le menu
  const [selectedZone, setSelectedZone] = useState(defaultZone);

  // Fonction appelée lorsqu'une nouvelle zone est sélectionnée
  const handleZoneChange = (value) => {
    setSelectedZone(value);
    // On pourrait ici charger dynamiquement d'autres données en fonction de la zone
  };

  return (
    <Card className={`shadow-sm ${className}`} bodyStyle={{ padding: '20px' }}>
      {/* En-tête de la carte contenant le titre et le menu déroulant de sélection */}
      <div className="flex justify-between items-center mb-6">
        <Title level={4} className="m-0">{title}</Title>
        <Select 
          value={selectedZone} 
          onChange={handleZoneChange}
          className="w-32"
          suffixIcon={<span className="text-gray-400">▼</span>}
        >
          {zones.map(zone => (
            <Option key={zone.value} value={zone.value}>{zone.label}</Option>
          ))}
        </Select>
      </div>

      {/* Conteneur du graphique */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 20 }}
            barSize={28}
          >
            {/* Grille horizontale uniquement pour plus de lisibilité */}
            <CartesianGrid vertical={false} stroke="#f0f0f0" strokeDasharray="3 3" />

            {/* Axe horizontal : noms des sous-zones */}
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 11 }}
              dy={10}
            />

            {/* Axe vertical : montants avec format personnalisé */}
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 11 }}
              tickFormatter={formatYAxis}
            />

            {/* Barres de données : couleur principale violet, coins arrondis en haut */}
            <Bar 
              dataKey="value" 
              fill="#8B5CF6" 
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default SalesZoneChart;
