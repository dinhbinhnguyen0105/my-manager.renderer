// Setting.tsx
import styles from "./Setting.module.scss";

const Setting: React.FC<{ isOpen: boolean, onClose: () => void, idsSelected: string[] }> = ({ isOpen, onClose, idsSelected }) => {
    if (!isOpen) return null;


    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.settingContainer} onClick={e => e.stopPropagation()}>
                <h2>Setting</h2>
                <div className={styles.settingContents}>
                    <div className={styles.settingContent}>
                        <label className={styles.inputLabel} htmlFor="isMobile">Is mobile</label>
                        <input className={styles.inputCheckbox} type="checkbox" id="isMobile" name="isMobile" />
                    </div>
                    <div className={styles.settingContent}>
                        <label className={styles.inputLabel} htmlFor="proxy">Proxy</label>
                        <input className={styles.inputText} type="text" id="proxy" name="proxy" placeholder="['proxy 1', 'proxy 2']" />
                    </div>
                    <div className={styles.settingContent}>
                        <label className={styles.inputLabel} htmlFor="process">Process</label>
                        <input className={styles.inputText} type="text" id="process" name="process" />
                    </div>
                </div>
                <button>Save & run</button>
            </div>
        </div>
    );
}

export default Setting;