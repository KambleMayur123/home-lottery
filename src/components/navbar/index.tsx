import Image from 'next/image';
import { useState, useEffect } from 'react';
import Logo from '../../../public/assets/logo.png';
import Link from "next/link";


const Component: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en", // Set the default language as English
        includedLanguages: "en,hi", // Specify only English (en) and Hindi (hi)
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  
  useEffect(() => {
    // Check if the script is already added
    if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js"]')) {
      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, []);

  return (
    <nav className="lg:pl-10 lg:pr-10 text-primary-foreground fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b-slate-300 border-b">
      <div className="mx-auto pl-8 pr-8 pt-2 pb-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">

            <Link href="/" className="flex-shrink-0 w-[100%]">

              <Image src={Logo} alt="Logo" className='h-auto lg:w-[45%] w-[55%]' />
            </Link>
          </div>
          <div className="hidden md:block w-full">
            <div className="ml-10 flex items-center justify-end space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-[17px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-200 md:whitespace-nowrap">Home</Link>
              <Link href="/ticket" className="px-3 py-2 rounded-md text-[17px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-200 md:whitespace-nowrap">Buy Tickets</Link>
              <Link href="/lotteryResult" className="px-3 py-2 rounded-md text-[17px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-200 md:whitespace-nowrap">Lottery Result</Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-[17px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-200 md:whitespace-nowrap">About</Link>
              <Link href="/contact" className="px-3 py-2 rounded-md text-[17px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-200 md:whitespace-nowrap">Conact</Link>

              {/* <Link href="/cart" className="relative px-3 py-2 rounded-md text-[17px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-200 md:whitespace-nowrap">
                <FaCartShopping className="text-2xl" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link> */}

              <div id="google_translate_element"></div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${isMenuOpen ? 'max-h-60' : 'max-h-0'
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col lg:flex-row">
        <Link href="/" className="px-3 py-2 rounded-md text-[17px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-200 md:whitespace-nowrap">Home</Link>
              <Link href="/ticket" className="px-3 py-2 rounded-md text-[17px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-200 md:whitespace-nowrap">Buy Tickets</Link>
              <Link href="#" className="px-3 py-2 rounded-md text-[17px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-200 md:whitespace-nowrap">Lottery Result</Link>
              <Link href="/abou" className="px-3 py-2 rounded-md text-[17px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-200 md:whitespace-nowrap">About</Link>
              <Link href="/contact" className="px-3 py-2 rounded-md text-[17px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-200 md:whitespace-nowrap">Conact</Link>

          

        </div>
      </div>
    </nav>
  )
}
export default Component;