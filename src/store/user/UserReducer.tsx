import { UserInterface, UserActionType } from "~/types/user";
import constants from "~/constants";

const UserReducer = (state: UserInterface[], action: UserActionType): UserInterface[] => {
    switch (action.type) {
        case constants.USER_CREATE: return [...state, ...(action.users ? action.users : [])];
        case constants.USER_LIST: return action.users || [];
        case constants.USER_GET: return state;
        case constants.USER_UPDATE: return state;
        case constants.USER_DELETE: {
            if (!action?.id) { return state; }
            else {
                const newUsers = state.filter(user => user.info.id !== action.id);
                return newUsers;
            }
        };
        case constants.USER_SET_SELECT: return state;
        case constants.USER_SET_SELECT_ALL: return state;

        default: throw new Error("Invalid user action.")
    };
};

export default UserReducer;