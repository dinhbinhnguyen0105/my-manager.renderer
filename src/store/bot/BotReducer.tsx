import constants from "~/constants";
import { BotActionType, BotInterface } from "~/types/bot";
import { set } from "lodash";

const BotReducer = (state: BotInterface, action: BotActionType): BotInterface => {
    switch (action.type) {
        case constants.BOT_GET: {
            const newState = { ...state };
            set(newState, "likeComment", action.likeComment)
            return newState;
        }
        // case constants.bot_update: {
        //     const newState = { ...state };
        //     set(newState, "likeComment", action.likeComment)
        //     return newState;
        // }
        case constants.BOT_UPDATE: {
            const newState = { ...state };
            set(newState, "likeComment." + action.path, action.value)
            return newState;
        }
        default: throw new Error("Invalid action");
    }
}

export default BotReducer;