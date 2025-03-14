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
        case constants.USER_TOGGLE_SELECTION: {
            return state.map(user =>
                user.info.id === action.id ?
                    { ...user, actions: { ...user.actions, isSelected: !user.actions.isSelected } } :
                    user
            );
        };
        case constants.USER_TOGGLE_SELECTION_ALL: {
            return state.map(user => ({
                ...user,
                actions: {
                    ...user.actions,
                    isSelected: action.isSelected || false
                }
            }))
        }

        default: throw new Error("Invalid user action.")
    };
};

export default UserReducer;