import { Outlet } from "react-router-dom";
import Header from "~/components/Header/Header";

const Bot: React.FC = () => {

    return (
        <div className="botContainer">
            <Header />
            <div className="botContent">
                <Outlet />
            </div>
        </div>
    );
};

export default Bot;