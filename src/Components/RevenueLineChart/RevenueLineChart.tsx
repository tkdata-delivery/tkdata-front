import { useState } from 'react';
import { Card, Typography } from 'antd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { CaretUpOutlined } from '@ant-design/icons';
import CustomTooltip from './CustomTooltip';

const { Title, Text } = Typography;

const data = [
  { name: 'Lundi', value: 10000 },
  { name: 'Mardi', value: 48000 },
  { name: 'Mercredi', value: 62000 },
  { name: 'Jeudi', value: 53000 },
  { name: 'Vendredi', value: 55642 },
  { name: 'Samedi', value: 22000 },
  { name: 'Dimanche', value: 68000 },
];

const RevenueLineChart = ({
  title = 'Revenue',
  totalRevenue = '91,642 cfa',
  growthPercentage = '+3.4%',
  growthLabel = 'from last period',
  timeRanges = ['Jour', 'Semaine', 'Mois', 'Année'],
  defaultTimeRange = 'Semaine',
  chartData = data,
  className = '',
}) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState(defaultTimeRange);

  const handleTimeRangeChange = (range) => {
    setSelectedTimeRange(range);
  };

  const highlightedDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const highlightIndexes = chartData
    .map((item, index) => (highlightedDays.includes(item.name) ? index : -1))
    .filter(index => index !== -1);

  return (
    <Card
      className={`shadow-sm ${className}`}
      bodyStyle={{ padding: '20px' }}
      style={{ width: 'calc(100% + 40px)', marginLeft: '-20px' }} // <-- élargissement vers la gauche
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="flex items-center mb-1">
            <Text className="text-gray-500">{title}</Text>
            <span className="ml-2 text-gray-400">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </span>
          </div>
          <Title level={3} className="m-0 font-bold">{totalRevenue}</Title>
          <div className="flex items-center mt-1">
            <CaretUpOutlined className="text-green-500" />
            <Text className="text-green-500 mr-1">{growthPercentage}</Text>
            <Text className="text-gray-400 text-sm">{growthLabel}</Text>
          </div>
        </div>

        <div className="flex gap-3">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => handleTimeRangeChange(range)}
              className={`transition duration-200 ${
                selectedTimeRange === range
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-500'
              } hover:text-purple-600`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorRevenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}k`}
              domain={[0, 100000]}
              ticks={[0, 20000, 50000, 70000, 100000]}
            />
            <Tooltip content={(props) => <CustomTooltip {...props} />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8B5CF6"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8, fill: '#8B5CF6', stroke: '#fff', strokeWidth: 2 }}
              fill="url(#colorRevenueGradient)"
            />
            {highlightIndexes.map(index => (
              <Line
                key={index}
                data={[chartData[index]]}
                dataKey="value"
                stroke="transparent"
                dot={{
                  r: 6,
                  fill: '#8B5CF6',
                  stroke: '#fff',
                  strokeWidth: 2,
                }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default RevenueLineChart;
