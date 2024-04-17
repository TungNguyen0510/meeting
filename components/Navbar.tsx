import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "@/components/MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between fixed z-50 w-full dark:bg-dark-1 bg-sky-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold dark:text-white max-sm:hidden">
          My Meeting
        </p>
      </Link>

      <div className="flex items-center gap-5">
        <ThemeToggle />

        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
