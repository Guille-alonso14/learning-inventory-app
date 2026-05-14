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

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Inventario de productos</h1>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Producto</th>
              <th className="border p-3 text-left">Categoría</th>
              <th className="border p-3 text-left">Precio</th>
              <th className="border p-3 text-left">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="border p-3">{p.name}</td>
                <td className="border p-3">{p.category}</td>
                <td className="border p-3">{parseFloat(p.price).toFixed(2)} €</td>
                <td className="border p-3">{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}