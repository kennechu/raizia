import { createContext, useCallback, useState } from "react";
import { Action } from "../types/enums";
import users from "../__mocks__/users.json";

export const UserContext = createContext({
  currentUser: 0,
  handleClick: (action: Action) => { action }
})

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState(0)
  const handleClick = useCallback((action: Action) => {
    if (action === Action.Prev && currentUser === 0) return setCurrentUser(users.length - 1)
    if (action === Action.Next && currentUser === users.length - 1) return setCurrentUser(0)
    if (action === Action.Next) return setCurrentUser(currentUser + 1)
    if (action === Action.Prev) return setCurrentUser(currentUser - 1)
  }, [setCurrentUser, currentUser])

  return (
    <UserContext.Provider value={{ currentUser, handleClick }}>
      {children}
    </UserContext.Provider>
  )
}
