import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { products, categories } from '@/db/schema';
import { eq } from 'drizzle-orm';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export async function GET() {
  try {
    const result = await db
      .select({
        id: products.id,
        name: products.name,
        price: products.price,
        stock: products.stock,
        category: categories.name,
      })
      .from(products)
      .innerJoin(categories, eq(products.category_id, categories.id))
      .orderBy(categories.name, products.name);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener los productos' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name, price, stock, category_id } = await request.json();
    const result = await db
      .insert(products)
      .values({ name, price, stock, category_id })
      .returning();

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al insertar el producto' },
      { status: 500 }
    );
  }
}