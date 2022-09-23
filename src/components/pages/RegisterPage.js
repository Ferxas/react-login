import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Regístrate</h2>
            <h5>Crea tu cuenta personal</h5>
            <form action="/home">
                <p>
                    <label>Nombre o nombre de usuario</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Correo</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>contraseña</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>Firmar mi alma al diablo <a href="https://google.com" target="_blank" rel="noopener noreferrer">Términos de servicio</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Registrar</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Volver a la página</Link>.</p>
            </footer>
        </div>
    )

}
