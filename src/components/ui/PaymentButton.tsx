import React from 'react';

interface PaymentButtonProps {
  className?: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ className }) => {
  const createOrder = async () => {
    try {
      const response = await fetch('/api/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 2500, // ₹2500 in paise (multiply by 100)
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();
      console.log('Order Created:', data);

      // Call Razorpay after order is created
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!, // Razorpay Key ID from .env
        amount: data.amount, // Amount in paise (from the API response)
        currency: data.currency,
        name: 'Lucky Dream Home Lottery',
        description: 'Lottery Ticket Purchase',
        order_id: data.id,
        handler: (response: any) => {
          console.log('Payment Success:', response);
        },
        prefill: {
          name: 'Your Name',
          email: 'your.email@example.com',
          contact: '9999999999',
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <button 
      onClick={createOrder} 
      className={`${className} px-4 py-2 rounded`} // Use className prop and add default styles
    >
      Buy Now
    </button>
  );
};

export default PaymentButton;
