// constants.d.ts
const USER_LIST = "/user";
const USER_GET = "/user/get";
const USER_CREATE = "/user/create";
const USER_UPDATE = "/user/update";
const USER_DELETE = "/user/delete";
// const user_select = "/user/update/select";
// const user_select_ALL = "/user/update/select_all";
const USER_TOGGLE_SELECTION = "toggle_selection";
const USER_TOGGLE_SELECTION_ALL = "toggle_selection_all";

const BOT_GET = "/bot/interaction/like_comment";
const BOT_UPDATE = "/bot/interaction/like_comment/update";

const SETTING_GET = "/setting";
const SETTING_UPDATE = "/setting/update";

const ACTION_OPEN_BROWSER = "/action/open_browser";
const ACTION_LIKE_COMMENT = "/action/interaction/like_comment";

const constants = {
    USER_LIST,
    USER_GET,
    USER_CREATE,
    USER_UPDATE,
    USER_DELETE,
    BOT_GET,
    BOT_UPDATE,
    SETTING_GET,
    SETTING_UPDATE,
    ACTION_OPEN_BROWSER,
    ACTION_LIKE_COMMENT,
    USER_TOGGLE_SELECTION,
    USER_TOGGLE_SELECTION_ALL,
}

export default constants;