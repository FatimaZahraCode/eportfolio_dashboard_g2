import { Link } from "react-router-dom";
import React from "react";
function Menu() {
       
    return (
        <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/bienvenida">Bienvenida</Link>
            <br />
            <Link to="/contacto">Contacto</Link>
            <br />
            <Link to="/nosotros">Nosotros</Link>
            <br />
        </div>
    );
}export default Menu;