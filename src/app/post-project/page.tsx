import { auth } from "../../auth";
import { InputForm } from "@/components/InputForm";
import { HiBanknotes  } from 'react-icons/hi2'
import { SectionForm } from "./_components/SectionForm";
export default async function  AddJob() {

  const session = await auth()

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