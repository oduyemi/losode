"use client";
import { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { useRouter } from "next/navigation";


export default function OrderSuccessPage() {
  const router = useRouter();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("last_order");
    if (stored) {
      setOrder(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="max-w-lg w-full text-center rounded-2xl shadow-md p-6">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h1 className="text-2xl font-semibold mb-2">
          Payment Successful
        </h1>
        <p className="text-gray-500 mb-6">
          Your order has been placed successfully.
        </p>

        {order && (
          <div className="text-left bg-gray-100 p-4 rounded-lg mb-6 text-sm space-y-2">
            <p><strong>Name:</strong> {order.customer.name}</p>
            <p><strong>Email:</strong> {order.customer.email}</p>
            <p><strong>Phone:</strong> {order.customer.phone}</p>
            <p><strong>Address:</strong> {order.customer.address}</p>

            <hr />

            {order.items.map((item: any) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.title} × {item.quantity}</span>
                <span>₦{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}

            <hr />

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₦{order.total.toLocaleString()}</span>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <Button
            type="primary"
            className="w-full"
            onClick={() => router.push("/")}
          >
            Continue Shopping
          </Button>

          <Button
            className="w-full"
            onClick={() => router.push("/cart")}
          >
            View Cart
          </Button>
        </div>
      </Card>
    </div>
  );
}