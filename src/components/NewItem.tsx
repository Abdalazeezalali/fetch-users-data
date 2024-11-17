"use client";
import { User } from "@/constants/types";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { useState } from "react";
function getLocalUsers():User[]{
    try{
        const users=localStorage.getItem("users")
        if(users){
            return JSON.parse(users)
        }
        return []
    }catch{
        return []
    }
}
const NewItem = () => {
    const [users,setUsers]=useState(getLocalUsers())
    const deleteUser=(id:string)=>{
        const newUser=users.filter((user:User)=>user.id !==id)
        localStorage.setItem("users",JSON.stringify(newUser))
        setUsers(getLocalUsers())
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            
            {
            users.map(
            (newUser: User, index: number) => {
                return (
                <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
                    <div className="grid-elements">
                    <Link href={`/newUser/${newUser.id}`} id={newUser.id}>
                        <div className=" hover:bg-slate-300 dark:hover:bg-slate-600 hover:opacity-30 rounded-md p-5 cursor-pointer ">
                        <p className="font-semibold text-2xl">{newUser.name}</p>
                        <p className="truncate w-24">{newUser.email}</p>
                        </div>
                    </Link>
                    <button
                    onClick={()=>{
                        if(newUser.id){
                            deleteUser(newUser.id)
                        }
                    }}
                    className="text-white py-2 px-4 rounded-lg bg-red-500 hover:opacity-70 transition-all" >X</button>
                    <Link
                    href={`/updateUser/${newUser.id}`}
                    className=" mx-5 text-white py-2 px-4 rounded-lg bg-green-500 hover:opacity-70 transition-all" >E</Link>
                    </div>
                </Grid>
                );
            }
            )}
        </Grid>
        </Box>
    );
};

export default NewItem;
