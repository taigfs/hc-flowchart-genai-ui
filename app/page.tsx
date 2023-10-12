import { getServerSession } from "next-auth/next";
import { Navbar } from "@/components/navbar";
import { authOptions } from "./api/auth/[...nextauth]/auth-options";

export default async function Protected(): Promise<any> {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex py-3"
           style={{ height: 'calc(100% - 64px)'}}>
        <div className="grid grid-cols-2 gap-4 w-full h-full">
          <div className="bg-gray-900 p-4">
            <div className="flex flex-col h-full">
              <textarea
                className="flex-grow resize-none border rounded p-2 bg-gray-900 text-white border-gray"
                placeholder="Digite aqui..."
              ></textarea>
              <button className="w-full text-white py-2 px-4 rounded bg-gray-800 hover:bg-gray-700">
                Submit
              </button>
            </div>
          </div>
          <div className="bg-gray-900 p-4">Conteúdo da Coluna 2</div>
          {/* Você pode adicionar mais elementos aqui */}
        </div>
      </div>
    </>
  );
}
