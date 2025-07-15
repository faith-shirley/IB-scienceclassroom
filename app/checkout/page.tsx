import React from "react";
import PayPalButton from "@/components/PayPalButton"; // adjust the path if needed

const CheckoutPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {/* Add any cart summary or user info here */}
      <PayPalButton />
    </div>
  );
};

export default CheckoutPage;


/*<PayPalButton
  amount={product.price}
  onSuccess={(details) => {
    alert(`Payment completed by ${details.payer.name.given_name}`);
  }}
/>*/