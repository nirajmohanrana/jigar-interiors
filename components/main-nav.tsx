"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteNav } from "@/config/site";
import Logo from "@/components/icons/logo";

export function MainNav() {
  return (
    <div className="mr-4 flex justify-between w-full">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Logo className="w-56 text-primary" />
      </Link>
      <nav className="hidden md:flex items-center text-sm">
        {siteNav.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "transition-colors text-secondary-foreground hover:text-secondary-foreground/80"
            )}
          >
            {nav.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
