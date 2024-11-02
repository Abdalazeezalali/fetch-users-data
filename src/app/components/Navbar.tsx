import { User } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
const Navbar = () => {
  return (
    // simple navbar
    <nav className="flex justify-between items-center px-10 py-5 shadow-md dark:shadow-xl ">
    <div className="flex gap-x-5">
    <User/>
    <Link href={"/"} className="font-semibold">Dashboard Users</Link>
    </div>
    <ModeToggle/>
  </nav>
  )
}

export default Navbar
