import SadFace from './assets/sad.png';
import HappyFace from './assets/party.png';

export default function Footer(props){

    let messageType = 'Congratz';
    const numberOfAnswers = (props.answersArray).length;

    if(props.answersArray.includes('failed')) {messageType='Putz';}

    if(numberOfAnswers === props.numberOfQuestions) {
        return (
            <div className='footer'>
                <Message messageType={messageType} />
                <div>{numberOfAnswers}/{props.numberOfQuestions} CONCLUÍDOS</div>
                <div className='icons'>{props.answersArray.map((renderIcons, index) => <Icon answer={renderIcons} key={index} />)}</div>
            </div>
        );
    }

    return (
        <div className='footer'>
            <div>{numberOfAnswers}/{props.numberOfQuestions} CONCLUÍDOS</div>
            <div className='icons'>{props.answersArray.map((renderIcons, index) => <Icon answer={renderIcons} key={index} />)}</div>
        </div>
    );

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
            <>
                <div className='messageTitle'>
                    <img src={SadFace} alt='rostinho titi :(' />
                    <span>Putz...</span>
                </div>
                <div className='messageContent'>
                    Ainda faltam alguns... Mas não desanime!
                </div>
            </>
        );
    }

    else if(props.messageType === 'Congratz'){
        return (
            <>
                <div className='messageTitle'>
                    <img src={HappyFace} alt='rostinho feliz :)'/>
                    <span>Parabéns!</span>
                </div>
                <div className='messageContent'>
                    Você não esqueceu de nenhum flashcard!
                </div>
            </>
        );
    }
}