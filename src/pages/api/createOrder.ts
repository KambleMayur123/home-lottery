import type { NextApiRequest, NextApiResponse } from 'next';

const razorpay = require('razorpay');

const createOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { amount } = req.body;

    const instance = new razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_SECRET_KEY!,
    });
    
    const options = {
      amount: amount * 100, // Razorpay expects the amount in paise
      currency: 'INR',
      receipt: 'order_receipt',
    };

    try {
      const order = await instance.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default createOrder;
    