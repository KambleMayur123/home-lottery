import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const LotteryResult: React.FC = () => {

    const winners = [
        { name: 'Vivek kamble', lotteryNumber: '00000001' },
        { name: 'Mayur Kamble', lotteryNumber: '00000002' },
        { name: 'Guru Kamble', lotteryNumber: '00000003' },
    ];
    return (<>
        <Navbar />
        <div className="h-[65vh] max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-20 mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">
                Lucky Dream Home - Winners
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {winners.map((winner, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 border rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-transform"
                    >
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {winner.name}
                            </h3>
                            <p className="text-gray-600">Lottery Number:</p>
                            <p className="text-2xl font-semibold text-[#ffa351]">
                                {winner.lotteryNumber}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </>

    );
};

export default LotteryResult
