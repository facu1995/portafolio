import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
    return (
        <div className='Error404'>
            <div>
                <h1>ERROR 404</h1>
                <h1>HAGA CLICK</h1>
                <Link to={'/'}> <h1 className='Error504__aqui'>AQUI</h1> </Link>
                <h1>PARA VOLVER ATRAS</h1>
            </div>
        </div>
    )
}

export default Error404;