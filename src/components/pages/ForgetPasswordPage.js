import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Reinicia tu contraseña</h2>
            <h5>Ingresa tu correo y te llegará un enlace para reiniciar tu contraseña</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Correo</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Enviar correo para reinicar contraseña</button>
                </p>
            </form>
            <footer>
                <p>¿No tienes cuenta? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Volver al a página de inicio</Link>.</p>
            </footer>
        </div>
    )
}
