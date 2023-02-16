import React, { Component } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Chart from 'chart.js/auto'

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}
class Result extends Component {
    constructor(props){
        super(props);
        this.dataSeted = false;

        this.state = {
            username:'',
            wisdom: 0,
            correct: 0,
            wrong: 0,
            speed: 0,
        };

        this.graphFunction = this.graphFunction.bind(this);
    }

    componentDidUpdate(){
        if(this.dataSeted){
            this.graphFunction();
        }
    }

    graphFunction(){
        //let speed = 0;
        //if(this.state.speed<50){}

        const data = {
            labels: ['Correct', 'Speed', 'Wrong', 'Wisdom'],
            datasets: [{
                label: 'Quiz Result',
                data: [this.state.correct*10,this.state.speed,this.state.wrong, this.state.wisdom],
                fill: true,
                backgroundColor: 'rgba(255, 255, 0, 0.2)',
                borderColor: 'yellow',
                pointBackgroundColor: 'yellow',
                pointBorderColor: 'yellow',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }
        ],
        }
        Chart.defaults.color = "red";

        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
              elements: {
                line: {
                  borderWidth: 1,
                },
              },
              plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 24
                        },
                        color:'red'
                    }
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: 'red',
                    font: {
                      size: 16,
                    }
                  },
                  angleLines: {
                    color: 'red'
                  },
                  ticks: { 
                    color: '',
                    backdropColor: 'transparent'
                  }
                }
              },
              scale: {
                ticks: {
                  beginAtZero: true
                }
              }
            },
          });
    }

    componentDidMount(){
        axios.get('http://192.168.1.124:5000/users/'+this.props.match.params.username)
            .then(response =>{
                this.setState({
                    username: response.data.username,
                    wisdom:response.data.total_skill_point,
                    correct: response.data.correct_answer_count,
                    wrong: response.data.wrong_answer_count,
                    speed: response.data.completion_time,
                });
            })
            .then(this.dataSeted=true)
            .catch((error)=>{
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <div className=" text-white bg-black w-full pt-6 pb-6 px-6 rounded-xl">
                    <div className="flex flex-col w-full h-full items-center justify-center">
                        <div className="flex flex-row items-center pb-2">
                            <h2 className="text-danger">Q.</h2>
                            <h3 className="ml-2 text-info"> You completed quiz, Congratulations!</h3>
                        </div>
                        <div className="w-96 h-96">
                            <canvas id="myChart"></canvas>
                        </div>
                        <div className="w-full text-white">
                                <div>Correct : {this.state.correct} </div>
                                <div>Wrong : {this.state.wrong}</div>
                                <div>Skill Point : {this.state.wisdom} </div>
                                <div>Time : {this.state.speed} seconds</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Result);