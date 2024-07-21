"use client"
import { CardProfile } from "./CardProfile"

interface GridCardProps {
  title: string
  loading?: boolean
  children? : React.ReactNode[]
}

export const GridCard = ({title,loading, children}:GridCardProps) => {
  return (
   <>
      <h1 className="text-4xl text-center mb-10 text-white font-semibold">
        {title}
      </h1>
      <div className="grid grid-cols-auto-fill-400 gap-4">
          {
            !loading ? children 

            : (
              // skeleton 6 items

              [...Array(3)].map((_, index) => (
                <div key={index} className="flex flex-col p-6 rounded-xl shadow-lg bg-white animate-pulse">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gray-300"></div>
                    <div className="flex flex-col ml-5">
                      <div className="w-20 h-4 bg-gray-300 mb-3"></div>
                      <div className="w-10 h-4 bg-gray-300"></div>
                    </div>
                  </div>
                  <div className="w-20 h-4 bg-gray-300 mt-5"></div>
                  <div className="w-40 h-4 bg-gray-300 mt-5"></div>
                </div>
              ))
              
            )
          }
      </div>
   </>
  )
}
