import { GiPaintRoller } from "react-icons/gi";
import { PiWall } from "react-icons/pi";
import { GiWindow } from "react-icons/gi";
import { MdTableRestaurant } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import { PiLightbulbFilamentFill } from "react-icons/pi";

const services = [
  {
    name: "Painting & Polish",
    icon: GiPaintRoller,
    description:
      "Get assistance in selecting and applying paints on Walls that express your true personal style.",
  },
  {
    name: "Modular Kitchen",
    icon: PiWall,
    description:
      "Sleek-made modular kitchen solutions flexibly designed with elegance to meet your needs.",
  },
  {
    name: "Customized Furniture",
    icon: GiWindow,
    description:
      "Complement your space with seamless designs that give you a personalized feeling.",
  },
  {
    name: "Civil work",
    icon: BsBoxes,
    description:
      "All types of Civil work by our professionals which that give you a personalized feeling.",
  },
  {
    name: "Furnishing",
    icon: MdTableRestaurant,
    description:
      "Providing smart furnishing solutions with thoughtful designs for your space.",
  },
  {
    name: "Electrical",
    icon: PiLightbulbFilamentFill,
    description:
      "Be amazed from our daylight design and the art of illumination. Choose from a wide-range of lighting options to suit your needs and preferences.",
  },
];

const Services = () => {
  return (
    <div className="w-full">
      <p className="text-2xl font-bold tracking-wide">Our Best Services</p>
      <div className="mt-2 w-1/3 h-px bg-primary" />
      <div className="mt-1 w-1/3 h-1 bg-primary" />

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.name}
            className="group p-2 flex items-start gap-4 hover:bg-primary transition-all duration-500"
          >
            <div className="w-14 h-14 aspect-square bg-primary group-hover:bg-background p-1 transition-all duration-500">
              <service.icon className="text-5xl p-1 text-background group-hover:text-primary transition-all duration-500" />
            </div>
            <div>
              <p className="text-lg font-bold group-hover:text-background transition-all duration-500">
                {service.name}
              </p>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-background transition-all duration-500">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
