"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { RedoIcon } from "lucide-react";
import Link from "next/link";
import { User } from "@/constants/types";
import { useState } from "react";

const bull = (
  // Material UI
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

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
const Details = ({ params }: Props) => {
  const { id } = params;
  console.log(id);
  const [users, setUsers] = useState(getLocalUsers());
  const newUser = users.find((user: User) => user.id === id);
  if (id == newUser?.id) {
    console.log("test");
  }
  return (
    <>
      <div>
        <Card
          sx={{ maxWidth: 275, backgroundColor: "grey" }}
          variant="outlined"
          className="mx-auto pt-5 mt-24 "
        >
          {/* material ui card */}
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {newUser?.name}
            </Typography>
            <Typography variant="h5" component="div">
              {newUser?.address?.street}
              {bull}
              {newUser?.address?.suite}
              {bull}
              {newUser?.address?.city}
              {bull}
              {newUser?.address?.zipcode}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              {newUser?.email}
            </Typography>
            <Typography variant="body2">
              {newUser?.phone}
              <br />
              {`"${newUser?.company?.name}"`}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Stack
        direction="row"
        spacing={2}
        className="ml-[80%] max-sm:mt-[30%] max-sm:ml-[70%] mt-[5%] "
      >
        {/* button for go to home page */}
        <Link href={"/"}>
          <Button variant="contained" endIcon={<RedoIcon />}>
            Home
          </Button>
        </Link>
      </Stack>
    </>
  );
};

export default Details;
