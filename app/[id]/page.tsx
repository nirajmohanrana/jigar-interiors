"use client";

import { notFound, usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

type PhotoCategory = keyof typeof siteConfig.photosLength;

const Gallery = () => {
  const pathname = usePathname();

  const name = pathname.split("/")[1] as keyof typeof siteConfig.photosLength;

  if (!name || !(name in siteConfig.photosLength)) {
    return notFound();
  }

  const length = siteConfig.photosLength[name];

  console.log(
    `https://raw.githubusercontent.com/nirajmohanrana/jigar-interiors/main/public/assets/${name}/${name}${1}.jpg`
  );

  return (
    <div className="p-5 flex flex-wrap justify-center items-center gap-6">
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <Drawer key={index}>
            <DrawerTrigger asChild>
              <div className="overflow-hidden w-48 h-48 flex justify-center items-center border p-1">
                <Image
                  src={`https://raw.githubusercontent.com/nirajmohanrana/jigar-interiors/main/public/assets/${name}/${name}${
                    index + 1
                  }.jpg`}
                  alt={`${name}-${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle className="uppercase">{name}</DrawerTitle>
                </DrawerHeader>
                <div className="p-4 flex justify-center">
                  <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                      {Array.from({ length }).map((_, carouselIndex) => (
                        <CarouselItem key={carouselIndex}>
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-1">
                                <Image
                                  src={`https://raw.githubusercontent.com/nirajmohanrana/jigar-interiors/main/public/assets/${name}/${name}${
                                    carouselIndex + 1
                                  }.jpg`}
                                  alt={`${name}-${carouselIndex + 1}`}
                                  width={400}
                                  height={400}
                                  className="w-full h-full object-cover"
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        ))}
    </div>
  );
};

export default Gallery;
