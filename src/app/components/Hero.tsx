
import Link from "next/link"
const getData=async (getUser)=>{
  // fetch users data
  const response=await fetch("https://jsonplaceholder.typicode.com/users")
  if(!response.ok){
    throw new Error("failed")
  }
  return response.json()
}
export default async function Hero({getUser}) {

  const users=await getData(getUser)
  return (
    // use id , name and email from users
        <main className='w-[300px] h-[400px] mx-auto mt-20 flex flex-col gap-y-5 overflow-y-scroll'>
        {users?.map((user)=>(
            <div key={user.id}  className="flex gap-y-2 flex-col  hover:bg-slate-300 dark:hover:bg-slate-600 hover:opacity-30 rounded-md p-5 cursor-pointer ">
          <Link href={`users/${user.id}`} className="font-semibold text-2xl">{user.name}</Link>
          <p className="truncate w-24">{user.email}</p>
    </div> 
        ))}
    </main>

  )
}