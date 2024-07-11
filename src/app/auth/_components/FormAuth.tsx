import Link from "next/link"
import { FormEvent } from "react"

interface FormAuthProps {
  legendTitle: string
  children : React.ReactNode[]
  btnTitle: string
  type?: 'create' | 'login'
  handleSubmit: (e:FormEvent) => void
}

export const FormAuth = ({handleSubmit, children, legendTitle, btnTitle, type = 'create'}:FormAuthProps) => {
  return (
     <form onSubmit={e => handleSubmit(e)}>
        <fieldset>
          <legend className="text-2xl text-center mb-4 text-gray-400 font-semibold">
            {legendTitle}
          </legend>
          <div className="flex flex-col gap-4 mb-6">
            {children}
          </div>

          <button className="text-xl text-center bg-[--color-secondary] text-white rounded-md w-full p-2">
            {btnTitle}
          </button>

          {
            type === 'create' 
              ? <SectionFormAuth 
                  title="¿Ya tienes una cuenta"
                  btnTitle="Iniciar sesión" 
                  path="/auth/login"
                />
              : <SectionFormAuth 
              title="¿Aún no tienes una cuenta?"
              btnTitle="Registrate" 
              path="/auth/register/type-account"
            />
          }

        </fieldset>
      </form>

  )
}

interface SectionFormAuthProps{
  title: string
  btnTitle: string
  path: string
} 

const SectionFormAuth = ({title, path, btnTitle}:SectionFormAuthProps) => {
  return(
    <div className="flex gap-4 border-t-[1.5px] mt-6 pt-4">
        <span>{title}</span>
        <Link className="text-blue-500" href={path}>
          {btnTitle}
        </Link>
    </div>
  )
}