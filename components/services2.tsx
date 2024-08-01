import Image from "next/image";
import Link from "next/link";
import path from "path";

const services = [
  {
    name: "Modular Kitchen",
    path: "/kitchen",
    url: "https://raw.githubusercontent.com/nirajmohanrana/jigar-interiors/main/public/assets/kitchen-square.png",
  },
  {
    name: "Wardrobes",
    path: "/wardrobes",
    url: "https://raw.githubusercontent.com/nirajmohanrana/jigar-interiors/main/public/assets/wardrobe.png",
  },
  {
    name: "TV Units",
    path: "/tv-units",
    url: "https://raw.githubusercontent.com/nirajmohanrana/jigar-interiors/main/public/assets/tv-units.jpg",
  },
  {
    name: "Bathroom Vanity",
    path: "/bathroom-vanity",
    url: "https://raw.githubusercontent.com/nirajmohanrana/jigar-interiors/main/public/assets/bathroom.jpg",
  },
  {
    name: "Beds Units",
    path: "/beds-units",
    url: "https://raw.githubusercontent.com/nirajmohanrana/jigar-interiors/main/public/assets/bed-units.png",
  },
  {
    name: "Sofa Units",
    path: "/sofa-units",
    url: "https://raw.githubusercontent.com/nirajmohanrana/jigar-interiors/main/public/assets/sofa.png",
  },
];

const Services2 = () => {
  return (
    <div className="w-full mx-auto my-16 px-4">
      <p className="text-4xl text-center font-bold tracking-wide">
        Our Best Services
      </p>
      <p className="uppercase text-center text-muted-foreground mt-2">
        WE MAKE YOU TO COME HOME EARLY
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {services.map((service, index) => (
          <Link
            key={service.name}
            href={service.path}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={service.url}
              alt={service.name}
              width={200}
              height={200}
            />
            <p className="mt-2 text-center text-foreground hover:text-primary text-xl font-bold">
              {service.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services2;
