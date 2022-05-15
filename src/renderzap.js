import React from 'react';
import turnSymbol from './assets/setinha.png';

export default function RenderZap(){

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

    return (
        <div className="deck">
            {zapDeck.map((render, index) => (<ZapCard question={render.question} answer={render.answer} key={index} index={index}/>))}
        </div>
    );
}

function ZapCard(props){

    const [classClosed, setClassClosed] = React.useState('closed');
    const [showQuestion, setShowQuestion] = React.useState('hidden');
    const [showAnswer, setShowAnswer] = React.useState('hidden');

    return (
        <div className='card'>
            <CardClosed classClosed={classClosed} setClassClosed={setClassClosed} setShowQuestion={setShowQuestion} 
            index={props.index}/>
            <CardOpen showQuestion={showQuestion} setShowQuestion={setShowQuestion} setShowAnswer={setShowAnswer} 
            question={props.question} />
            <CardAnswer showAnswer={showAnswer} answer={props.answer}/>
        </div>
    );

}

function CardClosed(props){

    return (
        <div className={props.classClosed} onClick={TurnCard}>
            <span>Pergunta {props.index + 1}</span>
            <ion-icon name="play-outline" ></ion-icon>
        </div>
    );

    function TurnCard(){
        props.setShowQuestion('open');
        props.setClassClosed('hidden');
    }

}

function CardOpen(props){

    return (
        <div className={props.showQuestion}>
            <span>{props.question}</span>
            <div><img src={turnSymbol} alt="turn symbol" onClick={answerAppear}/></div>
        </div>
    );

    function answerAppear(){
        props.setShowQuestion('hidden');
        props.setShowAnswer('answer');
    }

}

function CardAnswer(props){

    return (
        <div className={props.showAnswer}>
            <span>{props.answer}</span>
            <div className="choices">
                <span className="fail">Não lembrei</span>
                <span className="almost">Quase não lembrei</span>
                <span className="success">Zap!</span>
            </div>
        </div>
    );
    
}