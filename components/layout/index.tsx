"use client";
import Filters from "@/components/product/Filters";
import SortDropdown from "@/components/product/SortDropDown";
import PageContainer from "@/components/layout/Container";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">

        {/* SIDEBAR */}
        <aside className="hidden lg:block sticky top-24 h-fit">
          <Filters />
        </aside>

        {/* MAIN */}
        <main className="min-w-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm text-gray-500">Showing results</h2>
            <SortDropdown />
          </div>

          {children}
        </main>
      </div>
    </PageContainer>
  );
}