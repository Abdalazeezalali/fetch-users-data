"use client"
import { User } from "@/constants/types";
import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { userEndPoints } from "@/constants/variables";
import NewItem from "./NewItem";
import {useEffect,useState} from 'react'
import { useUser } from "@clerk/nextjs";

// const getData = async () => {

    // fetch users data
//   const response = await fetch(userEndPoints.users);
//   if (!response.ok) {
//     throw new Error("failed");
//   }
  
//   return  response.json();


// };
export default   function Hero({}) {
  const [data,setData] = useState([])
  
  useEffect(()=>{
    fetch(userEndPoints.users).then(res => res.json())
    .then(data => {
      setData(data);
    }).catch(e=>console.log(e.message));
  },[])
  const users =  data;
  const { isSignedIn } = useUser();

  return isSignedIn && (
    <><Box sx={{ flexGrow: 1 }}>
      {/* Setting up the Fluid Grid system */}
      <Grid container spacing={2}>
        {users?.map((user: User) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={user.id}>
            <div className="grid-elements">
              <Link href={`users/${user.id}`}>
              <div className=" hover:bg-slate-300 dark:hover:bg-slate-600 hover:opacity-30 rounded-md p-5 cursor-pointer ">
                <p
                  
                  className="font-semibold text-2xl"
                >
                  {user.name}
                </p>
                <p className="truncate w-24">{user.email}</p>
              </div>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
    <NewItem/>
    </>
  )
}
