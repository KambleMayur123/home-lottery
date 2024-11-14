// pages/api/saveUser.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, dob, mobile, address } = req.body;

    try {
      // Save the user data in the database
      const user = await prisma.user.create({
        data: {
          name,
          dob: new Date(dob),
          mobile,
          address,
        },
      });

      res.status(201).json({ message: 'User saved successfully', user });
    } catch (error) {
      console.error('Error saving user:', error);
      res.status(500).json({ message: 'Error saving user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
