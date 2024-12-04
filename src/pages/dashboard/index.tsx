import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiMagnifyingGlass } from "react-icons/hi2";

const DashboardPage = () => {
    const [records, setRecords] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const limit = 10; // Limit of records per page

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`http://localhost/index.php?action=getRecords&page=${currentPage}&limit=${limit}`);
                setRecords(response.data.records);
                setTotalPages(response.data.totalPages);
            } catch (err: any) {
                console.error('Error fetching records:', err);
                setError('Failed to load data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage]);

    // Debounce the search input for better performance
    const debounce = (func: Function, delay: number) => {
        let timeoutId: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const handleSearchDebounced = debounce((value: string) => {
        setSearchTerm(value);
    }, 300);

    // Updated Filtering Logic
    const filteredRecords = records.filter((record) =>
        record.name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
        record.mobile_number.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
        record.address.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">User Data Dashboard</h2>

            {/* Search input */}
            <div className="relative mb-4">
                <HiMagnifyingGlass className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search users..."
                    onChange={(e) => handleSearchDebounced(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Loading and Error States */}
            {loading ? (
                <p className="text-center text-gray-500">Loading data...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <>
                    {/* Table */}
                    <div className="overflow-x-auto bg-gray-50 shadow-lg rounded-lg">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-blue-600 text-white">
                                    <th className="px-4 py-2 text-left">ID</th>
                                    <th className="px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">Date of Birth</th>
                                    <th className="px-4 py-2 text-left">Mobile</th>
                                    <th className="px-4 py-2 text-left">Address</th>
                                    <th className="px-4 py-2 text-left">Annual Income</th>
                                    <th className="px-4 py-2 text-left">Owns House</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredRecords.length > 0 ? (
                                    filteredRecords.map((record) => (
                                        <tr key={record.id} className="border-b hover:bg-gray-100">
                                            <td className="px-4 py-2">{record.id}</td>
                                            <td className="px-4 py-2">{record.name}</td>
                                            <td className="px-4 py-2">{record.date_of_birth}</td>
                                            <td className="px-4 py-2">{record.mobile_number}</td>
                                            <td className="px-4 py-2">{record.address}</td>
                                            <td className="px-4 py-2">{record.annual_income}</td>
                                            <td className="px-4 py-2">{record.own_house}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={8} className="text-center py-4 text-gray-500">
                                            No records found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 flex justify-center">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-300 text-gray-700'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    {/* Next/Prev Buttons */}
                    <div className="mt-4 flex justify-between items-center">
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
                </>
            )}
        </div>
    );
};

export default DashboardPage;
