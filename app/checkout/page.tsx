<PayPalButton
  amount={product.price}
  onSuccess={(details) => {
    alert(`Payment completed by ${details.payer.name.given_name}`);
  }}
/>