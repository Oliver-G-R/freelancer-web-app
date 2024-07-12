import { HeaderNav } from '@/components/HeaderNav'

interface LayoutUserProps{
  children: React.ReactNode
}
const layoutUser = ({children}:LayoutUserProps) => {
  return (
    <>
      <HeaderNav/>
      {children}
    </>
  )
}

export default layoutUser