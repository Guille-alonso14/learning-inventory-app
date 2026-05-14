# Análisis SQL

## Diferencia entre INNER JOIN y LEFT JOIN

### INNER JOIN
Devuelve solo las filas donde hay coincidencia en ambas tablas.
Si un registro no tiene correspondencia en la otra tabla, desaparece del resultado.

**Ejemplo real:** un sistema de facturación donde quieres ver
solo los clientes que han realizado al menos un pedido.
Los clientes sin pedidos no aparecen.

```sql
SELECT c.name, p.name
FROM categories c
INNER JOIN products p ON c.id = p.category_id;
```

### LEFT JOIN
Devuelve todas las filas de la tabla izquierda, tengan o no coincidencia.
Si no hay correspondencia en la tabla derecha, devuelve NULL en esas columnas.

**Ejemplo real:** un inventario donde quieres ver todas las categorías,
incluso las que aún no tienen productos asignados.
Las categorías vacías aparecen con total = 0.

```sql
SELECT c.name, COUNT(p.id) AS total_productos
FROM categories c
LEFT JOIN products p ON c.id = p.category_id
GROUP BY c.name;
```

## Conclusión

Usa INNER JOIN cuando solo te interesan los datos completos.
Usa LEFT JOIN cuando necesitas un listado exhaustivo que incluya los casos vacíos.