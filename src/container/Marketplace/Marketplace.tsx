// Marketplace.tsx
import Header from "~/components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Marketplace.module.scss";

const Marketplace: React.FC = () => {

    return (
        <>
            <Header />
            <div className={styles.marketplaceContainer}>
                <Outlet />
                <h2>Marketplace page</h2>
            </div>
        </>
    );
};

export default Marketplace;