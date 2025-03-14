// bot.ts
import { LikeCommentInterface } from "~/types/bot";
import { IPCLikeCommentInterface } from "~/types/ipcs";

const getLikeComment = (): Promise<IPCLikeCommentInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.bot_like_comment_get());
            } else {
                fetch("http://localhost:3000/bot")
                    .then(res => res.json())
                    .then(res => {
                        resolve({
                            data: res.likeAndComment as LikeCommentInterface,
                            status: 200,
                            message: "Settings successfully retrieved.",
                        });
                    })
                    .catch(error => reject({
                        data: null,
                        message: (error as string).toString(),
                        status: 500,
                    }));
            };
        } catch (error) {
            reject({
                data: null,
                message: (error as string).toString(),
                status: 500,
            });
        };
    });
};

const updateLikeComment = (likeComment: LikeCommentInterface): Promise<{ status: number, message: string }> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) {
                resolve(window.electronAPIs.bot_like_comment_update(likeComment));
            } else {
                resolve({
                    status: 200,
                    message: "Like & comment successfully updated"
                });
            };
        } catch (error) {
            reject({
                status: 500,
                message: (error as string).toString(),
            });
        };
    });
};

export {
    getLikeComment,
    updateLikeComment,
};