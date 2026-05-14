# Arquitectura de datos

## ¿Qué es category_id como foreign key?

`category_id` en la tabla `products` es una foreign key porque su valor
debe corresponder exactamente a un `id` que ya exista en `categories`.
Un producto sin categoría válida es imposible — la base de datos lo rechaza.

Es el mecanismo que convierte dos tablas planas en una relación con significado.

## ON DELETE CASCADE vs ON DELETE RESTRICT

Se ha elegido **RESTRICT** porque es el comportamiento más seguro:
si intentas eliminar una categoría que tiene productos asociados,
la base de datos lanza un error y la operación no se completa.

Con CASCADE, se borrarían en silencio todos los productos de esa categoría.
Un error en un solo DELETE podría destruir cientos de registros sin aviso.
RESTRICT te obliga a reasignar o eliminar los productos manualmente primero.