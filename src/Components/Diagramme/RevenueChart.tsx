import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { DataPoint } from './types';
import { CustomTooltip } from './CustomTooltip';

export const RevenueChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Jour' | 'Semaine' | 'Mois' | 'Année'>('Semaine');
  
  // Données du graphique
  const data: DataPoint[] = [
    { day: 'Lundi', value: 5000 },
    { day: 'Mardi', value: 45000 },
    { day: 'Mercredi', value: 60000 },
    { day: 'Jeudi', value: 55000 },
    { day: 'Vendredi', value: 65000 },
    { day: 'Samedi', value: 55000 },
    { day: 'Dimanche', value: 90000 },
  ];

  return (
    // Ici, on augmente la largeur du container en passant de w-1/2 à w-full md:w-3/4
    <div className="bg-white p-6 rounded-lg shadow-sm w-full md:w-3/4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-gray-500 text-sm">Revenue</h2>
          <div className="flex items-baseline">
            <p className="text-3xl font-semibold">91,642 cfa</p>
          </div>
          <p className="text-green-500 text-sm">+3,4% from last period</p>
        </div>
        <div className="flex space-x-4">
          {(['Jour', 'Semaine', 'Mois', 'Année'] as const).map((tab) => (
            <button
              key={tab}
              className={`px-2 py-1 text-sm ${
                activeTab === tab ? 'text-purple-600 font-medium' : 'text-gray-400'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => (value === 0 ? '0' : `${value / 1000}k`)}
              domain={[0, 100000]}
              ticks={[0, 20000, 50000, 70000, 100000]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#8884d8" 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8, stroke: "#8884d8", strokeWidth: 2, fill: "white" }}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
