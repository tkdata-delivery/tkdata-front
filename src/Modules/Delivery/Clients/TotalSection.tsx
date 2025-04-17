import React from 'react';

type TotalSectionProps = {
  total: string;
};

export const TotalSection: React.FC<TotalSectionProps> = ({ total }) => {
  return (
    <div className="flex justify-center items-center mb-6">
      <div className="text-lg font-medium mr-2">Total:</div>
      <div className="text-xl font-bold text-purple-500">{total}</div>
    </div>
  );
};