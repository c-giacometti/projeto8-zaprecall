import React from 'react';
import logo from './assets/logo.png';

export default function FirstPage(props){

    const [display, setDisplay] = React.useState("background");

    function clicked(){
        setDisplay("hidden");
        props.setAppear("recall");
    }

    return (
        <div className={display}>
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <button onClick={clicked}>Iniciar Recall!</button>
        </div>
    );

}