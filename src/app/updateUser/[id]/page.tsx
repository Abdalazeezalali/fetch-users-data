"use client";

import { User } from "@/constants/types";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
type Props = {
    params: { id: string };
  };
  function getLocalUsers(): User[] {
    try {
      const users = localStorage.getItem("users");
      if (users) {
        return JSON.parse(users);
      }
      return [];
    } catch {
      return [];
    }
  }
const Page = ({ params }: Props) => {
  const { id } = params;
  console.log(id);
  const [users, setUsers] = useState(getLocalUsers());
  const newUser = users.find((user: User) => user.id === id);
  if (id == newUser?.id) {
    console.log("test");
  }
  const random=Math.floor((Math.random()*10000000) )
  console.log(random)
  const [FirstName, setFirstName] = useState("");
  const createUser = async () => {
    const usersLocalStorage = localStorage.getItem("users");
    if (usersLocalStorage) {
      const users: User[] = JSON.parse(usersLocalStorage);
      users.push({
        name: FirstName 
        // + SecondName,
        // email: Email,
        // address: { street: Location },
        // phone: Phone,
        // company: { name: Company },
        // id:String(random)
      });
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      const users: User[] = [];
      users.push({
        name: FirstName 
        // + SecondName,
        // email: Email,
        // address: { street: Location },
        // phone: Phone,
        // company: { name: Company },
        // id:String(random)
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
  };
  const { isSignedIn } = useUser();
  return (
    isSignedIn && (
      <div className="p-5">
      <form onSubmit={() => createUser()}>
        <div className="grid gap-6 mb-6 md:grid-cols-2 ">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              name="FirstName"
              value={newUser?.name}
              // onChange={(e) => {
              //   setFirstName(e.target.value);
              // }}
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
         
        </div>
        

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
    )
  );
};

export default Page;
