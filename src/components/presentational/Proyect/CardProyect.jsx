import React from 'react'
/* import { Link } from 'react-router-dom' */

export const CardProyect = ({titulo,description,linkSitio,linkCode,proyect}) => {
    let clase="cardProyect "+proyect;
    return (
        <div className={clase}>
            <div className="cardProyect__detalle">
                <h4 className="cardProyect__detalle__titulo">{titulo}</h4>
                <p className="cardProyect__detalle__description">{description}</p>
                <div className="flex-aling-sa">
                    <a className="cardProyect__a" href={linkSitio} target="_blank">Ver Sitio</a>
                    <a className="cardProyect__a" href={linkCode} target="_blank">Ver Code</a>
                </div>
            </div>
        </div>

    )
}

export default CardProyect;


