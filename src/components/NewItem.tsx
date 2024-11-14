"use client";
import { User } from "@/constants/types";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
const NewItem = () => {
    // const tests=localStorage.getItem("users")
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            
            {
            JSON.parse(localStorage.getItem("users") ?? "[]").map(
            (newUser: User, index: number) => {
                // const result = JSON.parse(tests ?? "[]")
                // .filter(obj => obj.id === 2);
                // console.log(result)
                return (
                <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
                    <div className="grid-elements">
                    <Link href={`users/newUser/${newUser.id}`} id={newUser.id}>
                        <div className=" hover:bg-slate-300 dark:hover:bg-slate-600 hover:opacity-30 rounded-md p-5 cursor-pointer ">
                        <p className="font-semibold text-2xl">{newUser.name}</p>
                        <p className="truncate w-24">{newUser.email}</p>
                        </div>
                    </Link>
                    <button className="text-white py-2 px-4 rounded-lg bg-red-500 hover:opacity-70 transition-all" >X</button>
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
