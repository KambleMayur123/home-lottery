import Image from 'next/image';
import Banglow from '../../../public/assets/banglow.jpg';
import Twobhk from '../../../public/assets/2bhk.jpg';
import Onebhk from '../../../public/assets/1bhk.jpg';

const PriceSection: React.FC = () => {
    return (<>
        <section className="bg-[white] py-16 px-3 lg:px-0">
            <h2 className="text-3xl lg:text-5xl font-bold text-center">Prizes You Could Win</h2>
            <p className="text-center text-lg mt-4 text-gray-600">Check out our exclusive prizes&#x21;</p>
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-around mt-8 gap-9">
                <div className="max-w-sm rounded overflow-hidden shadow-lg h-[400px]">
                    <Image src={Banglow} alt="banglow" className="w-full" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Bungalow</div>
                        <p className="text-gray-700 text-base">
                            Live the luxury life in a spacious, modern bungalow. Designed with elegance and perfect for your dream home.
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg h-[400px]">
                    <Image src={Twobhk} alt="banglow" className="w-full" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">2 BHK Flat</div>
                        <p className="text-gray-700 text-base">
                            Step into comfort and convenience with a modern 2 BHK flat. Ideal for families, offering ample space and a vibrant lifestyle in a prime location.
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg h-[400px]">
                    <Image src={Onebhk} alt="banglow" className="w-full" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">1 BHK Flat</div>
                        <p className="text-gray-700 text-base">
                            Perfect for individuals or small families, this cozy 1 BHK flat offers affordability without compromising on quality and style. Your perfect starter home!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default PriceSection;
