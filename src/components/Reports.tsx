import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  User, 
  Bell, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  PieChart as PieChartIcon
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { cn } from '@/src/lib/utils';
import { Screen } from '@/src/types';

const categoryData = [
  { name: 'Electrónica', value: 45 },
  { name: 'Muebles', value: 25 },
  { name: 'Suministros de Oficina', value: 20 },
  { name: 'Ferretería', value: 10 },
];

const COLORS = ['#3b82f6', '#6366f1', '#0ea5e9', '#94a3b8'];

const monthlyRevenue = [
  { month: 'Ene', revenue: 45000, profit: 12000 },
  { month: 'Feb', revenue: 52000, profit: 15000 },
  { month: 'Mar', revenue: 48000, profit: 11000 },
  { month: 'Abr', revenue: 61000, profit: 18000 },
  { month: 'May', revenue: 55000, profit: 14000 },
  { month: 'Jun', revenue: 67000, profit: 21000 },
];

interface ReportsProps {
  onNavigate: (screen: Screen) => void;
}

export default function Reports({ onNavigate }: ReportsProps) {
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
          <SidebarItem icon={ShoppingCart} label="Pedidos" onClick={() => onNavigate('orders')} />
          <SidebarItem icon={BarChart3} label="Informes" active />
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
          <h1 className="text-2xl font-display font-bold text-slate-900">Análisis e Informes</h1>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <Calendar className="w-4 h-4" />
              Últimos 6 Meses
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-sm transition-all">
              <Download className="w-4 h-4" />
              Descargar Informe
            </button>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReportStatCard 
              label="Ingresos Totales" 
              value="$328,000" 
              trend="+12.5%" 
              trendUp={true}
              description="vs. 6 meses anteriores"
            />
            <ReportStatCard 
              label="Beneficio Bruto" 
              value="$91,000" 
              trend="+8.2%" 
              trendUp={true}
              description="vs. 6 meses anteriores"
            />
            <ReportStatCard 
              label="Rotación de Inventario" 
              value="4.2x" 
              trend="-2.1%" 
              trendUp={false}
              description="vs. 6 meses anteriores"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-slate-900">Ingresos vs Beneficio</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-xs font-medium text-slate-500">Ingresos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                    <span className="text-xs font-medium text-slate-500">Beneficio</span>
                  </div>
                </div>
              </div>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyRevenue}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                    <Tooltip 
                      cursor={{fill: '#f8fafc'}}
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    />
                    <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={32} />
                    <Bar dataKey="profit" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Category Distribution */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-8">Inventario por Categoría</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36}/>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Informe de Valoración de Stock</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ReportStatCard({ label, value, trend, trendUp, description }: { label: string, value: string, trend: string, trendUp: boolean, description: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="flex items-end justify-between">
        <h4 className="text-3xl font-bold text-slate-900">{value}</h4>
        <div className={cn(
          "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold",
          trendUp ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
        )}>
          {trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {trend}
        </div>
      </div>
      <p className="text-xs text-slate-400">{description}</p>
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
