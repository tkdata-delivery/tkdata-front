import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

// Définition du type DataPoint
interface DataPoint {
  day: string;
  value: number;
}

// Définition du type des props du Tooltip
const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as DataPoint;
    return (
      <div className="bg-white p-2 shadow-md rounded border border-gray-100">
        <p className="font-medium">{data.day}</p>
        <p className="text-purple-600 font-semibold">
          {data.value.toLocaleString()} cfa
        </p>
      </div>
    );
  }
  return null;
};

export const RevenueChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Jour' | 'Semaine' | 'Mois' | 'Année'>('Semaine');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const data: DataPoint[] = [
    { day: 'Lun', value: 5000 },
    { day: 'Mar', value: 45000 },
    { day: 'Mer', value: 60000 },
    { day: 'Jeu', value: 55000 },
    { day: 'Ven', value: 65000 },
    { day: 'Sam', value: 55000 },
    { day: 'Dim', value: 90000 },
  ];

  const fullData: DataPoint[] = [
    { day: 'Lundi', value: 5000 },
    { day: 'Mardi', value: 45000 },
    { day: 'Mercredi', value: 60000 },
    { day: 'Jeudi', value: 55000 },
    { day: 'Vendredi', value: 65000 },
    { day: 'Samedi', value: 55000 },
    { day: 'Dimanche', value: 90000 },
  ];

  const chartData = screenWidth < 640 ? data : fullData;

  return (
    <div className="bg-white p-3 sm:p-6 rounded-lg shadow-sm w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-gray-500 text-sm">Revenue</h2>
          <div className="flex items-baseline">
            <p className="text-xl sm:text-3xl font-semibold">91,642 cfa</p>
          </div>
          <p className="text-green-500 text-xs sm:text-sm">+3,4% from last period</p>
        </div>
        <div className="flex flex-wrap space-x-2 sm:space-x-4 w-full sm:w-auto">
          {(['Jour', 'Semaine', 'Mois', 'Année'] as const).map((tab) => (
            <button
              key={tab}
              className={`px-2 py-1 text-xs sm:text-sm ${
                activeTab === tab ? 'text-purple-600 font-medium' : 'text-gray-400'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-48 sm:h-64 md:h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={chartData} 
            margin={{ 
              top: 20, 
              right: screenWidth < 640 ? 10 : 30, 
              left: screenWidth < 640 ? 0 : 20, 
              bottom: 10 
            }}
          >
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
              dy={5}
              tick={{ fontSize: screenWidth < 640 ? 10 : 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => (value === 0 ? '0' : `${value / 1000}k`)}
              domain={[0, 100000]}
              ticks={screenWidth < 640 ? [0, 50000, 100000] : [0, 20000, 50000, 70000, 100000]}
              tick={{ fontSize: screenWidth < 640 ? 10 : 12 }}
              width={screenWidth < 640 ? 30 : 40}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#8884d8" 
              strokeWidth={2}
              dot={false}
              activeDot={{ r: screenWidth < 640 ? 5 : 8, stroke: "#8884d8", strokeWidth: 2, fill: "white" }}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
