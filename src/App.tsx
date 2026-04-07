/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Orders from './components/Orders';
import Reports from './components/Reports';
import Settings from './components/Settings';
import { Screen } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return (
          <Login 
            onLogin={() => setCurrentScreen('dashboard')} 
            onNavigateToRegister={() => setCurrentScreen('register')}
          />
        );
      case 'register':
        return (
          <Register 
            onRegister={() => setCurrentScreen('dashboard')} 
            onNavigateToLogin={() => setCurrentScreen('login')}
          />
        );
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentScreen} />;
      case 'inventory':
        return <Inventory onNavigate={setCurrentScreen} />;
      case 'orders':
        return <Orders onNavigate={setCurrentScreen} />;
      case 'reports':
        return <Reports onNavigate={setCurrentScreen} />;
      case 'settings':
        return <Settings onNavigate={setCurrentScreen} />;
      default:
        return <Login onLogin={() => setCurrentScreen('dashboard')} onNavigateToRegister={() => setCurrentScreen('register')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
