import { getServerSession } from "next-auth/next";
import { Navbar } from "@/components/navbar";
import { authOptions } from "./api/auth/[...nextauth]/auth-options";
import Diagram from "@/components/reactflow/diagram";

export default async function Protected(): Promise<any> {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8 flex py-3"
           style={{ height: 'calc(100% - 64px)'}}>
        <div className="grid grid-cols-2 gap-4 w-full h-full">
          <div className="bg-gray-900 p-4 rounded">
            <div className="flex flex-col h-full">
              <textarea
                className="focus:border-gray-800 focus:outline-none flex-grow resize-none border border-solid border-gray-800 border-2 rounded p-2 bg-gray-900 text-white rounded-b-none"
                placeholder="Type here..."
              ></textarea>
              <button className="w-full text-white py-2 px-4 rounded bg-gray-800 hover:bg-gray-700 rounded-t-none">
                Submit
              </button>
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <Diagram />
          </div>
        </div>
      </div>
    </>
  );
}
