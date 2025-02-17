import { Outlet } from "react-router-dom";
import MyFooter from "../../components/MyFooter";
import MyNavBar from "../../components/MyNavBar";

function Layout() {
    return (
        <>
            <MyNavBar />
            <Outlet />
            <MyFooter />
        </>
    )
}

export default Layout;