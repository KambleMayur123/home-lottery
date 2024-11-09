import Layout from '../layout/index';
import Image from 'next/image';
import Heroimg from '../../public/assets/hero.jpg'
import { FiArrowRight, FiDollarSign } from "react-icons/fi";
import { PiGiftLight, PiCarLight } from "react-icons/pi";
import { RxHome } from "react-icons/rx";
import Link from "next/link";
import Button from '../components/ui/button/index'

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col">
        <section className="relative text-white py-16 text-center lg:h-screen">
          <Image
            src={Heroimg}
            width={1200}
            height={400}
            alt="Lucky Draw Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Black overlay with 30% opacity */}
          <div className="absolute inset-0 bg-black opacity-30"></div>

          <div className="relative z-10 top-[40%] flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold">Welcome to Lucky Draw</h1>
            <p className="mt-4 text-lg md:text-xl">
              Your chance to win big and change your life! Participate in our exclusive lottery for amazing prizes.
            </p>



            <Button className='mt-4 bg-[#f7b245] lg:w-[20%] w-[85%] hover:bg-[#fec05d]'>
              <Link href="/ticket" className='flex justify-center items-center'>
                  Get Your Ticket Now <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>


          </div>
        </section>


        {/* How It Works Section */}
        <section className="container mx-auto py-12 text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="mt-4 text-gray-700">
            Follow these simple steps to participate in our lottery.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:justify-around mt-8 gap-9">

            <div className="max-w-xs text-center shadow-lg p-9">
              <PiGiftLight className="mx-auto h-12 w-12 text-[#2cb7f0]" />
              <h3 className="text-2xl font-semibold mt-4">Step 1</h3>
              <p className="mt-2">Choose your lucky numbers or opt for a quick pick.</p>
            </div>

            <div className="max-w-xs text-center shadow-lg p-9">
              <FiArrowRight className="mx-auto h-12 w-12 text-[#2cb7f0]" />
              <h3 className="text-2xl font-semibold mt-4">Step 2</h3>
              <p className="mt-2">Purchase your lottery ticket online securely.</p>
            </div>
            <div className="max-w-xs text-center shadow-lg p-9">
              <PiGiftLight className="mx-auto h-12 w-12 text-[#2cb7f0]" />
              <h3 className="text-2xl font-semibold mt-4">Step 3</h3>
              <p className="mt-2">Wait for the draw and check if you&apos;re a winner&#x21;</p>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section className="bg-gray-100 py-16">
          <h2 className="text-3xl font-bold text-center">Prizes You Could Win</h2>
          <p className="text-center mt-4 text-gray-600">Check out our exclusive prizes&#x21;</p>
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-around mt-8 gap-9">
            <div className="max-w-xs text-center shadow-lg p-9">
              <RxHome className="mx-auto h-16 w-16 text-[#2cb7f0]" />
              <h3 className="text-2xl font-semibold mt-4">Dream Home</h3>
              <p className="mt-2">A beautiful house in a location of your choice.</p>
            </div>
            <div className="max-w-xs text-center shadow-lg p-9">
              <PiCarLight className="mx-auto h-16 w-16 text-[#2cb7f0]" />
              <h3 className="text-2xl font-semibold mt-4">Luxury Car</h3>
              <p className="mt-2">Drive away in a brand new luxury vehicle.</p>
            </div>
            <div className="max-w-xs text-center shadow-lg p-9">
              <FiDollarSign className="mx-auto h-16 w-16 text-[#2cb7f0]" />
              <h3 className="text-2xl font-semibold mt-4">Cash Prizes</h3>
              <p className="mt-2">Win life&#8208;changing amounts of money.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-[#2cb7f0] text-white py-12 text-center">
          <h2 className="text-3xl font-bold">Ready to Try Your Luck?</h2>
          <p className="mt-4 text-lg">Sign up today and secure your chance to win amazing prizes.</p>
          <button className="mt-8 bg-[#f7b245] text-black px-6 py-2 rounded font-semibold hover:bg-[#fbc56f]  flex items-center mx-auto">
            Sign Up &#38; Get Started <FiArrowRight className="ml-2 h-5 w-5" />
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
