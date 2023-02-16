import React, { Component } from "react";

export default class Result extends Component {

    render() {
        return (
            <div className="container">
                <div className=" text-white bg-black w-full pt-6 pb-6 px-6 rounded-xl">
                    <div className="flex flex-col w-full h-full items-center justify-center">
                        <div className="flex flex-row items-center pb-6">
                            <h2 className="text-danger">Q.</h2>
                            <h3 className="mt-1 ml-2 text-info"> You completed quiz, Congratulations!</h3>
                        </div>
                        <div className="flex flex-col items-center pb-6">
                            <h4>Your results;</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}