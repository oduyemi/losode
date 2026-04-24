"use client";
import { CategoryFilter, SortDropdown } from "../product/Filters";



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-8">
      <aside className="w-64 space-y-6">
        <CategoryFilter />
      </aside>

      <main className="flex-1">
        <div className="flex justify-end mb-4">
          <SortDropdown />
        </div>
        {children}
      </main>
    </div>
  );
}