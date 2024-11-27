import Layout from '../layout/index';
import Image from 'next/image';
import Heroimg from '../../public/assets/hero.jpg'
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Button from '../components/ui/button/index';
import CeoMessage from '../pages/ceomassege/index';
import HowItWorks from './how-it-works';
import PriceSection from './price-secton';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="min-h-screen mt-[80px] flex flex-col lg:p-0">
        <section className="relative text-white lg:py-0 py-16 text-center lg:h-screen">
          <Image
            src={Heroimg}
            width={1200}
            height={400}
            alt="Lucky Draw Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Black overlay with 30% opacity */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 lg:top-[28%] top-[40%] flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">Welcome to Lucky Dream Home</h1>
            <p className="mt-4 text-lg md:text-base">
              Your chance to win big and change your life! Participate in our exclusive lottery for amazing prizes.
            </p>
            <Button className='mt-4 bg-[#f7b245] lg:w-[20%] w-max hover:bg-[#e08b01]'>
              <Link href="/ticket" className='flex justify-center items-center'>
                Get Your Ticket Now <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
        <HowItWorks />
        <PriceSection />
        {/* Call to Action Section */}
        <section className="bg-[#2cb7f0] text-white p-10 text-center">
          <h2 className="text-3xl font-bold">Ready to Try Your Luck?</h2>
          <p className="mt-4 text-lg">Sign up today and secure your chance to win amazing prizes.</p>
          <Button className="mt-8 bg-[#f7b245] text-black px-6 py-2 rounded font-semibold hover:bg-[#fbc56f] flex items-center mx-auto w-max">
            <Link href="/ticket" className='flex justify-center items-center'>
              Get Your Lottery Now <FiArrowRight className="ml-2 h-5 w-5" />
            </Link>

          </Button>
        </section>
        <CeoMessage />
      </div>
    </Layout>
  );
};

export default HomePage;
