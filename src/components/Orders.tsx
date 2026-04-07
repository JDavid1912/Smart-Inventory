import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal,
  LayoutDashboard,
  Package,
  BarChart3,
  Settings,
  Bell,
  User,
  Eye,
  Download,
  CheckCircle2,
  Clock,
  XCircle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Screen } from '@/src/types';

interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: 'Completado' | 'En Proceso' | 'Cancelado';
  items: number;
}

const initialOrders: Order[] = [
  { id: 'ORD-7721', customer: 'Tech Solutions Inc.', date: '24 Oct, 2025', total: 1245.00, status: 'Completado', items: 12 },
  { id: 'ORD-7722', customer: 'Global Logistics', date: '25 Oct, 2025', total: 850.50, status: 'En Proceso', items: 5 },
  { id: 'ORD-7723', customer: 'Retail Hub', date: '25 Oct, 2025', total: 2100.00, status: 'Cancelado', items: 24 },
  { id: 'ORD-7724', customer: 'Creative Agency', date: '26 Oct, 2025', total: 450.00, status: 'Completado', items: 3 },
  { id: 'ORD-7725', customer: 'Smart Systems', date: '26 Oct, 2025', total: 3200.00, status: 'En Proceso', items: 15 },
  { id: 'ORD-7726', customer: 'Urban Mart', date: '27 Oct, 2025', total: 150.25, status: 'Completado', items: 1 },
  { id: 'ORD-7727', customer: 'Future Tech', date: '27 Oct, 2025', total: 980.00, status: 'Completado', items: 8 },
];

interface OrdersProps {
  onNavigate: (screen: Screen) => void;
}

export default function Orders({ onNavigate }: OrdersProps) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a192f] text-slate-300 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-blue-500 p-2 rounded-lg">
            <Package className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-display font-bold text-white">InventoryPro</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Panel de Control" onClick={() => onNavigate('dashboard')} />
          <SidebarItem icon={Package} label="Inventario" onClick={() => onNavigate('inventory')} />
          <SidebarItem icon={ShoppingCartIcon} label="Pedidos" active />
          <SidebarItem icon={BarChart3} label="Informes" onClick={() => onNavigate('reports')} />
          <SidebarItem icon={Settings} label="Configuración" onClick={() => onNavigate('settings')} />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/5 transition-colors">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Perfil de Usuario</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-20">
          <h1 className="text-2xl font-display font-bold text-slate-900">Gestión de Pedidos</h1>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar pedidos..." 
                className="bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" 
              alt="Avatar" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
        </header>

        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">Todos los Pedidos</button>
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-500 hover:bg-slate-50 transition-all">Pendientes</button>
              <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-500 hover:bg-slate-50 transition-all">Completados</button>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-sm transition-all">
              <Download className="w-4 h-4" />
              Exportar CSV
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="px-6 py-4">ID de Pedido</th>
                  <th className="px-6 py-4">Cliente</th>
                  <th className="px-6 py-4">Fecha</th>
                  <th className="px-6 py-4">Artículos</th>
                  <th className="px-6 py-4">Monto Total</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {initialOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-blue-600">{order.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-900">{order.customer}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-500">{order.date}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">{order.items} artículos</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-slate-900">${order.total.toFixed(2)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <OrderStatusBadge status={order.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function OrderStatusBadge({ status }: { status: Order['status'] }) {
  const styles = {
    'Completado': 'bg-green-50 text-green-700 border-green-200 icon-green',
    'En Proceso': 'bg-blue-50 text-blue-700 border-blue-200 icon-blue',
    'Cancelado': 'bg-red-50 text-red-700 border-red-200 icon-red',
  };

  const icons = {
    'Completado': CheckCircle2,
    'En Proceso': Clock,
    'Cancelado': XCircle,
  };

  const Icon = icons[status];

  return (
    <span className={cn("px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 w-fit", styles[status])}>
      <Icon className="w-3.5 h-3.5" />
      {status}
    </span>
  );
}

function SidebarItem({ icon: Icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 w-full p-3 rounded-xl transition-all",
        active ? "bg-blue-600 text-white" : "hover:bg-white/5 text-slate-400"
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

const ShoppingCartIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);
