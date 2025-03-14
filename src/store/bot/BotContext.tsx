// BotContext.tsx
import { createContext } from "react";
import { BotContextType, initBotState } from "~/types/bot";

const BotContext = createContext<BotContextType>([initBotState, () => { }]);

export default BotContext;