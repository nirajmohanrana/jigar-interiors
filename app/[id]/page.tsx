"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Define the type for the path data
interface PathData {
  url: string;
  name: string;
  images?: string[]; // Optional, as not all entries have images
}

const paths: PathData[] = [
  { url: "kitchen", name: "Kitchen", images: [] },
  { url: "wardrobes", name: "Wardrobes", images: [] },
  { url: "tv-units", name: "TV Units", images: [] },
  { url: "bathroom-vanity", name: "Bathroom Vanity", images: [] },
  { url: "beds-units", name: "Beds Units", images: [] },
  { url: "sofa-units", name: "Sofa Units", images: [] },
];

const Page = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[1];
  const pathData = paths.find((path) => path.url === id);

  if (!pathData) {
    return (
      <div className="w-full p-4 md:max-w-7xl">
        <h1>Not Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:max-w-7xl">
      <h1>{pathData.name}</h1>
      <div className="mt-6 flex flex-wrap gap-1">
        {pathData.images && pathData.images.length > 0 ? (
          pathData.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={pathData.name}
              width={600}
              height={600}
              className="h-36 w-full object-cover"
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
};

export default Page;
