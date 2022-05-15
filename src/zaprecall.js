import React from 'react';
import FirstPage from "./firstpage";
import Recall from "./recall";

export default function ZapRecall(){

    const [callZap, setCallZap] = React.useState('hidden');

    return (
        <>
            <FirstPage appear={callZap} setAppear={setCallZap}/>
            <Recall appear={callZap}/>
        </>
    );
    
}