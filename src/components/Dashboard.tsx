import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  User, 
  Search, 
  Bell, 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  DollarSign 
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { cn } from '@/src/lib/utils';
import { Screen } from '@/src/types';

const salesData = [
  { day: 'Día 8', value: 0 },
  { day: 'Ene 10', value: 200 },
  { day: 'Ene 16', value: 250 },
  { day: 'Ene 20', value: 320 },
  { day: 'Ene 21', value: 400 },
  { day: 'Día 2', value: 550 },
];

const topProducts = [
  { name: 'Soporte Premium para Laptop', stock: 400, sold: 33, revenue: '$4,500' },
  { name: 'Teclado Inalámbrico K9', stock: 50, sold: 18, revenue: '$3,000' },
  { name: 'Monitor 27"', stock: 100, sold: 23, revenue: '$2,700' },
  { name: 'Monitor 27"', stock: 300, sold: 24, revenue: '$1,600' },
  { name: 'Teclado Inalámbrico K9', stock: 75, sold: 18, revenue: '$2,500' },
  { name: 'Laptop ErgoCris', stock: 20, sold: 9, revenue: '$4,500' },
];

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a192f] text-slate-300 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-blue-500 p-2 rounded-lg">
            <Package className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-display font-bold text-white">InventoryPro</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Panel de Control" active />
          <SidebarItem icon={Package} label="Inventario" onClick={() => onNavigate('inventory')} />
          <SidebarItem icon={ShoppingCart} label="Pedidos" onClick={() => onNavigate('orders')} />
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
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-20">
          <h1 className="text-2xl font-display font-bold text-slate-900">Panel de Inventario Inteligente</h1>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar" 
                className="bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" 
              alt="Avatar" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Valor Total" value="$1,245,000" icon={DollarSign} color="text-blue-600" bg="bg-blue-50" />
            <StatCard label="Artículos con Bajo Stock" value="14" icon={TrendingUp} color="text-indigo-600" bg="bg-indigo-50" />
            <StatCard label="Vencen Pronto" value="23" icon={Clock} color="text-sky-600" bg="bg-sky-50" />
            <StatCard label="Ventas de Hoy" value="$4,500" icon={ShoppingCart} color="text-blue-500" bg="bg-blue-50" />
          </div>

          {/* Smart Alerts */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 border border-blue-100 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-blue-900 mb-4">Alertas Inteligentes</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-800">
                <div className="w-2 h-2 bg-slate-900 rounded-full" />
                <span>Se predice <span className="font-bold">Agotamiento de Stock</span> para <span className="font-bold">'ErgoChair Pro'</span> en 2 días. Reabastezca ahora.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-800">
                <div className="w-2 h-2 bg-slate-900 rounded-full" />
                <span><span className="font-bold">5 artículos vencen</span> esta semana en el Almacén B. Se requiere acción.</span>
              </li>
            </ul>
          </motion.div>

          {/* Charts & Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sales Trend */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Tendencias de Ventas (Últimos 30 Días)</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Selling Products */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Productos Más Vendidos</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <th className="pb-4">Nombre del Producto</th>
                      <th className="pb-4">Nivel de Stock</th>
                      <th className="pb-4">Unidades Vendidas</th>
                      <th className="pb-4">Ingresos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {topProducts.map((product, i) => (
                      <tr key={i} className="text-sm">
                        <td className="py-4 font-medium text-slate-700">{product.name}</td>
                        <td className="py-4 text-slate-600">{product.stock}</td>
                        <td className="py-4 text-slate-600">{product.sold}</td>
                        <td className="py-4 font-bold text-slate-900">{product.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
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

function StatCard({ label, value, icon: Icon, color, bg }: { label: string, value: string, icon: any, color: string, bg: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
      <div className={cn("p-3 rounded-xl", bg)}>
        <Icon className={cn("w-6 h-6", color)} />
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
