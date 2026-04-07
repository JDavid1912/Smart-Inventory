export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  price: number;
  status: 'En Stock' | 'Bajo Stock' | 'Agotado';
  image: string;
}

export interface SaleData {
  day: string;
  value: number;
}

export type Screen = 'login' | 'register' | 'dashboard' | 'inventory' | 'orders' | 'reports' | 'settings';
