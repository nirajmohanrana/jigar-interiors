import Image from "next/image";
import Man from "@/public/assets/businessman.png";
import { LuCheckCircle } from "react-icons/lu";
import { PiCompassRose } from "react-icons/pi";

const Welcome = () => {
  return (
    <div className="md:flex items-start mt-4 mb-16">
      <div className="bg-foreground text-background w-full md:w-1/2 px-6 py-4 md:px-4 animate-in slide-in-from-left duration-500 delay-150">
        <p className="text-3xl font-bold tracking-wide">
          Jigar Interiors Welcomes You!
        </p>
        <div className="mt-2 w-1/3 h-px bg-primary" />
        <div className="mt-1 w-1/3 h-1 bg-primary" />
        <p className="mt-10 text-xl font-bold tracking-wide">
          We propose joy & positivity, as per your needs and budget.{" "}
          <span className="text-primary">Jigar Interiors</span>
        </p>

        <p className="mt-8 tracking-wide leading-loose">
          Redesigning space with creativity is an art which, which allows us to
          spread happiness and satisfaction among people. We believe interior
          plays a vital role in varying moods and purposes. Goodluck interior
          offers you a wide range of interior designing services including
          flats, buildings, apartments, bungalows, showrooms, offices, clubs and
          restaurants and much more. We bring luxury to you at affordable price
          that convert your residential or corporate space beyond the ordinary
          to extraordinary.
        </p>
      </div>

      <div className="w-full md:w-1/2 px-16 py-10">
        <div className="flex items-start gap-4">
          <Image src={Man} alt="Man" width={60} height={60} />
          <div>
            <p className="text-xl font-bold">We are Professional</p>
            <p className="italic text-primary">Designers</p>

            <p className="mt-2 text-sm text-muted-foreground opacity-80">
              Our experience designer works with you to finalize your design in
              photorealistic based on your choice and budget which allows you to
              get involve with the design team to refresh your space.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-4">
          <div>
            <LuCheckCircle className="h-14 w-14" />
          </div>
          <div className="ml-1">
            <p className="text-xl font-bold">We are Trusted</p>
            <p className="italic text-primary">Team Members</p>

            <p className="mt-2 text-sm text-muted-foreground opacity-80">
              Your idea of Dream Design is our responsibility. Our trusted team
              of professional Interior Designers has got you covered from
              designing to execution. We oversee the timely completion of your
              project and makes sure the workflow is seamless.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-4">
          <div>
            <PiCompassRose className="h-14 w-14" />
          </div>
          <div className="ml-1">
            <p className="text-xl font-bold">We are Expert</p>
            <p className="italic text-primary">Interiors</p>

            <p className="mt-2 text-sm text-muted-foreground opacity-80">
              We ensure your space design is in the hands of our team of
              experienced interior designers. Our expert provides you with
              tailor made crafted designs by taking care of your personal style,
              so you get a personalized touch in your dream home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
