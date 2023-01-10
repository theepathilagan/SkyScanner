import { NavLink } from "react-router-dom";
import airport from "../images/airport.png";
import airplane from "../images/airplane.png";
import star from "../images/star.png";
import logo from "../images/logo_skyscanner.png";

const Menu = () => {

    return ( 
       <div className="colorMenu">
            <img className="logo" src={logo} alt="logo" /> 
            <h1>SkyScanner</h1>
            <nav className="navmenu">
                <NavLink to="/" className={({isActive}) => isActive ? "nav-item nav-link activeButtonMenu" : "nav-item nav-link buttonClasicMenu"}>
                    Recherche Aéroport
                </NavLink>
                <NavLink to="/searchFlights" className={({isActive}) => isActive ? "nav-item nav-link activeButtonMenu" : "nav-item nav-link buttonClasicMenu"}>
                    Recherche Vols
                </NavLink>
                <NavLink to="/Favs" className={({isActive}) => isActive ? "nav-item nav-link activeButtonMenu" : "nav-item nav-link buttonClasicMenu"}>
                    Favoris
                </NavLink>
            </nav>
       </div> 
     );
}
 
export default Menu;