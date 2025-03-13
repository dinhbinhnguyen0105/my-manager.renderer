import { createContext } from "react";
import { BotInterface, initBotState } from "~/types/bot";

const BotContext = createContext<BotInterface>(initBotState);

export default BotContext;