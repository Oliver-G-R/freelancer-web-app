import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  labelTitle: string
  errorMessage?: string
}

export const InputForm = (props:InputProps) => {
  const { children, id, labelTitle, className, errorMessage, ...restProps } = props
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold" htmlFor={id}>
        {labelTitle}
      </label>
      <div 
        className={
          `
            hover:border-purple-300 border-[1.5px]  transition border-gray-400 rounded-md overflow-hidden flex items-center px-3
            ${errorMessage && 'border-red-400 hover:border-red-400'}
          `
        }
      >
        {children}
        <input 
          className={`w-full outline-0 px-4 py-2 ${className}`}
          {...restProps}
        />
      </div>
      <small className="text-red-400">
        {errorMessage}
      </small>
    </div>
  )
}
