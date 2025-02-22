import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { FaFileAlt, FaDownload } from "react-icons/fa";

const LegalStatusCertifications = () => {
  const documents = [
    { name: "Certificate of Incorporation", url: "/assets/doc/doc.pdf" },
    { name: "e-PAN", url: "/assets/doc/doc2.pdf" },
    { name: "DARPAN Registration", url: "/assets/doc/doc3.pdf" },
    { name: "12A Certificate", url: "/assets/doc/doc4.pdf" },
    { name: "80G Certificate", url: "/assets/doc/doc5.pdf" },
    { name: "CSR Registration", url: "/assets/doc/doc6.pdf" },
    { name: "ISO 9001:2015", url: "/assets/doc/doc7.pdf" },
  ];

  return (<>
    <Navbar />

    <div className="min-h-screen bg-gray-50 lg:mt-[4.75rem] mt-16 mb-11 lg:p-6">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 text-center relative">
        <div className="absolute inset-0 bg-opacity-20 bg-gray-800"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold">Legal Status & Certifications</h1>
          <p className="mt-3 text-gray-300 text-lg">
            Demonstrating our commitment to excellence, compliance, and transparency.
          </p>
        </div>
      </div>

      {/* Credentials Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Credentials</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          We maintain the highest standards of legal compliance and industry certifications. Below,
          you'll find all the documents that attest to our commitment to quality, safety, and ethical
          business practices.
        </p>

        {/* Document Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center transition-transform transform hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{doc.name}</h3>
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full flex items-center justify-center bg-blue-600 text-white p-3 rounded-lg mb-3 hover:bg-blue-700 transition"
              >
                <FaFileAlt className="mr-2" /> View Document
              </a>
              <a
                href={doc.url}
                download
                className="block w-full flex items-center justify-center bg-gray-300 p-3 rounded-lg hover:bg-gray-400 transition"
              >
                <FaDownload className="mr-2" /> Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Footer />


  </>);
};

export default LegalStatusCertifications;
