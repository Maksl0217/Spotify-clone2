"use client"

import { MyUserContextProvider } from "@/hooks/useUser"
import { FC, ReactNode } from "react"

interface IUserProvider {
  children: ReactNode
}

const UserProvider: FC<IUserProvider> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>
}

export default UserProvider
