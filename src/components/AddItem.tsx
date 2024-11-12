"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
const AddItem = () => {
  const { isSignedIn } = useUser();
  return (
    isSignedIn && (
      <div>
        <Link
          href={"users/create"}
          className="block w-fit p-2 border-4 rounded-full bg-gray-600 text-white mx-auto hover:opacity-70 transition-all"
        >
          Add New User
        </Link>
      </div>
    )
  );
};

export default AddItem;
