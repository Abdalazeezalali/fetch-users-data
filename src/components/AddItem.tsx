"use client";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import React from "react";
import Link from "next/link";

    const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
    );

    const AddItem = () => {
    const { isSignedIn } = useUser();
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 9999);
    };

    const handleKeyUp = (key: string) => {
        if (key === "Enter" && newTodo) {
        const randomNumber = getRandomNumber();

        const newItem = {
            id: `item-${randomNumber}`,
            content: newTodo,
        };

        setTodo(todo.concat(newItem));

        setNewTodo("");
        }
    };

    const handleDelete = (id: number) => {
        if (id > -1) {
        setTodo(todo.slice(0, id).concat(todo.slice(id + 1)));
        }
    };
    type item = {
        id?: number;
        content?: string;
    };
    return (
        isSignedIn && (
        <div>
            <input
            type="text"
            id="newTodo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyUp={(e) => handleKeyUp(e.key)}
            className="block  pl-10 p-2 border-4 rounded-full bg-gray-600 text-white mx-auto"
            placeholder="New User Details"
            />
            <ul className="block w-full pt-6 ">
            <Box sx={{ flexGrow: 1 }}>
                {/* Setting up the Fluid Grid system */}
                <Grid container spacing={2}>
                {todo?.map((item: item, index) => {
                    return (
                    <div key={item.id} index={index} className="mx-auto">
                        {
                            <li
                            key={item.id}
                            className="w-full border-2 rounded-xl mt-2 hover:border-blue-300"
                            >
                            <Grid item xs={12} md={6} lg={4} xl={3} >
                                <div className="grid-elements" id={index}>
                                <p >
                                    <div className="  hover:opacity-30 rounded-md p-5 cursor-pointer ">
                                    <p className="font-semibold text-2xl">
                                    {item.content}
                                    </p>
                                    <button id={index} onClick={() => handleDelete(index)} className="w-7 h-7 m-2.5 rounded-2xl bg-red-700 text-gray-200 shadow-md hover:bg-red-500 hover:scale-105">x</button>
                                    </div>
                                </p>
                                </div>
                            </Grid>
                            </li>
                        }
                    </div>
                    );
                })}
                </Grid>
            </Box>
            </ul>   
        </div>
        )
    );
    };

    export default AddItem;
