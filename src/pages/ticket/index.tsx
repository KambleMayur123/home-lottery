import Image from 'next/image';
import Logo from '../../../public/assets/logo.png';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import UserForm from '@/components/UserForm';
import { useState } from 'react';
import PaymentButton from '@/components/ui/PaymentButton';

const BuyTicket: React.FC = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false  ); // Track form submission status




  return (<>
    <Navbar />
    <main className='bg-[#f1f5fa] mt-11 mb-11 p-6'>

      <div>
        {isFormSubmitted ? (


          <><div className='mt-11 p-8 text-center'>
            <h2 className='lg:text-[2.5rem] text-[22px] font-bold'>WIN This Dream Home Lottery</h2>
            <div className="mt-[10px] mb-[10px]">
              <span>Winner Drawn:
                1st November 2025</span>

            </div>

          </div></>

        ) : (
          <><UserForm onSubmitSuccess={() => setIsFormSubmitted(true)} /></>
          
        )}

      </div>
    </main>

    <Footer />
  </>

  )
}
export default BuyTicket;