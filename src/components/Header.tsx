'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Hyun Dev
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/blog" className="hover:text-gray-600">
            블로그
          </Link>
          <Link href="/projects" className="hover:text-gray-600">
            프로젝트
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            소개
          </Link>
        </div>
      </nav>
    </header>
  );
} 