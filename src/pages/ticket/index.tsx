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
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const getCurrentDate = () => {
    const date = new Date();
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }); // Get the full day name
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${dayOfWeek}, ${day}/${month}/${year}`;
  };

  const handleFormSubmit = () => {
    setFormSubmitted(true); // Set formSubmitted to true when form is successfully submitted
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
       
        {formSubmitted ? (
          
          <><div className='mt-11 p-8 text-center'>
            <h2 className='lg:text-[2.5rem] text-[22px] font-bold'>WIN This Dream Home Lottery</h2>
            <div className="mt-[10px] mb-[10px]">
              <span>Winner Drawn:
                1st November 2025</span>

            </div>

          </div>
          
            <div className='flex justify-center'>
              <div className='bg-white w-[100%] shadow-md flex lg:gap-28 justify-center items-center lg:p-8 pr-3 pl-3 pt-3 pb-3 lg:w-max rounded-xl relative'>
                <div className="bg-[#ED702E] absolute top-[-10px] text-white pl-[10px] pr-[10px] pt-[2px] pb-[2px] lg:text-[14px] text-[11px] rounded-[10px]">
                  MOST POPULAR
                </div>
                <div>
                  <Image src={Logo} alt="logo" className="hidden md:block h-auto w-[60%]" />
                  <p className='text-gray-600 hidden md:block'>
                    Grab Your Dream Home Ticket
                  </p>
                </div>
                <div className='lg:flex flex-col-reverse'>
                  <span className="text-gray-600 text-sm lg:text-base">Lottery No: 00000001</span>
                  <span className="text-gray-500 w-max text-sm mt-1 lg:text-base lg:flex inline-block">Date: {getCurrentDate()}</span>
                </div>
                <div className='lg:text-center text-end'>
                  <span className='mb-2 lg:text-2xl text-[18px] font-semibold'>&#8377;3500</span>
                  <Button
                    className="flex items-center text-sm w-max lg:px-8 lg:py-2 bg-[#ED702E] mt-4 text-white rounded hover:bg-[#f7b245] transition"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div></>
          ) : (
            // Render the UserForm component if the form is not submitted yet
            <UserForm onFormSubmit={handleFormSubmit} />
          )}
        </div>
      </main>

      <Footer />
  </>

  )
}
export default BuyTicket;