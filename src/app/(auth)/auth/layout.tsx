interface LayoutAuthProps{
  children: React.ReactNode
}
const layoutAuth = ({children}:LayoutAuthProps) => {
  return (
     <main className="global-container flex flex-col justify-center items-center h-[100vh]">
        <div className="rounded-xl shadow-lg bg-white px-10 py-5 w-[600px]   max-sm:w-full">
          <span className="font-semibold text-[--color-secondary] text-center text-3xl block">
            CodeCrafters
          </span>
          {children}
        </div>
      </main>
  )
}

export default layoutAuth