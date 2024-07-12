import { InputForm } from "@/components/InputForm";
import { HiBanknotes  } from 'react-icons/hi2'
export default function AddJob() {
  return(
    <>
      <main className="global-container pt-28">
        <h1 className="font-semibold text-3xl text-white">
          Crea tu nuevo proyecto para que los clientes lo vean
        </h1>

        <p className="w-[900px] mt-6 text-white">
          Empieza por un nombre atractivo y descriptivo, cuentales que les ofreces, una descripcion bien estructurada puede ayudar a que los clientes se interesen en tu propuesta.
        </p>


        <section className="rounded-sm p-5 shadow-lg bg-white w-[800px] mt-6">
          <form className="flex flex-col gap-4">
            <InputForm
              labelTitle="Nombre"
              type="text"
              id="nameProject"
              placeholder="Desarrollo de una pagina web"
            />
              

            <label className="font-semibold" htmlFor="description">
              Descripcion
            </label>
             <div className="hover:border-purple-300 border-[1.5px]  transition border-gray-400 rounded-md overflow-hidden">
              <textarea 
                placeholder="Hola, me gustaria saber mas sobre tu propuesta de trabajo..."
                className="w-full outline-0 px-4 py-2 resize-none h-32"
                id="description">

              </textarea>
            </div>
            <InputForm
              labelTitle="Precio"
              type="number"
              id="price"
              placeholder="0"
            >
                <HiBanknotes className="text-gray-400 text-2xl" />
            </InputForm>  
            
            <button className="font-semibold text-xl text-center  border-[1.3px] border-gray-400 rounded-md w-full p-2">
              Crear
            </button>
            

          </form>
        </section>
      
          
      </main>
    </>
  )
}