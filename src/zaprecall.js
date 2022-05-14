import logo from './assets/logo.png'
import './css/style.css'

export default function ZapRecall(){
    return (
        <div className="background">
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <button>Iniciar Recall!</button>
        </div>
    )
}