import StickyWhatsappIcon from '@/components/ui/whasapp/whatsapp';
import { CartProvider } from '../contxt/index'; // import CartProvider
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <CartProvider>
      <StickyWhatsappIcon />
      
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
