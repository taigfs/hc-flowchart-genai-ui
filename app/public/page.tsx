import { getServerSession } from "next-auth/next"
import { Navbar } from "@/components/navbar"
import { authOptions } from "../api/auth/[...nextauth]/auth-options";

export default async function Protected (): Promise<any> {
  const session = await getServerSession(authOptions)
console.log(session);
  return (
    <>
      <Navbar />
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div>
          {
            session !== null
              ? <span className='leading-loose text-[2rem] font-extrabold text-accent'>
                  Hi {session?.user?.name}!
                </span>
              : <a className='btn btn-primary' href='/api/auth/signin'>Sign in</a>
          }
        </div>
      </div>
    </>
  )
}