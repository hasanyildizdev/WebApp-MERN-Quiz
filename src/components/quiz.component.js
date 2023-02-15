import React, { Component } from "react";

var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
var timer = setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);

export default class Quiz extends Component {
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
                        <div class="flex flex-row items-center pb-6">
                            <h3 class="text-danger">Q.</h3>
                            <h5 class="mt-1 ml-2">Which of the following country has largest population?</h5>
                        </div>
                        <div className="flex flex-col pb-6">
                            <button className=" border-2 border-green-600 py-2 px-4 rounded-lg mt-2">
                                <h5>A) Turkey</h5>
                            </button>
                            <button className=" border-2 border-green-600 py-2 px-4 rounded-lg my-2">
                                <h5>B) Canada</h5>
                            </button>
                            <button className=" border-2 border-green-600 py-2 px-4 rounded-lg">
                                <h5>C) Russia</h5>
                            </button>
                            <button className=" border-2 border-green-600 py-2 px-4 rounded-lg mt-2">
                                <h5>D) China</h5>
                            </button>
                        </div>
                        <div class="w-full flex flex-row justify-content-between items-center">
                            <button class="btn btn-danger align-items-center" type="button">
                                <i class="fa fa-angle-left mr-2"></i>
                                Previous
                            </button>
                            <button class="btn btn-success align-items-center " type="button">
                                Next
                                <i class="fa fa-angle-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
              </div>
        )
    }
}