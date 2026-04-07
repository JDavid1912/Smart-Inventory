import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Shield, Cpu, ShoppingBasket, Pill, Hammer, Shirt, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface RegisterProps {
  onRegister: () => void;
  onNavigateToLogin: () => void;
}

const categories = [
  { id: 'electronics', name: 'Electrónica', icon: Cpu, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  { id: 'grocery', name: 'Alimentación', icon: ShoppingBasket, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
  { id: 'pharmacy', name: 'Farmacia', icon: Pill, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
  { id: 'hardware', name: 'Ferretería', icon: Hammer, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
  { id: 'clothing', name: 'Ropa', icon: Shirt, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
];

export default function Register({ onRegister, onNavigateToLogin }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full flex bg-white font-sans">
      {/* Left Side: Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-700 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center space-y-8 max-w-md">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 mb-6">
              <Shield className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl font-display font-bold text-white mb-2 tracking-tight">SmartStock</h1>
            <p className="text-blue-100 text-xl">Únase a una forma más inteligente de gestionar su inventario.</p>
          </motion.div>

          <div className="relative mt-12">
            <img 
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800" 
              alt="Inventory Illustration"
              className="rounded-2xl shadow-2xl border border-white/20"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg space-y-8"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-display font-bold text-slate-900">Registro de Negocio Personalizado</h2>
            <p className="text-slate-500">Cree su cuenta y personalice su incorporación.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Correo Electrónico</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="w-full border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full border border-slate-200 rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                <button 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-semibold text-slate-700">¿Qué vende?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all space-y-2",
                      selectedCategory === cat.id 
                        ? cn(cat.bg, cat.border, "scale-105 shadow-sm") 
                        : "bg-white border-slate-100 hover:border-slate-200"
                    )}
                  >
                    <cat.icon className={cn("w-8 h-8", cat.color)} />
                    <span className="text-xs font-bold text-slate-700">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="terms" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="terms" className="text-sm text-slate-600">
                Acepto los <button className="text-blue-600 font-semibold">Términos y Condiciones</button> y la <button className="text-blue-600 font-semibold">Política de Privacidad</button>
              </label>
            </div>

            <button
              onClick={onRegister}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all"
            >
              Crear Cuenta
            </button>

            <div className="text-center">
              <p className="text-slate-500 text-sm">
                ¿Ya tiene una cuenta?{' '}
                <button 
                  onClick={onNavigateToLogin}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Iniciar Sesión
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
