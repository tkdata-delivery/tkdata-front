import React from 'react';
import { PaymentStats } from './types';

export const PaymentStatsChart: React.FC = () => {
  const paymentStats: PaymentStats[] = [
    { label: "Payé Entièrement", value: 65, color: "bg-purple-400" },
    { label: "Pas totalement payé", value: 30, color: "bg-purple-200" },
    { label: "Non payé", value: 5, color: "bg-red-100" }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full md:w-1/3">
      <h2 className="text-lg font-medium mb-6">Statistiques de paiement</h2>

      <div className="relative h-64 flex items-center justify-center">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {paymentStats.map((stat, index) => {
              const previousValues = paymentStats
                .slice(0, index)
                .reduce((sum, item) => sum + item.value, 0);

              const startAngle = (previousValues / 100) * 360;
              const endAngle = ((previousValues + stat.value) / 100) * 360;

              const x1 = 50 + 35 * Math.cos((startAngle - 90) * (Math.PI / 180));
              const y1 = 50 + 35 * Math.sin((startAngle - 90) * (Math.PI / 180));
              const x2 = 50 + 35 * Math.cos((endAngle - 90) * (Math.PI / 180));
              const y2 = 50 + 35 * Math.sin((endAngle - 90) * (Math.PI / 180));
              const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

              const d = `
                M 50 50
                L ${x1} ${y1}
                A 35 35 0 ${largeArcFlag} 1 ${x2} ${y2}
                Z
              `;

              const labelAngle = startAngle + (endAngle - startAngle) / 2;
              const labelX = 50 + 28 * Math.cos((labelAngle - 90) * (Math.PI / 180));
              const labelY = 50 + 28 * Math.sin((labelAngle - 90) * (Math.PI / 180));

              const fillColor =
                stat.color === "bg-purple-400" ? "#c4b5fd" :
                stat.color === "bg-purple-200" ? "#ddd6fe" :
                "#fee2e2";

              return (
                <g key={index}>
                  <path d={d} fill={fillColor} />
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="6"
                    fontWeight="bold"
                    fill="#4b5563"
                  >
                    {`${stat.value}%`}
                  </text>
                </g>
              );
            })}

            {/* Cercle central pour créer l'effet donut */}
            <circle cx="50" cy="50" r="20" fill="white" />
          </svg>
        </div>
      </div>

      {/* Légende */}
      <div className="mt-6 space-y-2 text-sm">
        {paymentStats.map((stat, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-3 h-3 rounded-full mr-2 ${
                stat.color === "bg-purple-400" ? "bg-purple-400" :
                stat.color === "bg-purple-200" ? "bg-purple-200" :
                "bg-red-100"
              }`}
            ></div>
            <span className="text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
