// Setting.tsx
import { useEffect, useState } from "react";
import styles from "./Setting.module.scss";
import * as settingAPIs from "~/APIs/setting";
import * as actionAPIs from "~/APIs/action";
import constants from "~/constants";
import { initSettingState, SettingInterface } from "~/types/setting";

const Setting: React.FC<{ isOpen: boolean, onClose: () => void, action: string, idsSelected: string[] }> = ({ isOpen, onClose, action, idsSelected }) => {
    const [settingState, setSettingState] = useState<SettingInterface>(initSettingState);
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

    const handleSaveAndRun = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const target = event.target as HTMLButtonElement;
        const defaultHTML = target.innerHTML;
        target.innerHTML = "Saving ..."
        target.disabled = true;

        settingAPIs.update(settingState)
            .then(res => {
                if (res.status.toString().startsWith("2")) {
                    target.innerHTML = "Saved";
                    return true;
                } else {
                    target.innerHTML = "Error";
                    console.log(res.message);
                    return false;
                };
            })
            .then(res => {
                if (!res) { return false; };
                if (action === constants.ACTION_OPEN_BROWSER) {
                    if (idsSelected.length < 1) { return; }
                    else {
                        actionAPIs.openBrowser(idsSelected[0])
                            .then(res => {
                                if (res.status.toString().startsWith("2")) {
                                    target.innerHTML = "Launching ...";
                                    target.disabled = true;
                                    console.log("Launching browser with id: ", idsSelected[0]);
                                } else {
                                    target.innerHTML = "Error";
                                    console.log(res.message);
                                };
                                return true;
                            })
                            .catch(error => error);
                    };
                }
                else if (action === constants.ACTION_LIKE_COMMENT) {
                    //
                } else {
                    //
                };
            })
            .catch(error => {
                target.innerHTML = "Error";
                console.error(error);
            })
            .finally(() => {
                target.innerHTML = defaultHTML;
                target.disabled = false;
            });

    };

    if (!isOpen || idsSelected.length === 0) return null;
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
}

export default Setting;