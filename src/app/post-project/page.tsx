import { redirect } from "next/navigation";
import { auth } from "../../auth";
import { SectionForm } from "./_components/SectionForm";
import { Role } from "@/models/Role";
export default async function  AddJob() {

  const session = await auth()

  if(!session) redirect("/auth/login")
  if(session && session.user.role !== Role.Developer) redirect("/")

  return(
    <>
      <main className="global-container pt-28">
        <h1 className="font-semibold text-3xl text-white">
          Crea tu nuevo proyecto para que los clientes lo vean
        </h1>

        <p className="w-[900px] mt-6 text-white">
          Empieza por un nombre atractivo y descriptivo, cuentales que les ofreces, una descripcion bien estructurada puede ayudar a que los clientes se interesen en tu propuesta.
        </p>


        <SectionForm />
      
          
      </main>
    </>
  )
}