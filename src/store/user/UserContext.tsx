// UserContext.tsx
import { createContext } from "react";
import { UserContextType } from "~/types/user";

const UserContext = createContext<UserContextType>([[], () => { }]);

export default UserContext;