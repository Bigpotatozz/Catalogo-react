import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import './home.css';
export function Home() {

    return (
        <>
            <Navbar></Navbar>

            <div className="home">
                <Outlet></Outlet>
            </div>


        </>
    )

}