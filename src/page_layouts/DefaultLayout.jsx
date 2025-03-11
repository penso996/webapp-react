// DefaultLayout.jsx

// Import functions from React
import { Outlet } from "react-router-dom";

// Import page_main_components
import Header from "../page_main_components/Header";

export default function DefaultLayout() {

    // RENDER
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}