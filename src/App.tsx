import { HashRouter, Routes, Route } from "react-router-dom";

import SearchProvider from "~/store/search/SearchProvider";

import Home from "~/container/Home/Home";
import Marketplace from "~/container/Marketplace/Marketplace";
import NoMatch from "~/container/NoMatch/NoMatch";
import User from "~/container/User/Users";
import List from "~/container/User/List/List";
import Create from "~/container/User/Create/Create";
import Update from "~/container/User/Update/Update";
import Bot from "~/container/Bot/Bot";
// import Contents from "~/container/Bot/Contents/Contents";
import LikeAndComment from "~/container/Bot/Contents/LikeAndComment/LikeAndComment";

const App: React.FC = () => {
    return (
        <>
            <SearchProvider>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="marketplace" element={<Marketplace />} />

                        <Route path="user" element={<User />}>
                            <Route index element={<List />} />
                            <Route path="list" element={<List />} />
                            <Route path="create" element={<Create />} />
                            <Route path="update" element={<Update />} />
                        </Route>
                        <Route path="bot" element={<Bot />}>
                            <Route path="interaction" >
                                <Route path="like-comment" element={<LikeAndComment />} />
                            </Route>
                        </Route>
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </HashRouter>
            </SearchProvider>
        </>
    );
};

export default App;