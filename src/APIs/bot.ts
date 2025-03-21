// bot.ts
import { BotInterface } from "~/types/bot";
import { IPCBotInterface } from "~/types/ipcs";

const get = (): Promise<IPCBotInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) { resolve(window.electronAPIs.bot_get()); }
            else {
                fetch("http://localhost:3000/bot")
                    .then(res => res.json())
                    .then(res => resolve({
                        data: res,
                        status: 200,
                        message: "Settings successfully retrieved.",
                    }))
            }

        } catch (error) {
            reject({
                message: (error as string).toString(),
                status: 500,
            });
        };
    });
};

const update = (bot: BotInterface): Promise<IPCBotInterface> => {
    return new Promise((resolve, reject) => {
        try {
            if (window?.electronAPIs) { resolve(window.electronAPIs.bot_update(bot)); }
            else {
                resolve({
                    status: 200,
                    message: "Like & comment successfully updated"
                })
            }
        } catch (error) {
            reject({
                status: 500,
                message: (error as string).toString(),
            })
        }
    });
};

export {
    get,
    update,
};