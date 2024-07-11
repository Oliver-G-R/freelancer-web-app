import { FormEvent } from "react"

interface InputProps {
  legendTitle: string
  children : React.ReactNode[]
  btnTitle: string
  handleSubmit: (e:FormEvent) => void
}

export const FormAuth = ({handleSubmit, children, legendTitle, btnTitle}:InputProps) => {
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
        </fieldset>
      </form>

  )
}
