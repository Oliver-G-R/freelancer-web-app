import { HeaderNav } from '@/components/HeaderNav'

interface LayoutUserProps{
  children: React.ReactNode
}
const layoutDeveloper = ({children}:LayoutUserProps) => {
  return (
    <>
      <HeaderNav/>
      {children}
    </>
  )
}

export default layoutDeveloper