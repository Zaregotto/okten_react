import {Routes, Route} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, PostPage, UsersPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/posts'} element={<PostPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
