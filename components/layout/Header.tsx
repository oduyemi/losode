"use client";
import Link from "next/link";
import { SearchOutlined, ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Header() {
  const [query, setQuery] = useState("");
  const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);

  const handleSearch = () => {
    if (!query.trim()) return;
    console.log("Search:", query);
    // later → router.push(`/search?q=${query}`)
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Sitelogo"
            height={30}
            width={60}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="h-6"
          />
        </Link>

        {/* SEARCH */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="flex w-full bg-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-3 py-1.5 text-black outline-none text-sm"
            />
            <button
              onClick={handleSearch}
              className="px-3 text-black hover:bg-gray-100"
            >
              <SearchOutlined />
            </button>
          </div>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/">Shop</Link>
          <Link href="#">Categories</Link>
        </nav>

        {/* ICONS */}
        <div className="flex items-center gap-5 text-lg">
        <Link href="/wishlist" className="relative">
            <HeartOutlined className="cursor-pointer hover:opacity-70" />

            {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {wishlistCount}
                </span>
            )}
        </Link>
          <ShoppingCartOutlined className="cursor-pointer hover:opacity-70" />
        </div>
      </div>
    </header>
  );
}