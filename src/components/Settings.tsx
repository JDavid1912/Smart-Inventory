import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Lock, 
  Globe, 
  Shield, 
  Palette, 
  Mail,
  ChevronRight,
  Camera,
  Save
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Screen } from '@/src/types';

interface SettingsProps {
  onNavigate: (screen: Screen) => void;
}

export default function Settings({ onNavigate }: SettingsProps) {
  const [activeTab, setActiveTab] = useState('profile');

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
          <SidebarItem icon={BarChart3} label="Informes" onClick={() => onNavigate('reports')} />
          <SidebarItem icon={SettingsIcon} label="Configuración" active />
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
          <h1 className="text-2xl font-display font-bold text-slate-900">Configuración</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-sm transition-all">
            <Save className="w-4 h-4" />
            Guardar Cambios
          </button>
        </header>

        <div className="p-8 max-w-4xl">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
            {/* Settings Navigation */}
            <div className="w-full md:w-64 border-r border-slate-100 p-4 space-y-1">
              <SettingsTabItem 
                icon={User} 
                label="Perfil" 
                active={activeTab === 'profile'} 
                onClick={() => setActiveTab('profile')} 
              />
              <SettingsTabItem 
                icon={Bell} 
                label="Notificaciones" 
                active={activeTab === 'notifications'} 
                onClick={() => setActiveTab('notifications')} 
              />
              <SettingsTabItem 
                icon={Shield} 
                label="Seguridad" 
                active={activeTab === 'security'} 
                onClick={() => setActiveTab('security')} 
              />
              <SettingsTabItem 
                icon={Globe} 
                label="Localización" 
                active={activeTab === 'localization'} 
                onClick={() => setActiveTab('localization')} 
              />
              <SettingsTabItem 
                icon={Palette} 
                label="Apariencia" 
                active={activeTab === 'appearance'} 
                onClick={() => setActiveTab('appearance')} 
              />
            </div>

            {/* Settings Content */}
            <div className="flex-1 p-8">
              {activeTab === 'profile' && (
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80" 
                        alt="Profile" 
                        className="w-24 h-24 rounded-2xl object-cover border-4 border-slate-50 shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                      <button className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="w-6 h-6 text-white" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Alex Johnson</h3>
                      <p className="text-slate-500">Administrador • SmartInventory Pro</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
                      <input 
                        type="text" 
                        defaultValue="Alex Johnson" 
                        className="w-full border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Correo Electrónico</label>
                      <input 
                        type="email" 
                        defaultValue="alex@smartinventory.com" 
                        className="w-full border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Número de Teléfono</label>
                      <input 
                        type="tel" 
                        defaultValue="+1 (555) 000-0000" 
                        className="w-full border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Cargo</label>
                      <input 
                        type="text" 
                        defaultValue="Administrador" 
                        className="w-full border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Biografía</label>
                    <textarea 
                      rows={4}
                      defaultValue="Gestión de operaciones de inventario y logística de la cadena de suministro para el almacén regional."
                      className="w-full border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Preferencias de Notificación</h3>
                  <NotificationToggle label="Notificaciones por Correo" description="Reciba resúmenes diarios y alertas críticas por correo electrónico." defaultChecked />
                  <NotificationToggle label="Notificaciones Push" description="Reciba actualizaciones en tiempo real en su escritorio o dispositivo móvil." defaultChecked />
                  <NotificationToggle label="Alertas de Bajo Stock" description="Notificar cuando los artículos alcancen su umbral mínimo." defaultChecked />
                  <NotificationToggle label="Actualizaciones de Pedidos" description="Actualizaciones sobre pedidos en proceso y completados." />
                  <NotificationToggle label="Informes Semanales" description="Informes de rendimiento automatizados todos los lunes." />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SettingsTabItem({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center justify-between w-full p-3 rounded-xl transition-all group",
        active ? "bg-blue-50 text-blue-600" : "text-slate-500 hover:bg-slate-50"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon className={cn("w-5 h-5", active ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600")} />
        <span className="text-sm font-bold">{label}</span>
      </div>
      <ChevronRight className={cn("w-4 h-4 transition-transform", active ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0")} />
    </button>
  );
}

function NotificationToggle({ label, description, defaultChecked = false }: { label: string, description: string, defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all">
      <div className="space-y-1">
        <p className="text-sm font-bold text-slate-900">{label}</p>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
      <button 
        onClick={() => setChecked(!checked)}
        className={cn(
          "w-12 h-6 rounded-full transition-all relative",
          checked ? "bg-blue-600" : "bg-slate-200"
        )}
      >
        <div className={cn(
          "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
          checked ? "left-7" : "left-1"
        )} />
      </button>
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
