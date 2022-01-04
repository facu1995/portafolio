import React from 'react'
/* import { Link } from 'react-router-dom' */
import CardProyect from "../presentational/Proyect/CardProyect";
export const Proyect = () => {
    return (

        <div id="proyect" className="proyect body-padding">
            <h1>Proyectos</h1>
            <div className="proyect__container">
                <CardProyect titulo="Poke Dev" description="React - JavaScript - Node.JS - HTML - CSS"  linkSitio="https://pokemodevp.netlify.app/" linkCode="https://github.com/facu1995/PokeDev" proyect="proyect1"/>
                <CardProyect titulo="Mercadolibre Static" description="JavaScript - HTML - CSS"  linkSitio="https://facu1995.github.io/MercadoLibre-estatica/" linkCode="https://github.com/facu1995/Bootcamp/tree/main/dia19-18-11/ma%C3%B1ana/actividad2" proyect="proyect2"/>
                <CardProyect titulo="Starkbucks Static" description="JavaScript - HTML - CSS"  linkSitio="https://facu1995.github.io/starback-Static/" linkCode="https://github.com/facu1995/Bootcamp/tree/main/dia14-11-11/ma%C3%B1ana/ejercicioCompartido" proyect="proyect3"/>
            </div>
        </div>
    )
}

export default Proyect;