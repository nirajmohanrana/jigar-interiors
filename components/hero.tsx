import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const cards = [
  {
    imgLink:
      "https://images.livspace-cdn.com/w:1440/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/india-dcb-1633067910-VxdU7/bedroom-1633067954-P1lve/spl-in-br-0003-1633081269-TaRzy/2019-09-05-marketing-render-mbr4-op1-v1-vn-01-1633081285-B1aKz.jpg",
    title: "Solution for Joyful Living",
  },
  {
    imgLink:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    title: "Love Where You Live",
  },
  {
    imgLink:
      "https://www.spectruminteriors.co.in/wp-content/uploads/2020/12/Office-Interior-12.jpeg",
    title: "Transforming Space into Innovative Design",
  },
  {
    imgLink: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    title: "Creating Beautiful Kitchen Spaces",
  },
  {
    imgLink:
      "https://www.ulcdn.net/media/collection%20and%20listing/End_to_end_wardrobe_design.jpg?1684404839",
    title: "Come Say Hi to Beautiful Interiors",
  },
];

const Hero = () => {
  return (
    <Carousel className="w-full group">
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index}>
            <div className="flex h-[500px] w-full relative select-none">
              <Image
                src={card.imgLink}
                alt={card.title}
                width={1200}
                height={1200}
                className="w-full h-full object-cover object-bottom"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-100" />

              <p className="absolute bottom-12 md:bottom-16 left-3 md:left-24 text-white text-2xl md:text-5xl font-black tracking-wider">
                {card.title}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out left-5" />
      <CarouselNext className="scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out right-5" />
    </Carousel>
  );
};

export default Hero;
