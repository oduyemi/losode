"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { Form, Input, Button, Card, message } from "antd";
import { useRouter } from "next/navigation";
import { clearCart } from "@/features/cart/cart-slice";
import { useState } from "react";

export default function CheckoutPage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // ✅ Watch form values in real-time
  const handleValuesChange = async () => {
    try {
      await form.validateFields();
      setIsValid(true);
    } catch {
      setIsValid(false);
    }
  };

  const onFinish = async (values: any) => {
    if (cartItems.length === 0) {
      message.error("Your cart is empty");
      return;
    }

    try {
      setLoading(true);

      const orderPayload = {
        customer: values,
        items: cartItems,
        total,
        createdAt: new Date(),
      };

      console.log("ORDER:", orderPayload);

      // Simulate API delay
      await new Promise((res) => setTimeout(res, 800));

      message.success("Order placed successfully 🎉");

      localStorage.setItem("checkout_user", JSON.stringify(values));

      dispatch(clearCart());
      router.push("/");
    } catch (err) {
      message.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="max-w-6xl mt-12 mx-auto text-center">
        <h1 className="font-bold text-4xl">Checkout</h1>
      </div>
      
      <div className="max-w-6xl mt-2 mx-auto p-6 grid md:grid-cols-2 gap-8">
        <Card title="Customer Details" className="rounded-xl">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onValuesChange={handleValuesChange}
          >
            <Form.Item
              label="Full Name"
              name="name"
              validateTrigger="onChange"
              rules={[
                { required: true, message: "Please enter your full name" },
                {
                  validator: (_, value) => {
                    if (!value) return Promise.resolve();

                    const parts = value.trim().split(" ");
                    if (parts.length < 2) {
                      return Promise.reject(
                        "Enter first and last name"
                      );
                    }

                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
              validateTrigger="onChange"
              rules={[
                { required: true, message: "Please enter your email" },
                {
                  type: "email",
                  message: "Enter a valid email address",
                },
              ]}
            >
              <Input placeholder="john@example.com" />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full mt-4"
              disabled={!isValid || cartItems.length === 0}
              loading={loading}
            >
              Place Order
            </Button>
          </Form>
        </Card>

        {/* 🛒 SUMMARY */}
        <Card title="Order Summary" className="rounded-xl">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-sm"
              >
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