import { useState } from "react";

interface StartNewLotteryButtonProps {
    startNewLottery: () => void; // Function that returns nothing
  }
  
  const StartNewLotteryButton: React.FC<StartNewLotteryButtonProps> = ({ startNewLottery }) => {
    const [step, setStep] = useState(0);
  
    const handleConfirm = () => {
      if (step === 1) setStep(2);
      else if (step === 2) {
        startNewLottery(); // Call function
        setStep(0); // Reset state
      }
    };
  
    return (
      <>
        <button
          className="ml-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out"
          onClick={() => setStep(1)}
        >
          Start New Lottery
        </button>
  
        {step > 0 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-lg font-semibold mb-4">
                {step === 1
                  ? "Are you sure you want to start a new lottery?"
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
  
  export default StartNewLotteryButton;
  