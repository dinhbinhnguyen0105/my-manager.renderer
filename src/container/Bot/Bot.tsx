
import { useState, Dispatch } from "react";
import Header from "~/components/Header/Header";
import User from "./User/User";
import Contents from "./Contents/Contents";
import { createContext } from "vm";
import { initUserState, UserInterface } from "~/types/user";

const Bot: React.FC = () => {
    const UserContext = createContext();

    return (
        <>
            <Header />
            <UserContext>

            </UserContext>
            <div className="botContainer">
                <User />
                <Contents />
            </div>
        </>
    );
};

export default Bot;
