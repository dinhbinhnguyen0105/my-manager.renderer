// UserProvider.tsx
import { useMemo, useReducer } from "react";
import UserContext from "./UserContext";
import { UserContextType } from "~/types/user";
import UserReducer from "./UserReducer";

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [users, usersDispatch] = useReducer(UserReducer, []);
    const usersContextValue = useMemo<UserContextType>(() => [users, usersDispatch], [users, usersDispatch])
    return (
        <UserContext value={usersContextValue}>
            {children}
        </UserContext>
    );
};

export default UserProvider;