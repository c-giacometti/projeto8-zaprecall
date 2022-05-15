import React from "react";
import Header from "./header";
import RenderZap from "./renderzap";
import Footer from "./footer";

export default function Recall(props){

    return (
        <div className={props.appear}>
            <Header />
            <RenderZap />
            <Footer />
        </div>
    );

}
