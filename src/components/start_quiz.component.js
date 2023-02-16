import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StartQuiz extends Component {

    render() {
        return (
            <div className="container">
                <div className=" text-white bg-black w-full pt-6 pb-6 px-6 rounded-xl">
                    <div className="flex w-full h-6 item-center justify-end">
                        (1/10)
                    </div>
                    <div className="flex flex-col w-full h-full items-center justify-center">
                        <div className="flex flex-row items-center pb-6">
                            <h2 className="text-danger">Q.</h2>
                            <h3 className="mt-1 ml-2 text-info">Wellcom to Quiz App</h3>
                        </div>
                        <div className="flex flex-col items-center pb-6">
                            <h5>Quiz will start when you hit the "START QUIZ" button</h5>
                            <h5>Time is import, solve the questions quickly</h5>
                            <h5>You must answer the question to move on to the next question</h5>
                            <h4 className="pt-6">Do your best!</h4>
                        </div>
                        <Link to="/quiz" className="btn btn-success"> START QUIZ </Link>
                    </div>
                </div>
            </div>
        )
    }
}