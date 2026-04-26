"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import {
  removeFromCart,
  updateQuantity,
} from "@/features/cart/cart-slice";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return <p className="p-6">Your cart is empty</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Your Cart</h1>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 border rounded-lg p-4 items-center"
        >
          <div className="relative w-24 h-24 bg-gray-100">
            <Image
              src={item.images[0]}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-gray-500">
              ₦{item.price.toLocaleString()}
            </p>

            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: Math.max(1, item.quantity - 1),
                    })
                  )
                }
                className="px-2 border"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1,
                    })
                  )
                }
                className="px-2 border"
              >
                +
              </button>
            </div>
          </div>

          <div className="text-right">
            <p className="font-semibold">
              ₦{(item.price * item.quantity).toLocaleString()}
            </p>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-xs text-red-500 mt-2"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-right border-t pt-4">
        <p className="text-lg font-semibold">
          Total: ₦{total.toLocaleString()}
        </p>

        <Link href="/checkout">
          <button
            className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:opacity-90"
            disabled={items.length === 0}
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}