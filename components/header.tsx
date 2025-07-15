'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#14213D] text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          IB Science Classroom
        </Link>

        <nav className="space-x-4 text-sm sm:text-base">
          <Link href="/products" className="hover:text-[#FCA311]">
            Products
          </Link>
          <Link href="/cart" className="hover:text-[#FCA311]">
            Cart
          </Link>
          <Link href="/admin/products" className="hover:text-[#FCA311]">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}