// Header.tsx
import { Link } from "react-router-dom";
import { useContext } from "react";
// @ts-ignore
import { ReactComponent as SearchSvgIcon } from "~/assets/icons/search.svg";
import SearchContext from "~/store/search/SearchContext";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
    const [, setSearch] = useContext(SearchContext);

    return (
        <div className={styles.headerContainer}>
            <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                    <li className={styles.navigationItem}><Link to="/">home</Link></li>
                    <li className={styles.navigationItem}><Link to="/marketplace">marketplace</Link></li>
                    <li className={styles.navigationItem}>
                        <Link to="/user">user</Link>
                        <ul className={styles.navigationSubMenu}>
                            <li className={styles.navigationItem}><Link to="/user/create">create</Link></li>
                        </ul>
                    </li>
                    <li className={styles.navigationItem}><Link to="/bot">robot</Link></li>
                </ul>
            </nav>
            <div className={styles.searchContainer}>
                <div className={styles.searchInputContainer}>
                    <input className={styles.searchInput} type="text" placeholder="..." onChange={e => setSearch(e.target.value)} />
                    <SearchSvgIcon className={styles.searchIcon} />
                </div>
                <div className={styles.searchResultsContainer}></div>
            </div>
        </div>
    );
};

export default Header;