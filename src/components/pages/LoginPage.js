import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Ingresa aquí</h2>
            <form action="/home">
                <p>
                    <label>Usuario o contraseña</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>contraseña</label>
                    <Link to="/forget-password"><label className="right-label">Olvidaste la contraseña?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>¿No tienes cuenta? <Link to="/register">Crear una cuenta</Link>.</p>
                <p><Link to="/">Volver a la página</Link>.</p>
            </footer>
        </div>
    )
}
