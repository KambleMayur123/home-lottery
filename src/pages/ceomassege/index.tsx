import Image from 'next/image'
import Ceo from '../../../public/assets/ceo.jpeg'
const CeoMessage: React.FC = () => {

    return (
        <section className="bg-gradient-to-br bg-[#f1f5fa] container mx-auto lg:py-12 lg:px-12 py-12 px-4 ">
            <div className="container mx-auto lg:px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">
                            A Message From Our CEO
                        </h2>
                        <div className="relative pl-6 border-l-4 border-primary">
                            <blockquote className="text-lg md:text-xl text-muted-foreground">
                                <p className="mb-4">
                                &quot;We at Lucky Dream Home are committed to providing homes to the underprivileged, fostering societal development, and helping those in need achieve their dream of owning a home.&quot;
                                </p>
                                <p>
                                &quot;every family deserves a roof over their head. Lucky Dream Home is making it happen for those in need.&quot;
                                </p>
                            </blockquote>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div>
                                <p className="font-semibold text-foreground">K. Vivekanand</p>
                                <p className="text-sm text-muted-foreground">Director Of Brsp Rojgaraghadi Foundation </p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src={Ceo}
                                alt="CEO Portrait"
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <p className="text-lg font-semibold">K. Vivekanand</p>
                                <p className="text-sm opacity-75"> Director Of Brsp Rojgaraghadi Foundation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CeoMessage;