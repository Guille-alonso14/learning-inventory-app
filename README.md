# Learning Inventory App

Aplicación de inventario de productos construida con Next.js, Neon y Drizzle ORM.

## Tecnologías

- **Next.js 16** — framework fullstack con backend y frontend integrados
- **Neon** — PostgreSQL serverless en la nube
- **Drizzle ORM** — ORM tipado para TypeScript
- **Vercel** — despliegue en producción

## Ventaja de usar un ORM tipado como Drizzle

Escribir SQL puro es fundamental para entender los cimientos de las bases de datos,
pero en proyectos grandes presenta limitaciones:

- Si renombras una columna en la base de datos, el error solo aparece en tiempo de ejecución
- No hay autocompletado de nombres de tablas o columnas en el editor
- Es fácil cometer errores tipográficos que solo se descubren en producción

Con Drizzle ORM el esquema se define en TypeScript:

```typescript

learning-inventory-app/
├── app/
│   ├── api/products/route.ts   — endpoints GET y POST
│   └── page.tsx                — frontend con tabla de productos
├── db/
│   └── schema.ts               — esquema tipado con Drizzle
├── lib/
│   └── db.ts                   — conexión a Neon
└── drizzle.config.ts           — configuración de Drizzle

## Scripts

```bash
npm run dev    # desarrollo local
npm run build  # build de producción
```