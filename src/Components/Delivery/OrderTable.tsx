import React from 'react';
import { Order } from './types';
import { OrderTableHead } from './OrderTableHead';
import { OrderTableRow } from './OrderTableRow';

interface OrderTableProps {
  orders: Order[];
  activeMenu: string | null;
  onToggleMenu: (orderId: string) => void;
  onAction: (action: string, orderId: string) => void;
}

export const OrderTable: React.FC<OrderTableProps> = ({
  orders,
  activeMenu,
  onToggleMenu,
  onAction
}) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <table className="min-w-full flex flex-col">
      <OrderTableHead />
      <tbody className="bg-white divide-y divide-gray-200 flex flex-col w-full">
        {orders.map((order) => (
          <OrderTableRow
            key={order.id}
            order={order}
            activeMenu={activeMenu}
            onToggleMenu={onToggleMenu}
            onAction={onAction}
          />
        ))}
      </tbody>
    </table>
  </div>
);