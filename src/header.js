import minilogo from './assets/logo-pequeno.png';

export default function Header(){

    return (
        <div className="header">
            <img src={minilogo} alt='logo' />
            <h1>ZapRecall</h1>
        </div>
    );
    
}