import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Mumbaicity from "../../../public/assets/mumbai.jpg"
import Coch from "../../../public/assets/coch.jpg"
import Fam from "../../../public/assets/famm.jpg"

import Image from 'next/image';
import Accordion from "../accordion";

const AboutPage: React.FC = () => {

    return (<>
        <Navbar />
        <main className='bg-[#f1f5fa] lg:mt-11 mt-16 mb-11 lg:p-6'>
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:ml-20 lg:mr-20">
                    {/* First Column */}
                    <div className=" flex-col justify-center">
                        <h2 className="lg:text-4xl text-xl font-semibold mb-4">Transforming Lives Through Exceptional Homes</h2>
                        <p className="text-gray-600 font-bold mt-9">
                            Providing housing facilities
                            If the scheme involves building houses for economically weaker sections, it will be included in CSR activities. Companies can provide shelter to their problems by building cost-effective people and population housing schemes.
                        </p>
                        <p className="mt-4">We have started this project through Lucky Dream Home with the aim of providing homes to the poor and underprivileged in society. This project has been initiated to contribute to the development of society and to help those in need.</p>
                        <div className="mt-6">
                            <h3 className="font-bold text-base">K. Vivekanand</h3>
                            <p className="">Director Of Brsp Rojgaraghadi Foundation</p>
                        </div>

                    </div>

                    {/* Second Column */}
                    <div className="flex justify-center items-center">
                        <Image
                            src={Mumbaicity}
                            alt="CItyimage"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:ml-20 lg:mr-20">
                    {/*First  Column */}
                    <div className="flex justify-center items-center">
                        <Image
                            src={Fam}
                            alt="CItyimage"
                            className="rounded-lg shadow-md h-auto w-full"
                        />
                    </div>
                    {/* Second Column */}
                    <div className=" flex-col justify-center">
                        <h2 className="lg:text-4xl text-xl font-semibold mb-4"> CSR LDH adheres to social responsibility & will benefit society</h2>
                        <Accordion />

                    </div>


                </div>
            </div>


            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:ml-20 lg:mr-20">
                    {/* First Column */}
                    <div className="flex justify-center items-center">
                        <Image
                            src={Coch}
                            alt="CItyimage"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    {/*  Second Column */}
                    <div className=" flex-col justify-center">
                        <h2 className="text-4xl font-semibold mb-4">How the CSR Lucky Dream Home works</h2>
                        <div>
                            <p>Enactment of Companies Act, 2013 by the Ministry of Corporate Affairs, Government of India was one of the world's largest experiments of introducing the CSR as a mandatory provision by imposing statutory obligation on Companies to take up CSR projects towards social welfare activities. This has made India the only country which has regulated and mandated CSR for some select categories of companies registered under the Act. This CSR Initiative will push the nation towards achievement of sustainable development goals and public-private partnership in transforming India.</p>

                        </div>
                    </div>

                </div>
            </div>
        </main>
        <Footer />
    </>
    );
}
export default AboutPage;
