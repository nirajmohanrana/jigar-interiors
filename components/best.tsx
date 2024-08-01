import { BsHouses } from "react-icons/bs";
import { LiaUserCheckSolid } from "react-icons/lia";
import { TbBulb } from "react-icons/tb";
import { PiCompassRose } from "react-icons/pi";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineFieldTime } from "react-icons/ai";

import HeroImg from "@/public/assets/hero.jpg";

const best = [
  { icon: BsHouses, name: "25 Years of Experience" },
  { icon: LiaUserCheckSolid, name: "Customer Satisfaction" },
  { icon: TbBulb, name: "Innovative Designers" },
  { icon: PiCompassRose, name: "Best Qaulity" },
  { icon: FiThumbsUp, name: "10 Years Warranty" },
  { icon: AiOutlineFieldTime, name: "On Time Delivery" },
];

const Best = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-8 bg-[url('https://raw.githubusercontent.com/nirajmohanrana/jigar-interiors/main/public/assets/kitchen.png')]">
      <p className="text-4xl text-background font-bold tracking-wide [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-foreground">
        Why We Are Best
      </p>
      <div className="mt-2 w-1/3 h-px bg-primary" />
      <div className="mt-1 w-1/3 h-1 bg-primary" />

      <div className="mx-auto w-full md:max-w-5xl mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {best.map((service) => (
          <div
            key={service.name}
            className="py-8 px-2 flex flex-col items-center bg-background text-foreground hover:bg-primary hover:text-background transition-all duration-500"
          >
            <service.icon className="text-5xl" />
            <p className="mt-6 text-lg font-bold">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Best;
