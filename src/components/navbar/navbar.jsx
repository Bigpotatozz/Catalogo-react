import { Link } from "react-router-dom";
import homeIcon from '../../assets/icons/home-icon.svg';
import catalogoIcon from '../../assets/icons/catalogo-icon.png';
import './navbar.css';

export function Navbar() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                    <Link to="/"><img src={homeIcon} alt="Icono de Inicio"/> Inicio</Link>
                    </li>
                    <li>
                        <Link to="/catalogo"><img src={catalogoIcon} alt="Icono de Inicio"/> Catalogo</Link>
                    </li>

                </ul>
            </nav>



        </>
    );


}

