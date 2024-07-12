import { GridCard } from "@/components/GridCard";

export default function Profile(){
  return (
    <>
      <main className="global-container pt-28 ">
        <div className="flex gap-6">
          <section className="flex  gap-4 flex-col justify-center items-center rounded-xl shadow-lg bg-white w-[250px] h-[250px] overflow-hidden">
            <picture className="h-full w-full block overflow-hidden">
              <img className="object-cover object-center h-full w-full" src="https://media.gq.com.mx/photos/61780a08f865d472dfcd66c8/master/w_2560%2Cc_limit/GettyImages-1225777369.jpg" alt="Avatar" />
            </picture>

            <div className="pb-4">
              <h2 className="font-bold text-3xl">
                Oliver Guerrero
              </h2>
              <p className="text-2xl">
                @oliver
              </p>
            </div>
          </section>

         <div className="flex flex-col mt-[auto] mb-10">
            <span className="text-white font-semibold">
              Especialidad
            </span>
            <h1 className="text-6xl font-semibold text-white">
              Desarrollador web Full Stack
            </h1>
         </div>
        </div>

        <div className="mt-10">
          <GridCard title="Trabajos mas recientes" />
        </div>
        
      </main>
    </>
  )
}