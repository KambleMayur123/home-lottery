import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardPage = () => {
    const [records, setRecords] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`//index.php?action=getRecords&page=${currentPage}`);
                setRecords(response.data.records);
                setTotalPages(response.data.totalPages);
            } catch (err: any) {
                // Handle error
                console.error('Error fetching records:', err);
            }
        };

        fetchData();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h2>

            <div className="overflow-x-auto bg-gray-50 shadow-lg rounded-lg">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="px-4 py-2 text-left">ID</th>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Date of Birth</th>
                            <th className="px-4 py-2 text-left">Mobile</th>
                            <th className="px-4 py-2 text-left">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => (
                            <tr key={record.id} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2">{record.id}</td>
                                <td className="px-4 py-2">{record.name}</td>
                                <td className="px-4 py-2">{record.date_of_birth}</td>
                                <td className="px-4 py-2">{record.mobile_number}</td>
                                <td className="px-4 py-2">{record.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-6 flex justify-between items-center">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                >
                    Previous
                </button>

                <span className="text-lg font-medium text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DashboardPage;
