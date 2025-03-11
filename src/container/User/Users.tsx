// Users.tsx
import { Outlet } from "react-router-dom";
import UserProvider from "~/store/user/UserProvider";
import Header from "~/components/Header/Header";
import styles from "./User.module.scss";

const User: React.FC = () => {

    return (
        <UserProvider>
            <div className={styles.userContainer}>
                <Header />
                <Outlet />
            </div>
        </UserProvider>
    )
}

export default User;