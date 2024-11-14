// pages/api/saveUser.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, dob, mobile, address } = req.body;

    // Log incoming request data for debugging
    console.log('Request data:', { name, dob, mobile, address });

    // Validate fields
    if (!name || !dob || !mobile || !address) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Convert dob to a Date object and validate it
    const dateOfBirth = new Date(dob);
    if (isNaN(dateOfBirth.getTime())) {
      return res.status(400).json({ message: 'Invalid date format for dob' });
    }

    try {
      // Save the user data in the database
      const user = await prisma.user.create({
        data: {
          name,
          dob: dateOfBirth,
          mobile,
          address,
        },
      });

      res.status(201).json({ message: 'User saved successfully', user });
    } catch (error: any) {
      // Handle specific Prisma errors
      if (error.code === 'P2002' && error.meta?.target.includes('mobile')) {
        return res.status(400).json({ message: 'Mobile number already exists' });
      }

      console.error('Error saving user:', error.message || error);
      res.status(500).json({ message: 'Error saving user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
