import React, { Component } from "react";

export default class Quiz extends Component {
    constructor(){
        super();
        this.state = { selectedOption: 'null' };   
        var sec = 0;
        function pad ( val ) { return val > 9 ? val : "0" + val; }
        setInterval( function(){
            document.getElementById("seconds").innerHTML=pad(++sec%60);
            document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
        }, 1000);
    }

    handleClick = (e) => {
        e.target.style.border="2px solid #00FF00"
        if(e.target.id==="buttonA"){
            document.getElementById("buttonB").style.border = "0px";
            document.getElementById("buttonC").style.border = "0px";
            document.getElementById("buttonD").style.border = "0px";
            this.setState({
                selectedOption:'a'
            });
        }
        else if(e.target.id==="buttonB"){
            document.getElementById("buttonA").style.border = "0px";
            document.getElementById("buttonC").style.border = "0px";
            document.getElementById("buttonD").style.border = "0px";
            this.setState({
                selectedOption:'b'
            });
        }
        else if(e.target.id==="buttonC"){
            document.getElementById("buttonA").style.border = "0px";
            document.getElementById("buttonB").style.border = "0px";
            document.getElementById("buttonD").style.border = "0px";
            this.setState({
                selectedOption:'c'
            });
        }
        else{
            document.getElementById("buttonA").style.border = "0px";
            document.getElementById("buttonB").style.border = "0px";
            document.getElementById("buttonC").style.border = "0px";
            this.setState({
                selectedOption:'d'
            });
        }
    }

    render() {        

        return (
              <div className="container">
                <div className="flex w-full justify-end pb-2">
                    <div className="w-16 h-10 flex items-center justify-center font-bold  bg-black text-white rounded-lg">
                        <span id="minutes"></span>:<span id="seconds"></span>
                    </div>
                </div>
                <div className=" text-white bg-black w-full pt-6 pb-6 px-6 rounded-xl">
                    <div className="flex w-full h-6 item-center justify-end">
                            (1/10)
                    </div>
                    <div className="flex flex-col w-full h-full items-center justify-center">
                        <div className="flex flex-row items-center pb-6">
                            <h3 className="text-danger">Q.</h3>
                            <h5 className="mt-1 ml-2">Which of the following country has largest population?</h5>
                        </div>
                        <div className="flex flex-col pb-6">
                            <button 
                                id="buttonA"
                                onClick={this.handleClick}
                                className="py-2 px-4 rounded-lg mt-2 text-xl font-bold flex items-start">
                                A) Turkey
                            </button>
                            <button 
                                id="buttonB"                                
                                onClick={this.handleClick}
                                className="py-2 px-4 rounded-lg mt-2 text-xl font-bold  flex items-start">
                                B) Canada
                            </button>
                            <button 
                                id="buttonC"
                                onClick={this.handleClick}
                                className="py-2 px-4 rounded-lg mt-2 text-xl font-bold  flex items-start">
                                C) Russia
                            </button>
                            <button 
                                id="buttonD"
                                onClick={this.handleClick}
                                className="py-2 px-4 rounded-lg mt-2 text-xl font-bold  flex items-start">
                                D) China
                            </button>
                        </div>
                        <div className="w-full flex justify-end items-center">
                            <button className="btn btn-success align-items-center " type="button">
                                Next
                                <i className="fa fa-angle-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
              </div>
        )
    }
}