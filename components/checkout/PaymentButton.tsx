"use client";
import { Button } from "antd";


export default function PaymentButton() {
  const handlePayment = async () => {
    console.log("Processing payment...");
  };

  return (
    <Button type="primary" size="large" block onClick={handlePayment}>
      Pay Now
    </Button>
  );
}