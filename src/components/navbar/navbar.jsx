import { Link } from "react-router-dom";
import './navbar.css';

export function Navbar() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/catalogo">Catalogo</Link>
                    </li>

                </ul>
            </nav>



        </>
    );


}