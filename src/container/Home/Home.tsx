// Home.tsx
import Header from "~/components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Home.module.scss"

const Home: React.FC = () => {

    return (
        <div className={styles.homeContainer}>
            <Header />
            <Outlet />
            <h2>Home page</h2>
        </div>
    );
};

export default Home;