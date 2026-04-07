import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Box } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LoginProps {
  onLogin: () => void;
  onNavigateToRegister: () => void;
}

export default function Login({ onLogin, onNavigateToRegister }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen w-full flex relative overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Warehouse Background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between py-12">
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-white space-y-6 mb-12 lg:mb-0"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-brand-primary/20 rounded-xl border border-brand-primary/30">
              <Box className="w-8 h-8 text-brand-primary" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">SmartInventory</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
            Bienvenido a SmartInventory.<br />
            <span className="text-brand-primary">Control Inteligente</span> para su Negocio.
          </h1>
          
          <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
            Optimice sus operaciones con nuestro sistema avanzado de gestión de inventario.
          </p>
          
          <p className="text-slate-400 font-medium">
            Sus datos, seguros y accesibles.
          </p>
        </motion.div>

        {/* Right Side: Login Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
            {/* Glass highlight effect */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-primary/20 blur-3xl rounded-full" />
            
            <div className="relative z-10 space-y-8">
              <div className="text-center space-y-2">
                <div className="flex justify-center mb-4">
                  <Box className="w-12 h-12 text-brand-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white">Acceso Smart Premium</h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Correo Electrónico</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="Correo Electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Contraseña</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="text-sm text-brand-primary hover:underline font-medium">
                    ¿Olvidó su contraseña?
                  </button>
                </div>

                <button
                  onClick={onLogin}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all flex items-center justify-center gap-2 group"
                >
                  Entrar al Sistema
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="text-center">
                  <p className="text-slate-400 text-sm">
                    ¿No tiene una cuenta?{' '}
                    <button 
                      onClick={onNavigateToRegister}
                      className="text-brand-primary font-bold hover:underline"
                    >
                      Registrarse
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
