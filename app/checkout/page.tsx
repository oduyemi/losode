"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { Form, Input, Button, Card, message } from "antd";
import { useRouter } from "next/navigation";
import { clearCart } from "@/features/cart/cart-slice";
import { useState } from "react";
import dynamic from "next/dynamic";


const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

export default function CheckoutPage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [isValid, setIsValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleValuesChange = async () => {
    try {
      await form.validateFields();
      setIsValid(true);
    } catch {
      setIsValid(false);
    }
  };

  const paystackConfig = () => ({
    reference: new Date().getTime().toString(),
    email: form.getFieldValue("email") || "",
    amount: total * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    metadata: {
      custom_fields: [
        {
          display_name: "Full Name",
          variable_name: "name",
          value: form.getFieldValue("name") || "",
        },
        {
          display_name: "Phone Number",
          variable_name: "phone",
          value: form.getFieldValue("phone") || "",
        },
        {
          display_name: "Address",
          variable_name: "address",
          value: form.getFieldValue("address") || "",
        },
      ],
    },
  });

  const handleSuccess = async (reference: any) => {
    try {
      message.loading({ content: "Verifying payment...", key: "verify" });
      const res = await fetch("/api/paystack/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reference: reference.reference }),
      });
  
      const data = await res.json();
      if (!data.success) {
        message.error("Payment verification failed");
        return;
      }
  
      const orderPayload = {
        customer: form.getFieldsValue(),
        items: cartItems,
        total,
        reference: reference.reference,
        createdAt: new Date(),
      };
  
      localStorage.setItem("last_order", JSON.stringify(orderPayload));
      dispatch(clearCart());
      message.success({ content: "Payment verified!", key: "verify" });
      router.push("/order-success");
    } catch (err) {
      message.error("Something went wrong during verification");
    }
  };

  if (showSuccess) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-2">Payment Successful</h2>
        <p className="text-gray-500">Redirecting you...</p>
      </div>
    );
  }

  const handleClose = () => {
    message.info("Payment popup closed");
  };

  return (
    <div>
      <div className="max-w-6xl mt-4 mx-auto text-center">
        <h1 className="font-bold text-4xl">Checkout</h1>
      </div>
      <div className="max-w-6xl mt-2 mx-auto p-6 grid md:grid-cols-2 gap-8">
        <Card title="Customer Details" className="rounded-xl">
          <Form form={form} layout="vertical">
          <Form.Item
              label="Full Name"
              name="name"
              rules={[
                { required: true, message: "Enter full name" },
                {
                  validator: (_, value) => {
                    if (!value) return Promise.resolve();
                    const parts = value.trim().split(" ");
                    if (parts.length < 2) {
                      return Promise.reject("Enter first & last name");
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Enter email" },
                { type: "email", message: "Invalid email" },
              ]}
            >
              <Input placeholder="john@example.com" />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Enter phone number" },
                {
                  pattern: /^(\+234|0)[789][01]\d{8}$/,
                  message: "Enter valid Nigerian number",
                },
              ]}
            >
              <Input placeholder="+2348012345678" />
            </Form.Item>

            <Form.Item
              label="Delivery Address"
              name="address"
              rules={[
                { required: true, message: "Enter delivery address" },
                { min: 10, message: "Address too short" },
              ]}
            >
              <Input.TextArea placeholder="Full delivery address" rows={3} />
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => {
                const isValid =
                  form.isFieldsTouched(true) &&
                  !form.getFieldsError().some(({ errors }) => errors.length);
                
                return (
                  <PaystackButton
                    {...paystackConfig()}
                    text="Pay Now"
                    onSuccess={handleSuccess}
                    onClose={handleClose}
                    className={`w-full mt-4 py-3 rounded-lg ${
                      isValid && cartItems.length > 0
                        ? "bg-black text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!isValid || cartItems.length === 0}
                  />
                );
              }}
            </Form.Item>
          </Form>
        </Card>

        <Card title="Order Summary" className="rounded-xl">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.title} × {item.quantity}
                </span>
                <span>
                  ₦{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}

            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}