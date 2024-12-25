import { MdWhatsapp } from "react-icons/md";

const StickyWhatsappIcon: React.FC = () => {
  const phoneNumber = '9076469351' // Replace with your WhatsApp number
  const message = 'Hello! I have a question.' // Optional pre-filled message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div 
    className="fixed bottom-9 right-8 z-50 cursor-pointer"
    onClick={handleClick}
  >
    <div className="relative">
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
      <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-75"></div>
      <div className="relative bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors duration-300">
        <MdWhatsapp  className="w-8 h-8 text-white" />
      </div>
    </div>
  </div>
  );
};

export default StickyWhatsappIcon;
