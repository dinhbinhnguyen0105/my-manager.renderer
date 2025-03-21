// container/Bot/Contents/Contents.tsx
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Contents.module.scss";
import Setting from "./modals/Setting";

const Contents: React.FC = () => {
    const [isSettingModal, setIsSettingModal] = useState(false);

    return (
        <>
            <div className={styles.contents}>
                <div className={styles.header}>
                    <nav className={styles.navigation}>
                        <ul className={styles.navigationList}>
                            <li className={styles.navigationItem}>
                                <Link to="#">interaction</Link>
                                <ul className={styles.navigationSubMenu}>
                                    <li className={styles.navigationItem}><Link to="interaction/like-comment">like & comment</Link></li>
                                    <li className={styles.navigationItem}><Link to="interaction/friend">friend</Link></li>
                                </ul>
                            </li>
                            <li className={styles.navigationItem}><Link to="/bot">example</Link></li>
                        </ul>
                    </nav>
                </div>
                <Outlet />
                <div className={styles.footer}>
                    <button onClick={() => setIsSettingModal(true)}>start</button>
                </div>
            </div >
            {isSettingModal && <Setting isOpen={isSettingModal} onClose={() => setIsSettingModal(false)} />}
        </>
    );
};

export default Contents;