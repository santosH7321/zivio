import ChildrenInterface from "@/interfaces/children-interface"
import { FC } from "react"

const AppLayout: FC<ChildrenInterface> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default AppLayout