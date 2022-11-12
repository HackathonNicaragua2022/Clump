import "./Registro.css";

const Register = () => {
    return (
        <div className="login">
            <h1>CLASS CLUMP</h1>
            <form action="#">
                <input type="email" placeholder="Correo electronico" />
                <input type="password" placeholder="Contraseña" />
                <input type="text" placeholder="Numero telefónico" />
                <input type="password" placeholder="Confirmar Contraseña" />
                <button type="submit" className="sublog">Registrarse</button>
            </form>

        </div>
    );
};

export default Register;
