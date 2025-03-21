import { useEffect, useState, useContext } from "react";
import { useLocation } from 'react-router-dom';

import styles from "./Setting.module.scss";
import * as settingAPIs from "~/APIs/setting";
import * as actionAPIs from "~/APIs/action";
import { update as botUpdateAPI } from "~/APIs/bot";
import { update as settingUpdateAPI } from "~/APIs/setting";
import { initSettingState, SettingInterface } from "~/types/setting";

import UserContext from "~/store/user/UserContext";
import BotContext from "~/store/bot/BotContext";

const Setting: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
    const [settingState, setSettingState] = useState<SettingInterface>(initSettingState);
    const location = useLocation();
    const [users,] = useContext(UserContext);
    const [bot,] = useContext(BotContext);

    useEffect(() => {
        settingAPIs.get()
            .then(res => {
                if (res.status.toString().startsWith("2")) { setSettingState(res.data as SettingInterface); }
                else {
                    console.error("Cannot fetch settings");
                    return;
                };
            })
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const target = event.target;
        const value = target.type === "text" ? target.value : target.checked;
        const name = target.name;
        setSettingState(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSaveAndRun = async () => {
        try {
            await botUpdateAPI(bot);
            await settingUpdateAPI(settingState);
            const idsSelected = users.filter(user => user.actions.isSelected).map(user => user.info.id);
            if (location.pathname === "/bot/interaction/like-comment") {
                const res = await actionAPIs.botLikeComment(idsSelected, bot.likeComment, settingState);
                console.log(res);
            }
        } catch (error) {
            console.error(error);
            return false;
        };

    };
    if (!isOpen) { return null; };
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.settingContainer} onClick={e => e.stopPropagation()}>
                <h2>Setting</h2>
                <div className={styles.settingContents}>
                    <div className={styles.settingContent}>
                        <label className={styles.inputLabel} htmlFor="isMobile">Is mobile</label>
                        <input className={styles.inputCheckbox} type="checkbox" id="isMobile" name="isMobile" checked={settingState.isMobile} onChange={handleInputChange} />
                    </div>
                    <div className={styles.settingContent}>
                        <label className={styles.inputLabel} htmlFor="proxy">Proxy</label>
                        <input className={styles.inputText} type="text" id="proxy" name="proxy" placeholder="['proxy 1', 'proxy 2']" value={settingState.proxy} onChange={handleInputChange} />
                    </div>
                    <div className={styles.settingContent}>
                        <label className={styles.inputLabel} htmlFor="process">Process</label>
                        <input className={styles.inputText} type="text" id="process" name="process" value={settingState.process} onChange={handleInputChange} />
                    </div>
                </div>
                <button onClick={handleSaveAndRun}>Save & run</button>
            </div>
        </div>
    );
};

export default Setting;
