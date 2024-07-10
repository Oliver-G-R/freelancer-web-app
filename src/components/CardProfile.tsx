import { Job } from "@/models/Job"
import Link from "next/link"

interface CardProfileProps extends Job{}

export const CardProfile = (props:CardProfileProps) => {

    const {
        id,
        img, 
        nombre,
        ciudad,
        title,
        description
    } = props

    return (
        <Link href={`/detail/${id}`} className="flex flex-col p-6 rounded-xl shadow-lg bg-white  transition hover:rotate-1">
            <div className="flex items-center">
                <picture className="w-16 h-16 rounded-2xl overflow-hidden">
                    <img className="object-cover object-center h-full w-full" src={img} alt="Avatar" />
                </picture>
               <div className="flex flex-col ml-5">
                    <span className="font-bold mb-3">
                        {nombre}
                    </span>
                    <span className="text-gray-500 font-semibold">
                        {
                            ciudad
                        }
                    </span>
               </div>
            </div>

            <h1 className="mt-5 font-bold  text-xl">
                {
                    title
                }
            </h1>
            <p className=" mt-5 text-gray-600 font-semibold">
                {
                    description
                }
            </p>
        </Link>
    )    
}