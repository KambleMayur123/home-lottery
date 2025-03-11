import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// Define the type for winner objects
type Winner = {
  name: string;
  ticket_number: number; // Changed to number
};

const LotteryResult: React.FC = () => {
  const [winners, setWinners] = useState<Winner[]>([]); // Specify the type of winners

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/index.php?action=winners`);
        setWinners(response.data.winners);
      } catch (err: any) {
        console.error('Error fetching records:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-[65vh] max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-20 mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Lucky Dream Home - Winners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {winners?.map((winner, index) => (
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
                  {winner.ticket_number} {/* Now it's treated as a number */}
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

export default LotteryResult;
    