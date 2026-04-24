"use client";
import Filters from "@/components/product/Filters";
import SortDropdown from "../product/SortDropDown";



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-8 px-6 py-4">
      
      {/* SIDEBAR */}
      <aside className="hidden lg:block w-[260px] shrink-0">
        <Filters />
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 min-w-0">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm text-gray-500">
            {/* Optional: product count later */}
            Showing results
          </h2>

          <SortDropdown />
        </div>

        {/* GRID / CONTENT */}
        {children}
      </main>
    </div>
  );
}