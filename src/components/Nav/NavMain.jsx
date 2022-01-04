
import React, { useState } from "react";
/* import { Link } from "react-router-dom"; */

function NavMain() {
    const [active, setActive] = useState(false)
    function showLinks() {
        if (active) {
            setActive(false);
        }
        else {
            setActive(true);
        }
    }
    return (
        <nav className="nav_principal">
            <div className="nav_principal__icono"></div>
            <button onClick={showLinks} className="btn-hamburger"><i id="hamburger" className={active === false ? 'fas fa-bars' : 'fas fa-times'}></i></button>
            <ul id="nav-links" className={active === false ? 'nav_principal__list' : 'nav_principal__list active'} >
                <li className="nav_principal__li"><a href="/" className="nav_principal__a">Acerca de mi</a></li>
               {/*  <li className="nav_principal__li"><Link href="/about" className="nav_principal__a">Acerca de mi</Link></li> */}
                <li className="nav_principal__li"><a href="/#proyect" className="nav_principal__a">Proyectos</a></li>
                <li className="nav_principal__li"><a href="/contact" className="nav_principal__a">Conctacto</a></li>
            </ul>
        </nav>
    )
}

export default NavMain;