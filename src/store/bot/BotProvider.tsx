import { useMemo, useReducer } from "react";
import BotReducer from "./BotReducer";
import { BotContextType, initBotState } from "~/types/bot";
import BotContext from "./BotContext";

const BotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [bot, botDispatch] = useReducer(BotReducer, initBotState);
    const botContextValue = useMemo<BotContextType>(() => [bot, botDispatch], [bot, botDispatch]);
    return (
        <BotContext value={botContextValue}>
            {children}
        </BotContext>
    );
};

export default BotProvider;