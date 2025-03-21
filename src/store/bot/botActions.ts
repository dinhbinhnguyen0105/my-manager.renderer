
import constants from "~/constants";
import { LikeCommentType } from "~/types/bot";

const setLikeComment = (likeComment: LikeCommentType): { type: string, likeComment: LikeCommentType } => {
    return {
        type: constants.BOT_GET,
        likeComment
    }
}
const updateLikeComment = (path: string, value: string | number | boolean): { type: string, path: string, value: string | number | boolean } => {
    return {
        type: constants.BOT_UPDATE,
        path: path,
        value: value
    }
}

export {
    setLikeComment,
    updateLikeComment,
};
