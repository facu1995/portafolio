import React from 'react'
/* import { Link } from 'react-router-dom' */

export const Home = () => {
    return (
        <div className="home body-padding">
            <div className="home__foto"></div>
            <div className="home__info">
                <h1>Facundo Perez</h1>
                <p className="home__description">
                    Soy un Desarrollador de Frontend, me encuentro estudiando la carrera de Ingeniería Informática en la Universidad Nacional de Mar del Plata. Disfruto codear y solucionar problemas, en algún momento quisiera poder ser Full Stack. Busco un entorno de trabajo que me permita crecer como Developer.
                </p>
            </div>
        </div>

    )
}

export default Home;