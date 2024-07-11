import Link from "next/link";
import { HiComputerDesktop, HiUser } from "react-icons/hi2";
export default function Register(){
  return (
    <>
      <h1 className="text-gray-400 text-center text-2xl">
        Tipo de cuenta
      </h1>

      <section className="flex flex-col gap-4 mt-6">
        <Link href="/" className="flex justify-center text-xl font-semibold text-gray-400 rounded-[5px] border-gray-300 border-[2px] bg-white p-2">
          <div className="flex gap-4 w-[40%]">
            <HiComputerDesktop className="text-3xl" />
            <span>Desarrollador</span>
          </div>
        </Link>
        <Link href="/" className="flex justify-center text-xl font-semibold text-gray-400 rounded-[5px] border-gray-300 border-[2px] bg-white p-2">
          <div className="flex gap-4 w-[40%]">
            <HiUser className="text-3xl" />
            <span>Cliente</span>
          </div>
        </Link>

      </section>
    </>
  )
}
