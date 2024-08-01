const Hero = () => {
  return (
    <div className="z-0 relative w-full h-[450px] bg-[url('https://raw.githubusercontent.com/nirajmohanrana/jigar-interiors/main/public/assets/hero.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="absolute bg-primary/50 w-1/2 clip-custom h-full">
        <div className="h-full text-background flex flex-col items-start justify-center px-16">
          <p className="text-3xl font-bold [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-foreground">
            Solution For Joy Living
          </p>
          <p className="mt-4 pr-28 [text-shadow:2px_1px_2px_var(--tw-shadow-color)] shadow-foreground">
            Innovative interior designing services for your home and commercial
            place with over 20 years of experience.
          </p>
        </div>
      </div>
      <div className="absolute right-0 w-1/12 h-full bg-primary/50" />
    </div>
  );
};

export default Hero;
