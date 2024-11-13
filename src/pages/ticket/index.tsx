import Image from 'next/image';
import { useState, useEffect } from 'react';
import Logo from '../../../public/assets/logo.png';
import Link from "next/link";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Button from '@/components/ui/button';
import { FaCartShopping } from "react-icons/fa6";

const BuyTicket: React.FC = () => {


  return (<>
    <Navbar />
    <main className='bg-[#f1f5fa] mt-11 mb-11 p-6'>
      
  
      <div>
        <div className='mt-11 p-8 text-center'>
          <h2 className='text-[2.5rem] font-bold'>WIN This Dream Home Prize Packge!</h2>
          <div className="mt-[10px] mb-[10px]">
            <p className="mb-[7px]">Display lottery Lottery No. Here </p>
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
              <h2 className='text-2xl font-semibold mb-1'>Dream Home </h2>
              <p className='text-gray-600'>
                Grab Your Dream Home Ticket
              </p>
            </div>
            <div>
              <span className='text-gray-600'>&#8377; 3500 per ticket</span>
            </div>
            <div className='text-center'>
              <span className='mb-2 text-2xl font-semibold'>&#8377;3500</span>
              <Button className="p-3 mt-1 text-white w-max rounded  hover:bg-[#f7b245]">
                <div className='pr-2'>
                <FaCartShopping />
                </div>
                
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>

  )
}
export default BuyTicket;