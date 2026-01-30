import { Link } from "@mui/material";
import React from "react";
function Menu() {
       
    return (
        <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/Bienvenida">Bienvenida</Link>
            <br />
            <Link to="/Contacto">Contacto</Link>
            <br />
            <Link to="/Nosotros">Nosotros</Link>
            <br />
        </div>
    );
}export default Menu;