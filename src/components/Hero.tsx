import { User } from "@/constants/types";
import { baseUrl } from "@/constants/variables";
import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

const getData = async () => {
  // fetch users data
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error("failed");
  }
  return response.json();
};
export default async function Hero({}) {
  const users = await getData();
  return (
    // use id , name and email from users
    //     <main className='w-[300px] h-[400px] mx-auto mt-20 flex flex-col gap-y-5 overflow-y-scroll'>
    //     {users?.map((user:User)=>(
    //         <div key={user.id}  className="flex gap-y-2 flex-col  hover:bg-slate-300 dark:hover:bg-slate-600 hover:opacity-30 rounded-md p-5 cursor-pointer ">
    //       <Link href={`users/${user.id}`} className="font-semibold text-2xl">{user.name}</Link>
    //       <p className="truncate w-24">{user.email}</p>
    // </div>
    //     ))}
    // </main>
    <Box sx={{ flexGrow: 1 }}>
      {/* Setting up the Fluid Grid system */}
      <Grid container spacing={2}>
        {users?.map((user: User) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={user.id}>
            <div className="grid-elements">
              <div className=" hover:bg-slate-300 dark:hover:bg-slate-600 hover:opacity-30 rounded-md p-5 cursor-pointer ">
                <Link
                  href={`users/${user.id}`}
                  className="font-semibold text-2xl"
                >
                  {user.name}
                </Link>
                <p className="truncate w-24">{user.email}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
