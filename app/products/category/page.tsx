"use client";
import { useCategories } from "@/features/products/hooks";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCategory } from "@/features/products/product-slice";

export default function CategoriesPage() {
  const { data, isLoading } = useCategories();
  const router = useRouter();
  const dispatch = useDispatch();

  if (isLoading) return <p className="p-6">Loading categories...</p>;

  const handleClick = (slug: string) => {
    dispatch(setCategory([slug])); 
    router.push("/"); 
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      {data?.map((cat) => (
        <div
          key={cat.id}
          onClick={() => handleClick(cat.slug)}
          className="cursor-pointer border rounded-lg p-4 hover:shadow-md transition"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-32 object-cover rounded"
          />
          <p className="mt-2 text-center font-medium">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}