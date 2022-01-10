import React from 'react'
/* import { Link } from 'react-router-dom' */
import CardProyect from "../presentational/Proyect/CardProyect";
export const Proyect = () => {
    return (

        <div id="proyect" className="proyect body-padding">
            <h1>Proyectos</h1>
            <div className="proyect__container">
                <CardProyect titulo="Poke Dev" grupo={true} description="React - JavaScript - Node.JS - HTML - CSS"  linkSitio="https://pokemodevp.netlify.app/" linkCode="https://github.com/facu1995/PokeDev" proyect="proyect1"/>
                <CardProyect titulo="Redux" description="Redux - JavaScript - Node.JS - HTML - CSS"  linkSitio="https://facu1995.github.io/proyectos/reduxHtml/" linkCode="https://github.com/facu1995/proyectos/tree/main/reduxHtml" proyect="proyect11"/>
                <CardProyect titulo="Space" grupo={true} description="JavaScript - HTML - CSS"  linkSitio="https://facu1995.github.io/proyectos/spaceHtml/" linkCode="https://github.com/facu1995/proyectos/tree/main/spaceHtml" proyect="proyect9"/>
                <CardProyect titulo="Trello" description="JavaScript - HTML - CSS"  linkSitio="https://facu1995.github.io/proyectos/trello/" linkCode="https://github.com/facu1995/proyectos/tree/main/trello" proyect="proyect8"/>
                <CardProyect titulo="Mercadolibre Static" grupo={true} description="JavaScript - HTML - CSS"  linkSitio="https://facu1995.github.io/MercadoLibre-estatica/" linkCode="https://github.com/facu1995/Bootcamp/tree/main/dia19-18-11/ma%C3%B1ana/actividad2" proyect="proyect2"/>
                <CardProyect titulo="Frontend Mentor Static" grupo={true} description="JavaScript - HTML - CSS"  linkSitio="https://facu1995.github.io/proyectos/bookmark/" linkCode="https://github.com/facu1995/proyectos/tree/main/bookmark" proyect="proyect5"/>
                <CardProyect titulo="Cards" description="HTML - CSS"  linkSitio="https://facu1995.github.io/cards/" linkCode="https://github.com/facu1995/cards" proyect="proyect4"/>
                <CardProyect titulo="Starkbucks Static" grupo={true} description="HTML - CSS"  linkSitio="https://facu1995.github.io/starback-Static/" linkCode="https://github.com/facu1995/Bootcamp/tree/main/dia14-11-11/ma%C3%B1ana/ejercicioCompartido" proyect="proyect3"/>
                <CardProyect titulo="Netflix Static" grupo={true} description="HTML - CSS"  linkSitio="https://facu1995.github.io/proyectos/netflix/" linkCode="https://github.com/facu1995/proyectos/tree/main/netflix" proyect="proyect6"/>
                <CardProyect titulo="Shopifyplus" grupo={true} description="HTML - CSS"  linkSitio="https://facu1995.github.io/proyectos/shopifyplus/" linkCode="https://github.com/facu1995/proyectos/tree/main/shopifyplus" proyect="proyect7"/>
                <CardProyect titulo="Hamburguesa"  grupo={true}description=" HTML - CSS"  linkSitio="https://facu1995.github.io/proyectos/hamburgesa/projects.html" linkCode="https://github.com/facu1995/proyectos/tree/main/hamburgesa" proyect="proyect10"/>
            </div>
        </div>
    )
}

export default Proyect;