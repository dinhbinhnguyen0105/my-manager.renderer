
import Header from "~/components/Header/Header";
import User from "./User/User";
import Contents from "./Contents/Contents";
import UserProvider from "~/store/user/UserProvider";
import styles from "./Bot.module.scss";

const Bot: React.FC = () => {


    return (
        <>
            <UserProvider>
                <Header />
                <div className={styles.botContainer}>
                    <User />
                    <Contents />
                </div>
            </UserProvider>
        </>
    );
};

export default Bot;
