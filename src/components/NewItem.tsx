"use client";
import { User } from "@/constants/types";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
const NewItem = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            {JSON.parse(localStorage.getItem("users") ?? "[]").map(
            (test: User, index: number) => {
                return (
                <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
                    <div className="grid-elements">
                    <Link href={`users/newUser/${index}`}>
                        <div className=" hover:bg-slate-300 dark:hover:bg-slate-600 hover:opacity-30 rounded-md p-5 cursor-pointer ">
                        <p className="font-semibold text-2xl">{test.name}</p>
                        <p className="truncate w-24">{test.email}</p>
                        </div>
                    </Link>
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
