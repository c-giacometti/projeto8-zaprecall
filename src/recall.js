import React from "react";
import Header from "./header";
import RenderZap from "./renderzap";
import Footer from "./footer";

export default function Recall(props){

    const [answersArray, setAnswersArray] = React.useState([]);
    const [numberOfQuestions, setNumberOfQuestions] = React.useState(0);

    return (
        <div className={props.appear}>
            <Header />
            <RenderZap answersArray={answersArray} setAnswersArray={setAnswersArray} setNumberOfQuestions={setNumberOfQuestions} />
            <Footer numberOfQuestions={numberOfQuestions} answersArray={answersArray} />
        </div>
    );

}
