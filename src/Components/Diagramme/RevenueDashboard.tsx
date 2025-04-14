// RevenueDashboard.tsx - Composant principal qui rassemble tout
import React from 'react';
import { RevenueChart } from './RevenueChart';
import { PaymentStatsChart } from './PaymentStatsChart';

const RevenueDashboard: React.FC = () => {
  return (
    <div className="flex w-full gap-4">
      <RevenueChart />
      <PaymentStatsChart />
    </div>
  );
};

export default RevenueDashboard;