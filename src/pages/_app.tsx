import { CartProvider } from '../contxt/index'; // import CartProvider
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
