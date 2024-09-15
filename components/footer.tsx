"use client";

import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import MapContainer to prevent SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const footerLinks = [
  {
    text: "Shop no 7 Vithal Hari tower, Old Viva College Rd., Virar (W)",
    icon: IoLocationSharp,
    url: "https://www.google.com/maps/place/VITHAL+HARI+TOWER/@19.4551291,72.8064361,154a,35y,45t/data=!3m1!1e3!4m6!3m5!1s0x3be7a91b5242b2fb:0x5dbb8496715e654c!8m2!3d19.4564704!4d72.8070546!16s%2Fg%2F11vkn204tt?entry=ttu",
  },
  {
    text: "Call (123) 456-7890",
    url: "tel:+1234567890",
    icon: IoIosCall,
  },
  {
    text: "getsuggestion@jigarinterior.in",
    url: "mailto:getsuggestion@jigarinterior.in",
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-foreground text-background px-4 py-8">
      <div className="w-full mx-auto md:max-w-6xl">
        <p className="text-2xl font-bold tracking-wide">Reach Us</p>
        <div className="mt-2 w-1/3 h-px bg-primary" />
        <div className="mt-1 w-1/3 h-1 bg-primary" />

        <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {footerLinks.map((link, index) => (
              <div key={index} className="flex items-center gap-6">
                <link.icon className="h-6 w-6 text-2xl text-primary" />
                <Link href={link.url}>{link.text}</Link>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 h-64">
            {isMounted && (
              <MapContainer
                center={[19.433001, 72.862427]}
                zoom={15}
                attributionControl={false}
                scrollWheelZoom={false}
                className="w-full h-full"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[19.433001, 72.862427]}>
                  <Popup>
                    <Link
                      href="https://www.google.com/maps/place/VITHAL+HARI+TOWER/@19.4551291,72.8064361,154a,35y,45t/data=!3m1!1e3!4m6!3m5!1s0x3be7a91b5242b2fb:0x5dbb8496715e654c!8m2!3d19.4564704!4d72.8070546!16s%2Fg%2F11vkn204tt?entry=ttu"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <p className="text-center">
                        Shop no 7 Vithal Hari tower, Virar (W)
                        <br />
                        <span className="text-xs opacity-50">
                          View on Google Maps
                        </span>
                      </p>
                    </Link>
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
