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
  constructor(props) {
    super(props);
    this.dataSeted = false;
    this.questionCount = 0;

    this.state = {
      username: '',
      total_skill_point: 0,
      correct_answer_count: 0,
      wrong_answer_count: 0,
      completion_time: 0,
    };

    this.graphFunction = this.graphFunction.bind(this);
  }

  componentDidMount() {
    axios.get('http://192.168.1.124:5000/questions')
      .then(response => {
        this.questionCount = Object.keys(response.data).length;
      });

    axios.get('http://192.168.1.124:5000/users/' + this.props.match.params.username)
      .then(response => {
        this.setState({
          username: response.data.username,
          total_skill_point: response.data.total_skill_point,
          correct_answer_count: response.data.correct_answer_count,
          wrong_answer_count: response.data.wrong_answer_count,
          completion_time: response.data.completion_time,
        });
      })
      .then(this.dataSeted = true)
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    if (this.dataSeted) {
      this.graphFunction();
    }
  }

  graphFunction() {
    // Speed calculation, questionCount*10 means, 10 seconds for per question
    var speed = 0;
    if (this.state.completion_time < this.questionCount * 10) { speed = 10; }
    else { speed = 5;}

    // Wisdom calculation
    var wisdom = parseInt(this.state.total_skill_point / this.questionCount);
    
    // Correct and Wrong
    var correct = this.state.correct_answer_count*2;
    var wrong = this.state.wrong_answer_count*2;

    const data = {
      labels: ['Correct', 'Speed', 'Mistake', 'Wisdom','Happiness'],
      datasets: [{
        label: 'Quiz Result',
        data: [correct*10, speed*10,wrong*10, wisdom*10, this.questionCount*2*10],
        fill: true,
        backgroundColor: 'rgba(255, 255, 0, 0.2)',
        borderColor: 'yellow',
        pointBackgroundColor: 'yellow',
        pointBorderColor: 'yellow',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }],
    }
    Chart.defaults.color = "red";

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'radar',
      data: data,
      options: {
        scale: {
          ticks: {
              beginAtZero: true
          }
        },
        elements: {
          line: {
            borderWidth: 2
          },
        },
        plugins: {
          legend: false,
        },
        scales: {
          r: {
            min: 0,
            max: 100,
            pointLabels: {
              color: 'white',
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
      },
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
              <div>Correct : {this.state.correct_answer_count} </div>
              <div>Wrong : {this.state.wrong_answer_count}</div>
              <div>Skill Point : {this.state.total_skill_point} </div>
              <div>Time : {this.state.completion_time} seconds</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Result);