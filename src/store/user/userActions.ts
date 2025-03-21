// UserActivation.ts
import { UserInterface } from "~/types/user";
import constants from "~/constants";

const create = (user: UserInterface): { type: string; user: UserInterface } => ({ type: constants.USER_CREATE, user });
const get = (id: string): { type: string, id: string } => ({ type: constants.USER_GET, id });
const list = (users: UserInterface[]): { type: string, users: UserInterface[] } => ({ type: constants.USER_LIST, users });
const update = (user: UserInterface): { type: string; user: UserInterface } => ({ type: constants.USER_UPDATE, user });
const del = (id: string): { type: string; id: string } => ({ type: constants.USER_DELETE, id });
// const select = (id: string, isSelected: boolean): { type: string; id: string, isSelected: boolean } => ({ type: constants.user_select, id, isSelected });
// const selectAll = (isSelected: boolean): { type: string; isSelected: boolean } => ({ type: constants.user_select_ALL, isSelected });
const toggleSelection = (id: string): { type: string, id: string } => ({ type: constants.USER_TOGGLE_SELECTION, id })
const toggleSelectionAll = (isSelected: boolean | false): { type: string, isSelected: boolean } => ({ type: constants.USER_TOGGLE_SELECTION_ALL, isSelected })
export {
    create,
    get,
    list,
    update,
    del,
    // select,
    // selectAll,
    toggleSelection,
    toggleSelectionAll,
};