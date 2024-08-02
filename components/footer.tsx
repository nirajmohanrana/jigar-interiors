import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const footerLinks = [
  {
    text: "123 Main Street, Mumbai, India",
    icon: IoLocationSharp,
    url: "https://maps.google.com?q=Your+Business+Location",
  },
  {
    text: "Call (123) 456-7890",
    url: "tel:+1234567890",
    icon: IoIosCall,
  },
  {
    text: "info@example.com",
    url: "mailto:info@example.com",
    icon: IoIosMail,
  },
  {
    text: "Follow us on Instagram",
    url: "https://instagram.com/yourprofile",
    icon: AiFillInstagram,
  },
  {
    text: "Like us on Facebook",
    url: "https://facebook.com/yourprofile",
    icon: FaFacebook,
  },
];

const Footer = () => {
  return (
    <div className="bg-foreground text-background px-4 py-8">
      <div className="w-full mx-auto md:max-w-6xl">
        <p className="text-2xl font-bold tracking-wide">Reach Us</p>
        <div className="mt-2 w-1/3 h-px bg-primary" />
        <div className="mt-1 w-1/3 h-1 bg-primary" />

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-6">
              <link.icon className="h-6 w-6 text-2xl text-primary" />
              <Link href={link.url}>{link.text}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
