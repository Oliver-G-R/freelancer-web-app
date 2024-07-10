"use client"
import { Job } from "@/models/Job"
import { CardProfile } from "./CardProfile"
import { use, useEffect, useState } from "react"
import { GetAllJobs } from "@/services/Jobs"

interface GridCardProps {
  title: string
}

export const GridCard = ({title}:GridCardProps) => {

  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    GetAllJobs()
      .then((data:any) => {
        setJobs(data.data)
      })
    setLoading(false)
  
  }, [])


  return (
   <>
      <h1 className="text-4xl text-center mb-10 text-white font-semibold">
        {title}
      </h1>
      <div className="grid grid-cols-auto-fill-400 gap-4">
          {
            !loading ? jobs.map((props) => ((
              <CardProfile
                key={props.id}
                {...props}
              />
            )))

            : (
              // skeleton 6 items

              [...Array(6)].map((_, index) => (
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
