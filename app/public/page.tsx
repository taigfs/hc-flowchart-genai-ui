import { getServerSession } from "next-auth/next"
import type { NextRequest } from "next/server"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { Navbar } from "@/components/navbar"

export default async function Protected (req: NextRequest): Promise<any> {
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