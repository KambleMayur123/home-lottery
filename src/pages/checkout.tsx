import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
const CheckoutPage: React.FC = () => {
    return (<>
        <Navbar />
        <main className='bg-[#f1f5fa] mt-11 mb-11 p-6'>
            <div className="p-8">
                <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
                <p>Complete your purchase here.</p>
                {/* Additional checkout form or details can be added here */}
            </div>
        </main>

        
        <Footer />
    </>

    );
};
export default CheckoutPage;
