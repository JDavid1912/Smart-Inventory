import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Plus, 
  Edit2, 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal,
  LayoutDashboard,
  BarChart3,
  Settings,
  Bell,
  User
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Product, Screen } from '@/src/types';

const initialProducts: Product[] = [
  { id: '1', name: 'Logitech MX Master 3S Wireless Mouse', sku: 'LGT-MXM3S-BLK', category: 'Electrónica', quantity: 145, price: 99.99, status: 'En Stock', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=100' },
  { id: '2', name: 'ErgoChair Pro Office Chair', sku: 'ERC-PRO-GRY', category: 'Muebles', quantity: 8, price: 349.00, status: 'Bajo Stock', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=100' },
  { id: '3', name: 'HP Multipurpose Paper, 20lb, 500 Sheets', sku: 'HPM-MPP-500', category: 'Suministros de Oficina', quantity: 0, price: 8.49, status: 'Agotado', image: 'https://images.unsplash.com/photo-1589187151003-0dd3c63d47e2?auto=format&fit=crop&q=80&w=100' },
  { id: '4', name: 'Dell XPS 13 Laptop, Intel Core i7', sku: 'DEL-XPS13-I7', category: 'Electrónica', quantity: 22, price: 1299.00, status: 'En Stock', image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=100' },
  { id: '5', name: 'Philips Hue Smart LED Desk Lamp', sku: 'PHI-HUE-SDL', category: 'Electrónica', quantity: 5, price: 129.99, status: 'Bajo Stock', image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=100' },
  { id: '6', name: 'Keychron K2 Pro Mechanical Keyboard', sku: 'KCH-K2P-BLU', category: 'Electrónica', quantity: 60, price: 159.00, status: 'En Stock', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=100' },
  { id: '7', name: 'Steelcase 3-Drawer Mobile Pedestal', sku: 'STC-3DP-BLK', category: 'Muebles', quantity: 3, price: 189.00, status: 'Bajo Stock', image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=100' },
];

interface InventoryProps {
  onNavigate: (screen: Screen) => void;
}

export default function Inventory({ onNavigate }: InventoryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todas las Categorías');
  const [statusFilter, setStatusFilter] = useState('Todos los Estados');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-blue-600 text-white px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold">Gestión de Lista de Inventario</h1>
          <nav className="flex items-center gap-6">
            <button onClick={() => onNavigate('dashboard')} className="text-sm font-medium text-blue-100 hover:text-white transition-colors">Panel de Control</button>
            <button onClick={() => onNavigate('orders')} className="text-sm font-medium text-blue-100 hover:text-white transition-colors">Pedidos</button>
            <button onClick={() => onNavigate('reports')} className="text-sm font-medium text-blue-100 hover:text-white transition-colors">Informes</button>
            <button onClick={() => onNavigate('settings')} className="text-sm font-medium text-blue-100 hover:text-white transition-colors">Configuración</button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-500 border border-blue-400 flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-6 max-w-7xl mx-auto w-full">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-1 gap-4 w-full">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar productos por nombre, SKU o categoría" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            
            <div className="flex gap-3">
              <FilterDropdown 
                label="Filtrar por Categoría" 
                options={['Todas las Categorías', 'Electrónica', 'Suministros de Oficina', 'Muebles']} 
                value={categoryFilter}
                onChange={setCategoryFilter}
              />
              <FilterDropdown 
                label="Filtrar por Estado" 
                options={['Todos los Estados', 'En Stock', 'Bajo Stock', 'Agotado']} 
                value={statusFilter}
                onChange={setStatusFilter}
              />
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-sm transition-all whitespace-nowrap">
            <Plus className="w-5 h-5" />
            Añadir Nuevo Producto
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="px-6 py-4">Imagen del Producto</th>
                  <th className="px-6 py-4">Nombre del Producto</th>
                  <th className="px-6 py-4">SKU/Código de Barras</th>
                  <th className="px-6 py-4">Categoría</th>
                  <th className="px-6 py-4">Cantidad en Stock</th>
                  <th className="px-6 py-4">Precio</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {initialProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden border border-slate-200">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-900 line-clamp-1">{product.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">{product.sku}</code>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">{product.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-900">{product.quantity}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-slate-900">${product.price.toFixed(2)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={product.status as any} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1 text-xs font-bold border border-blue-200">
                          <Edit2 className="w-3.5 h-3.5" />
                          Editar
                        </button>
                        <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1 text-xs font-bold border border-slate-200">
                          <Eye className="w-3.5 h-3.5" />
                          Ver Detalles
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-200 flex items-center justify-between">
            <p className="text-sm text-slate-500">Mostrando <span className="font-bold text-slate-900">1-7</span> de <span className="font-bold text-slate-900">136</span> artículos</p>
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-400 hover:text-slate-600 disabled:opacity-50" disabled>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, '...', 20].map((page, i) => (
                  <button 
                    key={i}
                    className={cn(
                      "w-8 h-8 rounded-lg text-sm font-bold transition-all",
                      page === 1 ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-200"
                    )}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="p-2 text-slate-600 hover:text-slate-900">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function FilterDropdown({ label, options, value, onChange }: { label: string, options: string[], value: string, onChange: (v: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-300 transition-all"
      >
        {value === options[0] ? label : value}
        <ChevronRight className={cn("w-4 h-4 transition-transform", isOpen ? "rotate-90" : "")} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl z-30 py-2">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors",
                value === opt ? "text-blue-600 font-bold" : "text-slate-600"
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: Product['status'] }) {
  const styles: Record<Product['status'], string> = {
    'En Stock': 'bg-green-50 text-green-700 border-green-200',
    'Bajo Stock': 'bg-orange-50 text-orange-700 border-orange-200',
    'Agotado': 'bg-red-50 text-red-700 border-red-200',
  };

  return (
    <span className={cn("px-3 py-1 rounded-full text-xs font-bold border", styles[status])}>
      {status}
    </span>
  );
}
