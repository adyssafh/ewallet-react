import { Link } from 'react-router-dom';
import './Register.css'

function Register(){

    return(
        <div className="register-page">
            <div className="right-side">
                <img src="./src/assets/splashscreen.svg" className="splashscreen"/>
            </div>
           <div className="left-side">
                <div className="register-form">
                    <img src="./src/assets/Group 7.svg" className="logo"/>
                    <input className="register-input" type="Nama Lengkap" placeholder="Nama Lengkap"/>
                    <input className="register-input" type="Email" placeholder="Email"/>
                    <input className="register-input" type="Password" placeholder="Password"/>
                    <input className="register-input" type="No HP" placeholder="No HP"/>
                    <button className="register-button">Daftar</button>
                    <div className="cta-to-login">
                        <p>Sudah punya akun?</p>
                        <Link to="/login" className="link-login">Login di sini</Link>
                    </div>
                </div>
           </div>
            
        </div>
    )
}

export default Register;