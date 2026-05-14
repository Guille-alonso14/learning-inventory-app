'use client';

import { useEffect, useState } from 'react';

type Product = {
  id: string;
  name: string;
  price: string;
  stock: number;
  category: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const totalStock = products.reduce((acc, p) => acc + p.stock, 0);
  const categories = new Set(products.map(p => p.category)).size;

  return (
    <main className="max-w-4xl mx-auto px-8 py-12 bg-white min-h-screen">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-sm text-gray-500 mb-1">Sistema de gestión</p>
          <h1 className="text-2xl font-medium text-gray-900">Inventario</h1>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Total productos</p>
          <p className="text-2xl font-medium text-gray-900">{products.length}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Categorías</p>
          <p className="text-2xl font-medium text-gray-900">{categories}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Stock total</p>
          <p className="text-2xl font-medium text-gray-900">{totalStock}</p>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-500 text-sm">Cargando...</p>
      ) : (
        <div className="border border-gray-100 rounded-xl overflow-hidden">
          <div className="grid grid-cols-4 px-4 py-3 border-b border-gray-100">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide col-span-2">Producto</span>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Precio</span>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Stock</span>
          </div>
          {products.map((p, i) => (
            <div
              key={p.id}
              className={`grid grid-cols-4 px-4 py-3 items-center ${i < products.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="col-span-1">
                <p className="text-sm font-medium text-gray-900">{p.name}</p>
              </div>
              <div className="col-span-1">
                <span className="text-xs text-gray-500">{p.category}</span>
              </div>
              <p className="text-sm text-gray-900">{parseFloat(p.price).toFixed(2)} €</p>
              <p className="text-sm font-medium text-gray-900">{p.stock}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}