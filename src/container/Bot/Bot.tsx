
import { useState } from "react";
import Header from "~/components/Header/Header";
interface BotConfig
const Bot: React.FC = () => {

    return (
        <>
            <Header />
            <div className="botContainer">
                <Users />
                <Contents />
            </div>
        </>
    );
};

export default Bot;