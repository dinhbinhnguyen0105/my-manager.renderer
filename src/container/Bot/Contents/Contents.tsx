import { Outlet } from "react-router-dom";
const Contents: React.FC = () => {

    return (
        <div className="contentsContainer">
            <h2>Content</h2>
            <Outlet />
        </div>
    )
}

export default Contents;