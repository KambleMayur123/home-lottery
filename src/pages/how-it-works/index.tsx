
import { FiArrowRight } from "react-icons/fi";

const HowItWorks: React.FC = () => {

   

    return (
        <section className="bg-[#f1f5fa] container mx-auto py-12 px-3 lg:px-0 text-center">
            <h2 className="lg:text-5xl text-3xl font-bold">How It Works</h2>
            <p className="mt-4 text-lg text-gray-700">
                Follow these simple steps to participate in our lottery.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-around mt-8 gap-9">

                <div className="bg-[white] max-w-xs rounded-lg text-center shadow-[0_2px_16px_#19283917] p-9 h-[300px] w-[100%] flex flex-col items-center justify-center ">
                    <FiArrowRight className="mx-auto h-12 w-12 text-[#2cb7f0]" />
                    <h3 className="text-2xl font-semibold mt-4">Step 1</h3>
                    <p className="mt-2">Choose your lucky numbers or opt for a quick pick.</p>
                </div>

                <div className="bg-[white] max-w-xs rounded-lg text-center shadow-[0_2px_16px_#19283917] p-9 h-[300px] w-[100%] flex flex-col items-center justify-center ">
                    <FiArrowRight className="mx-auto h-12 w-12 text-[#2cb7f0]" />
                    <h3 className="text-2xl font-semibold mt-4">Step 2</h3>
                    <p className="mt-2">Purchase your lottery ticket online securely.</p>
                </div>

                <div className="bg-[white] max-w-xs rounded-lg text-center shadow-[0_2px_16px_#19283917] p-9 h-[300px] w-[100%] flex flex-col items-center justify-center ">
                    <FiArrowRight className="mx-auto h-12 w-12 text-[#2cb7f0]" />
                    <h3 className="text-2xl font-semibold mt-4">Step 3</h3>
                    <p className="mt-2">Wait for the draw and check if you&apos;re a winner&#x21;</p>
                </div>
            </div>
        </section>
    )
}
export default HowItWorks;