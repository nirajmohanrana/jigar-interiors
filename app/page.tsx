import Best from "@/components/best";
import Hero from "@/components/hero";
import Services from "@/components/services";
import { Button } from "@/components/ui/button";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <div className="mx-auto w-full md:max-w-6xl">
        <Welcome />
        <Services />
      </div>
      <Best />
    </>
  );
}
