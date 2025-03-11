import { useState } from "react";

interface GetWinnersButtonProps {
    getWinners: () => void; // Function type that returns nothing
}

const GetWinnersButton: React.FC<GetWinnersButtonProps> = ({ getWinners }) => {
    const [step, setStep] = useState(0);

    const handleConfirm = () => {
        if (step === 1) setStep(2);
        else if (step === 2) {
            getWinners(); // Call the function
            setStep(0); // Reset confirmation state
        }
    };

    return (<>

        <button
            className="ml-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out"
            onClick={() => setStep(1)}
        >
            Get Winners
        </button>

        {step > 0 && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p className="text-lg font-semibold mb-4">
                        {step === 1
                            ? "Are you sure you want to get the winners?"
                            : "Final confirmation. This action cannot be undone. Proceed?"}
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            onClick={handleConfirm}
                        >
                            Yes
                        </button>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={() => setStep(0)}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
    );
};

export default GetWinnersButton;
