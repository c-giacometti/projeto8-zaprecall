export default function Footer(props){

    let endOfGame = false;
    let messageType = 'Congratz';
    const numberOfAnswers = (props.answersArray).length;

    if(numberOfAnswers === props.numberOfQuestions) {endOfGame = true;}
    if(props.answersArray.includes('failed')) {messageType='Putz';}

    endOfGame ? renderMessage() : renderFooter();

    function renderMessage(){
        return (
            <div className='footer'>
                <Message messageType={messageType} />
                <div>{numberOfAnswers}/{props.numberOfQuestions} CONCLUÍDOS</div>
                <div className='icons'>{props.answersArray.map((renderIcons, index) => <Icon answer={renderIcons} key={index} />)}</div>
            </div>
        );
    }

    function renderFooter(){
        return (
            <div className='footer'>
                <div>{numberOfAnswers}/{props.numberOfQuestions} CONCLUÍDOS</div>
                <div className='icons'>{props.answersArray.map((renderIcons, index) => <Icon answer={renderIcons} key={index} />)}</div>
            </div>
        );
    }

}

function Icon(props){
    
    if(props.answer === 'failed'){
        return (
            <span className={props.answer}><ion-icon  name='close-circle'></ion-icon></span>
        );
    }

    else if(props.answer === 'almostGotIt'){
        return (
            <span className={props.answer}><ion-icon name='help-circle'></ion-icon></span>
        );
    }

    else if(props.answer === 'succeeded'){
        return (
            <span className={props.answer}><ion-icon name='checkmark-circle'></ion-icon></span>
        );
    }

    else {
        return (
            " "
        );
    }

}

function Message(props){

    if(props.messageType === 'Putz'){
        return (

        );
    }

    else if(props.messageType === 'COngratz'){
        return (

        );
    }
}