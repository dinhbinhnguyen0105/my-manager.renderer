import { Outlet, Link } from "react-router-dom";

import styles from "./Contents.module.scss";

const Contents: React.FC = () => {

    return (
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
        </div>
    );
};

export default Contents;