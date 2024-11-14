import Image from 'next/image';
import { useState, useEffect } from 'react';
import Logo from '../../../public/assets/logo.png';
import Link from "next/link";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Button from '@/components/ui/button';
import { useCart } from '@/contxt';
import { useRouter } from 'next/router';
import UserForm from '@/components/UserForm';

const BuyTicket: React.FC = () => {
  const getCurrentDate = () => {
    const date = new Date();
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }); // Get the full day name
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${dayOfWeek}, ${day}/${month}/${year}`;
  };

  // const router = useRouter(); // Initialize useRouter for navigation
  // const { cartCount, setCartCount } = useCart(); // Access and set the cart count

  // const handleAddToCart = () => {
  //   setCartCount(cartCount + 1); // Increase cart count by 1
  //   router.push('/cart'); // Redirect to the cart page
  // };

  return (<>
    <Navbar />
    <main className='bg-[#f1f5fa] mt-11 mb-11 p-6'>


      <div>
        <div className='mt-11 p-8 text-center'>
          <h2 className='text-[2.5rem] font-bold'>WIN This Dream Home Lottery</h2>
          <div className="mt-[10px] mb-[10px]">
            <span>Winner Drawn:
              1st November 2025</span>

          </div>

        </div>
        <div className='flex justify-center'>
          <div className='bg-white shadow-md flex gap-28 justify-center items-center p-8 w-max rounded-xl relative'>
            <div className="bg-[#ED702E] absolute top-[-10px] text-white pl-[10px] pr-[10px] pt-[2px] pb-[2px] text-[14px] rounded-[10px]">
              MOST POPULAR
            </div>
            <div>
            <Image src={Logo} alt="logo" className='h-auto w-[65%]'  />

              {/* <h2 className='text-2xl font-semibold mb-1'>Dream Home </h2> */}
              <p className='text-gray-600'>
                Grab Your Dream Home Ticket
              </p>
            </div>
            <div className='flex flex-col-reverse'>
                  <span className="text-gray-600">Lottery No: 00000001</span>
                  <span className="text-gray-500 text-sm mt-1">Date: {getCurrentDate()}</span>
                </div>
            <div className='text-center'>
              <span className='mb-2 text-2xl font-semibold'>&#8377;3500</span>
              <Button
                // onClick={handleAddToCart}
                className="flex items-center px-4 py-2 bg-[#ED702E] mt-4 text-white rounded hover:bg-[#f7b245] transition"
              >
               Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <UserForm />

    </main>

    <Footer />
  </>

  )
}
export default BuyTicket;