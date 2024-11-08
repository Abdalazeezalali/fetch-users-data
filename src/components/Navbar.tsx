"use client";
import { User } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
const Navbar = () => {
  return (
    // simple navbar
    <nav className="flex justify-between items-center px-10 py-5 shadow-md dark:shadow-xl ">
      <div className="flex gap-x-5">
        <User />
        <Link href={"/"} className="font-semibold">
          Dashboard Users
        </Link>
      </div>
      <div className="flex gap-x-5 items-center">
      <ModeToggle />
      <SignedOut >
        <SignInButton mode="modal" >
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Sign In </button>
          </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
