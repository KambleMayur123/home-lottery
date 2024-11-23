import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Button from "@/components/ui/button";
import { Link } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";

const LotteryResult: React.FC = () => {


    return (<>
        <Navbar />
        <div className="bg-[#f1f5fa]">
            <div className=" max-w-4xl mx-auto mt-20 mb-11 p-6 space-y-8">
                <header className="text-center">
                    <h1 className="text-3xl font-bold text-black">Mega Millions Results</h1>
                    <p className="text-xl text-gray-600">Draw Date: November 17, 2023</p>
                </header>

                <section className="bg-white rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Winning Numbers</h2>
                    <div className="flex justify-center items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold">
                            07
                        </div>
                        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold">
                            13
                        </div>
                        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold">
                            24
                        </div>
                        <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold">
                            39
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Prize Breakdown</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-2 text-left">Match</th>
                                    <th className="border p-2 text-left">Winners</th>
                                    <th className="border p-2 text-left">Prize</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                    <td className="border p-2">3 + Mega Ball</td>
                                    <td className="border p-2">809</td>
                                    <td className="border p-2">$200</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border p-2">3</td>
                                    <td className="border p-2">20,112</td>
                                    <td className="border p-2">$10</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="border p-2">2 + Mega Ball</td>
                                    <td className="border p-2">16,973</td>
                                    <td className="border p-2">$10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <h2 className="text-2xl font-semibold mb-2">Next Draw</h2>
                    <p className="text-xl mb-4">November 21, 2023</p>
                    <p className="lg:text-3xl font-bold mb-4">Estimated Jackpot: $300 Million</p>
                    <Button className='mt-4 bg-[#f7b245] lg:w-[20%] w-max hover:bg-[#e08b01]'>
                        <Link href="/ticket" className='flex justify-center items-center'>
                            Get Your Ticket Now <FiArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </section>
            </div>
        </div>
        <Footer />
    </>

    );
};

export default LotteryResult
