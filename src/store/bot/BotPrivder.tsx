// BotPrivder.tsx
import { useState, useMemo } from "react"
import BotContext from "./BotContext"
import { BotInterface, initBotState } from "~/types/bot"

const BotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [bot, setBot] = useState<BotInterface>(initBotState);
    const botContextValue = useMemo<[bot: BotInterface, setBot: React.Dispatch<React.SetStateAction<BotInterface>>]>(() => [bot, setBot], [bot, setBot]);
    return (
        <BotContext value={botContextValue}>
            {children}
        </BotContext>
    )
}