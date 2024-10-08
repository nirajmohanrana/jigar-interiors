import { MobileNav } from "@/components/mobile-nav";
import { MainNav } from "@/components/main-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex py-2 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
