import React from 'react';
import logo from './assets/logo.png';

export default function FirstPage(props){

    const [display, setDisplay] = React.useState("background");

    function clicked(setAppear){
        setDisplay("hidden");
        setAppear("recall");
    }

    return (
        <div className={display}>
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
            <button onClick={() => clicked(props.setAppear)}>Iniciar Recall!</button>
        </div>
    );

}