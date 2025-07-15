'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    paypal: any;
  }
}

type PayPalButtonProps = {
  amount: number;
  onSuccess: (details: any) => void;
};

export default function PayPalButton({ amount, onSuccess }: PayPalButtonProps) {
  useEffect(() => {
    if (!window.paypal) return;

    window.paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'gold',
        shape: 'rect',
        label: 'paypal',
      },
      createOrder: (_data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount.toFixed(2),
              },
            },
          ],
        });
      },
      onApprove: async (_data: any, actions: any) => {
        const details = await actions.order.capture();
        onSuccess(details);
      },
      onError: (err: any) => {
        console.error('PayPal Checkout Error:', err);
      },
    }).render('#paypal-button-container');
  }, [amount, onSuccess]);

  return <div id="paypal-button-container" className="mt-4" />;
}
