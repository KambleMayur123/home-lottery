import React from 'react';

type PaymentButtonProps = {
  className?: string; // Optional className for styling
  handleSubmit: any; // Replace `any` with a proper type if possible

  onClick?: () => void; // Optional click handler
};

const PaymentButton: React.FC<PaymentButtonProps> = ({ className, handleSubmit }) => {
  const createOrder = async () => {
    try {
      const response = await fetch("/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 2500, // ₹2500 in paise
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create order");
      }
  
      const data = await response.json();
      console.log("Order Created:", data);
  
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!, // Razorpay Key ID
        amount: data.amount, // Amount in paise
        currency: data.currency,
        name: "Lucky Dream Home Lottery",
        description: "Lottery Ticket Purchase",
        order_id: data.id,
        handler: async (paymentResponse: any) => {
          console.log("Payment Success:", paymentResponse);
          
          // Ensure payment success before calling handleSubmit
          if (paymentResponse.razorpay_payment_id) {
            await handleSubmit();
            alert("completed");
          }
        },
        prefill: {
          name: 'Your Name',
          email: 'your.email@example.com',
          contact: '',
        },
      };
  
      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error creating order:", error);
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
