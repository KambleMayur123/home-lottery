import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { FaShoppingCart, FaRegTrashAlt  } from "react-icons/fa";
import { useCart } from '../contxt/index';
import Image from 'next/image';
import Logo from '../../public/assets/logo.png';
import Button from '@/components/ui/button';
import { useRouter } from 'next/router';

// Helper function to get the current date
const getCurrentDate = () => {
  const date = new Date();
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }); // Get the full day name
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();
  return `${dayOfWeek}, ${day}/${month}/${year}`;
};
const CartPage: React.FC = () => {
  const { cartCount, addToCart, removeFromCart } = useCart(); // Using the context hook
  const router = useRouter();

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const handleRemoveTicket = () => {
    removeFromCart(); // Call removeFromCart to reduce cartCount
  };

  return (
    <>
      <Navbar />
      <main className='bg-[#f1f5fa] mt-11 mb-11 p-6'>
        <div className="p-8">
          <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

          {cartCount > 0 ? (
            <div className="flex justify-center">
              <div className="bg-white shadow-md flex gap-28 justify-center items-center p-8 w-max rounded-xl relative">
              <Image src={Logo} alt="logo" className='h-auto w-[18%]'  />
                <div className='flex flex-col-reverse'>
                  <span className="text-gray-600">Lottery No: 00000001</span>
                  <span className="text-gray-500 text-sm mt-1">Date: {getCurrentDate()}</span>
                </div>
         
                <div className="text-center">
                  <span className="mb-2 text-2xl font-semibold">&#8377;3500</span>
                  <Button
                    onClick={handleCheckout}
                    className="flex items-center px-4 py-2 bg-[#ED702E] mt-4 text-white rounded hover:bg-[#f7b245] transition"
                  >
                    <FaShoppingCart className="mr-2" />
                    Checkout
                  </Button>
                </div>
                <div className="ml-4">
                  <FaRegTrashAlt
                    onClick={handleRemoveTicket}
                    className="text-gray-500 hover:text-red-600 text-xl cursor-pointer"
                    title="Remove Ticket"
                  />
                </div>
              </div>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
