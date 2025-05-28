import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <>
      <Link
        className="fixed bottom-10 right-10 flex items-center justify-center p-3 rounded-full bg-[#25D366] text-white z-20 drop-shadow-lg transform transition-all duration-300 hover:scale-105"
        href="https://wa.me/+919986677996"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-white" size={40} />
        <span className="sr-only">WhatsApp</span>
      </Link>
    </>
  );
};

export default WhatsApp;
