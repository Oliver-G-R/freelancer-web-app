import Link from "next/link"

interface CardProfileProps {
    id: string
    name: string
    nameDeveloper: string
    avatar: string
    city: string
    description: string
    sowHeader?: boolean

}

export const CardProfile = (props:CardProfileProps) => {

    const {
        id,
        name,
        nameDeveloper,
        avatar,
        city,
        description,
        sowHeader
    } = props

    return (
        <Link href={`/project/detail/${id}`} className="flex flex-col p-6 rounded-xl shadow-lg bg-white  transition hover:rotate-1">
            { sowHeader &&<header className="flex items-center mb-5">
                <picture className="w-16 h-16 rounded-2xl overflow-hidden">
                    <img className="object-cover object-center h-full w-full" src={avatar} alt="Avatar" />
                </picture>
               <div className="flex flex-col ml-5">
                    <span className="font-bold mb-3">
                        {nameDeveloper}
                    </span>
                    <span className="text-gray-500 font-semibold">
                        {
                            city
                        }
                    </span>
               </div>
            </header>}

            <h1 className="font-bold  text-xl">
                {
                    name
                }
            </h1>
            <p className=" mt-5 text-gray-600 font-semibold text-ellipsis max-h-[100px]  overflow-hidden">
                {
                    description 
                }
                ...
            </p>
        </Link>
    )    
}