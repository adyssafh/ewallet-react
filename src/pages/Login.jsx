import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

function Login(){
    const navigate= useNavigate();
    const handleLogin = ()=> {
        navigate("/");
    };

    return(
        <div className="login-page">
            <div className="right-side">
                <img src="./src/assets/splashscreen.svg" className="splashscreen"/>
            </div>
           <div className="left-side">
                <div className="login-form">
                    <img src="./src/assets/Group 7.svg" className="logo"/>
                    <input className="login-input" type="Email" placeholder="Email"/>
                    <input className="login-input" type="Password" placeholder="Password"/>
                    <button onClick={handleLogin} className="login-button">Login</button>
                    <div className="cta-to-register">
                        <p>Belum punya akun?</p>
                        <Link to="/register" className="link-register">Daftar di sini</Link>
                    </div>
                </div>
           </div>
            
        </div>
    )
}

export default Login;