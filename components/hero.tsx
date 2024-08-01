import Image from "next/image";
import HeroImg from "@/public/assets/hero.jpg";

const Hero = () => {
  return (
    <div className="w-full h-96">
      <Image
        src={HeroImg}
        alt="hero"
        fill
        className="object-cover w-full h-full overflow-hidden"
      />
    </div>
  );
};

export default Hero;
