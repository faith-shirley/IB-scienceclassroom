'use client';

import Link from 'next/link';

type Product = {
  title: string;
  slug: string;
  description: string;
  price: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-semibold mb-2 text-[#14213D]">
        {product.title}
      </h2>
      <p className="text-sm text-gray-600 mb-3">
        {product.description.length > 100
          ? product.description.substring(0, 100) + '...'
          : product.description}
      </p>
      <p className="text-[#FCA311] font-bold text-lg mb-4">
        ${product.price}
      </p>
      <Link
        href={`/products/${product.slug}`}
        className="inline-block bg-[#4BA3C3] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#3b91ae]"
      >
        View Product
      </Link>
    </div>
  );
}