-- Insertar categorías
INSERT INTO categories (name, description) VALUES
  ('Electrónica', 'Dispositivos y accesorios tecnológicos'),
  ('Hogar', 'Muebles, decoración y menaje'),
  ('Deportes', 'Equipamiento y ropa deportiva');

-- Insertar productos
INSERT INTO products (name, price, stock, category_id) VALUES
  ('Auriculares Bluetooth', 49.99, 30,
    (SELECT id FROM categories WHERE name = 'Electrónica')),
  ('Teclado mecánico', 89.99, 15,
    (SELECT id FROM categories WHERE name = 'Electrónica')),
  ('Lámpara de escritorio', 34.99, 20,
    (SELECT id FROM categories WHERE name = 'Hogar')),
  ('Cojín ergonómico', 24.99, 50,
    (SELECT id FROM categories WHERE name = 'Hogar')),
  ('Esterilla de yoga', 19.99, 40,
    (SELECT id FROM categories WHERE name = 'Deportes'));

-- Simular una venta: restar 3 unidades de auriculares
UPDATE products
SET stock = stock - 3
WHERE name = 'Auriculares Bluetooth';

-- Eliminar un producto descatalogado
DELETE FROM products WHERE name = 'Cojín ergonómico';