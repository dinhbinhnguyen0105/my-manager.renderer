import { HashRouter, Routes, Route } from "react-router-dom";

import SearchProvider from "~/store/search/SearchProvider";

import Home from "~/container/Home/Home";
import Marketplace from "~/container/Marketplace/Marketplace";
import NoMatch from "~/container/NoMatch/NoMatch";
import User from "~/container/User/Users";
import List from "~/container/User/List/List";
import Create from "~/container/User/Create/Create";
import Update from "~/container/User/Update/Update";

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
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </HashRouter>
            </SearchProvider>
        </>
    );
};

export default App;