// action.ts
import { LikeCommentType } from "~/types/bot";
import { IPCActionInterface } from "~/types/ipcs";
import { SettingInterface } from "~/types/setting";
// import { ActionInterface } from "~/types/action";

const openBrowser = (id: string, setting: SettingInterface): Promise<IPCActionInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.action_open_browser(id, setting));
            } else {
                resolve({
                    status: 200,
                    message: `Opening ${id}.`,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const botLikeComment = (ids: string[], likeComment: LikeCommentType, setting: SettingInterface): Promise<IPCActionInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.action_bot_likeComment(ids, likeComment, setting))
            } else {
                resolve({
                    status: 200,
                    message: "botLikeComment",
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}

export {
    openBrowser,
    botLikeComment,
};