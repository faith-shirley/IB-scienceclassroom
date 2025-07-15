// app/page.tsx
'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-[#14213D]">
        Welcome to <span className="text-[#FCA311]">IB Science Classroom</span>
      </h1>
      <p className="text-lg max-w-2xl mx-auto text-gray-700">
        Your trusted hub for inquiry-based science teaching resources aligned with the International Baccalaureate curriculum.
      </p>
      <Link href="/products">
        <button className="bg-[#FCA311] text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
          Browse Resources
        </button>
      </Link>
    </div>
  );
}