"use client";

import { User } from "@/constants/types";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
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
  const random=newUser?.id
  console.log(random)

  const [FullName, setFullName] = useState("");
  const [Company, setCompany] = useState("");
  const [Phone, setPhone] = useState("");
  const [Location, setLocation] = useState("");
  const [Email, setEmail] = useState("");
  const UpdateUser = async () => {
    const newUser=users.filter((user:User)=>user.id !==id)
    localStorage.setItem("users",JSON.stringify(newUser))
    setUsers(getLocalUsers())
    const usersLocalStorage = localStorage.getItem("users");
    if (usersLocalStorage) {
      const users: User[] = JSON.parse(usersLocalStorage);
      users.push({
        name: FullName ,
        email: Email,
        address: { street: Location },
        phone: Phone,
        company: { name: Company },
        id:String(random)
      });
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      const users: User[] = [];
      users.push({
        name: FullName ,
        email: Email,
        address: { street: Location },
        phone: Phone,
        company: { name: Company },
        id:String(random)
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
  };
  const { isSignedIn } = useUser();
  return (
    isSignedIn && (
      <div className="p-5">
      <form onSubmit={() => UpdateUser()}>
        <div className="grid gap-6 mb-6 md:grid-cols-2 ">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              name="FullName"
              value={FullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`${newUser?.name}`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              value={Company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`${newUser?.company?.name}`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              value={Phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`${newUser?.phone}`}
              pattern="123-45-678"
              required
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Location
            </label>
            <input
              type="text"
              id="website"
              value={Location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`${newUser?.address?.city} ${newUser?.address?.street}${newUser?.address?.suite}${newUser?.address?.zipcode}`}
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={`${newUser?.email}`}
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
    </div>
    )
  );
};

export default Page;
