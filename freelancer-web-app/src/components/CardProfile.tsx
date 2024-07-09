import { FreelancerCardProfile } from "@/models/Job"

interface CardProfileProps extends FreelancerCardProfile{
  
}

export const CardProfile = (props:CardProfileProps) => {

    const {
        img, 
        nombre,
        ciudad,
        title,
        description
    } = props

    return (
        <div className="flex flex-col p-6">
        
            <div className="flex items-center">
                <picture className="">
                    <img className=" w-20 rounded-2xl" src={img} alt="Avatar" />
                </picture>
               <div className="flex flex-col ml-5">
                    <span className=" font-bold">
                        {nombre}
                    </span>
                    <span>
                        {
                            ciudad
                        }
                    </span>
               </div>
            </div>

            <h1 className="mt-5 font-bold">
                {
                    title
                }
            </h1>
            <p className=" mt-5 stroke-gray-500">
                {
                    description
                }
            </p>
        </div>
    )    
}