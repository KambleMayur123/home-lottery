import React, { useState, useRef, useEffect } from "react";


interface AccordionItem {
    title: string;
    content: string;
}


const accordionData: AccordionItem[] = [
    {
        title: "Providing Housing Facilities",
        content: "If this scheme is aimed at providing housing for economically weaker sections, it can be included as a CSR initiative. The company can address the housing issues of underprivileged people by developing affordable and sustainable housing schemes for them.",
    },
    {
        title: "Encouraging Social Philanthropy",
        content: "A portion of the proceeds from the lottery can be utilized for social causes. For example, if some funds are used to build homes for differently-abled individuals, senior citizens, or orphaned children, it would result in significant social benefits.",
    },
    {
        title: "Focusing on Affordable Housing",
        content: "Along with providing the opportunity to win a dream home, helping construct affordable housing for everyone can be a significant CSR initiative. This would highlight the company's social commitment while simultaneously enhancing its brand image.",
    },
    {
        title: "Uplifting Local Communities",
        content: "The funds generated from the lottery can be used to address the needs of local communities. For example, the company can establish facilities such as schools, healthcare centers, and water supply systems, benefiting a larger number of people.",
    },
    {
        title: "Accountability and Transparency",
        content: "By keeping the lucky draw process transparent, the company can earn the trust of the participants. The method for selecting the winners in the lottery can be clearly outlined to ensure fairness and clarity.",
    },
];

const Accordion: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Add max-height dynamically based on the content height
    useEffect(() => {
        contentRefs.current.forEach((content, index) => {
            if (content) {
                content.style.maxHeight =
                    activeIndex === index ? `${content.scrollHeight}px` : "0px";
            }
        });
    }, [activeIndex]);
    return (
        <div className="max-w-2xl mx-auto mt-4">
            {accordionData.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                    <button
                        className="w-full text-left py-4 px-5 flex justify-between items-center shadow-sm rounded-md hover:bg-gray-200"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="text-lg font-medium text-gray-800">{item.title}</span>
                        <svg
                            className={`w-5 h-5 transform transition-transform ${activeIndex === index ? "rotate-180" : "rotate-0"
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div
                        ref={(el) => {
                            contentRefs.current[index] = el;
                        }}
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{ maxHeight: "0px" }}
                    >
                        <div className="p-5 text-gray-700 bg-white">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
