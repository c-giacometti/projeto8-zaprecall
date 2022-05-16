import React from 'react';
import turnSymbol from './assets/setinha.png';

export default function RenderZap(props){

    const zapDeck = [
        {question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript'},
        {question: 'O React é __', answer: 'Uma biblioteca JavaScript para construção de interfaces'},
        {question: 'Componentes devem iniciar com __', answer: 'Letra maiúscula'},
        {question: 'Podemos colocar __ dentro do JSX', answer: 'Expressões'},
        {question: 'O ReactDOM nos ajuda __', answer: 'Interagindo com a DOM para colocar componentes React na mesma'},
        {question: 'Usamos o npm para __', answer: 'Gerenciar os pacotes necessários e suas dependências'},
        {question: 'Usamos props para __', answer: 'Passar diferentes informações para componentes'},
        {question: 'Usamos estado (state) para __', answer: 'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'},
    ];

    props.setNumberOfQuestions(zapDeck.length);

    zapDeck.sort(shuffle);

    function shuffle(){
        return Math.random() - 0.5;
    }

    return (
        <div className="deck">
            {zapDeck.map((render, index) => (<ZapCard question={render.question} answer={render.answer} key={index} index={index} 
            answersArray={props.answersArray} setAnswersArray={props.setAnswersArray} />))}
        </div>
    );

}

function ZapCard(props){

    const [classClosed, setClassClosed] = React.useState('closed');
    const [showQuestion, setShowQuestion] = React.useState('hidden');
    const [showAnswer, setShowAnswer] = React.useState('hidden');
    const [icon, setIcon] = React.useState("play-outline");

    return (
        <div className='card'>
            <CardClosed classClosed={classClosed} setClassClosed={setClassClosed} setShowQuestion={setShowQuestion} 
            index={props.index} icon={icon} />
            <CardOpen showQuestion={showQuestion} setShowQuestion={setShowQuestion} setShowAnswer={setShowAnswer} 
            question={props.question} />
            <CardAnswer showAnswer={showAnswer} setShowAnswer={setShowAnswer} setClassClosed={setClassClosed} 
            answer={props.answer} setIcon={setIcon} setAnswersArray={props.setAnswersArray} answersArray={props.answersArray} />
        </div>
    );

}

function CardClosed(props){

    function TurnCard(){
        props.setShowQuestion('open');
        props.setClassClosed('hidden');
    }

    return (
        <div className={props.classClosed} onClick={TurnCard}>
            <span>Pergunta {props.index + 1}</span>
            <ion-icon name={props.icon}></ion-icon>
        </div>
    );

}

function CardOpen(props){

    function answerAppear(){
        props.setShowQuestion('hidden');
        props.setShowAnswer('answer');
    }

    return (
        <div className={props.showQuestion}>
            <span>{props.question}</span>
            <div><img src={turnSymbol} alt="turn symbol" onClick={answerAppear}/></div>
        </div>
    );

}

function CardAnswer(props){

    function answerClicked(result){

        props.setClassClosed('closed ' + result);
        props.setShowAnswer('hidden');

        if(result === 'failed') {props.setIcon('close-circle');}
        else if(result === 'almostGotIt') {props.setIcon('help-circle');}
        else if(result === 'succeeded') {props.setIcon('checkmark-circle');}

        let newArray=[...props.answersArray, result];
        props.setAnswersArray(newArray);
        console.log(newArray);
        
    }

    return (
        <div className={props.showAnswer}>
            <span>{props.answer}</span>
            <div className="choices">
                <span className="fail" onClick={() => answerClicked('failed')}>Não lembrei</span>
                <span className="almost" onClick={() => answerClicked('almostGotIt')}>Quase não lembrei</span>
                <span className="success" onClick={() => answerClicked('succeeded')}>Zap!</span>
            </div>
        </div>
    );

}