import { HeaderNav } from "@/components/HeaderNav"

export default function Detail() {
  return (
    <>
      <HeaderNav/>
      <main className="container m-auto p-5 pt-28 flex gap-4">
       <article className="rounded-xl shadow-lg bg-white px-10 py-5 h-[70vh] w-[70%]">
          <header>
            <div className="flex items-center justify-between">
              <h1 className=" font-bold text-3xl">
                Desarrollador web frotend
              </h1>
              <div className="flex flex-col">
                <span className="font-bold text-2xl">
                  $250 MXN
                </span>
                <span className=" text-sm">
                  Pago al entregar
                </span>
              </div>
             
            </div>
          </header>

          <span>
              Fecha de publicacion: 26/10/2024
          </span>

          <p>
              Desarrollar una herramienta de simulación de distribuciones de probabilidad que permita a los usuarios realizar análisis de riesgos y modelización estocástica, similar a @Risk, Vose, o Crystalball
          </p>

        
       </article>

        <aside className="rounded-xl shadow-lg bg-white px-10 py-5 h-[70vh] w-[30%]">

        </aside>


      </main>
    </>
  )
}