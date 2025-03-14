// BotProivder.tsx
import { useState, useMemo } from "react"
import BotContext from "./BotContext"
import { BotContextType, BotInterface, initBotState } from "~/types/bot"

const BotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [bot, setBot] = useState<BotInterface>(initBotState);
    const botContextValue = useMemo<BotContextType>(() => [bot, setBot], [bot, setBot]);
    return (
        <BotContext value={botContextValue}>
            {children}
        </BotContext>
    )
}

export default BotProvider;