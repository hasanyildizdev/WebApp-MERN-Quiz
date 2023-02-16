import React, {Component} from "react";
import axios from 'axios';

export default class AddQuestion extends Component{
    constructor(props){
        super(props);

        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onChangeA = this.onChangeA.bind(this);
        this.onChangeB = this.onChangeB.bind(this);
        this.onChangeC = this.onChangeC.bind(this);
        this.onChangeD = this.onChangeD.bind(this);
        this.onChangeCorrectAnswer = this.onChangeCorrectAnswer.bind(this);
        this.onChangeSkillPoint = this.onChangeSkillPoint.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            number : 0,
            question : '',
            option_a : '',
            option_b : '',
            option_c : '',
            option_d : '',
            correct_answer : '',
            skill_point: 0,
        }
    }

    onChangeNumber(e){
        this.setState({
            number: e.target.value
        });
    }
    onChangeQuestion(e){
        this.setState({
            question: e.target.value
        });
    }
    onChangeA(e){
        this.setState({
            option_a: e.target.value
        });
    }
    onChangeB(e){
        this.setState({
            option_b: e.target.value
        });
    }
    onChangeC(e){
        this.setState({
            option_c: e.target.value
        });
    }
    onChangeD(e){
        this.setState({
            option_d: e.target.value
        });
    }
    onChangeCorrectAnswer(e){
        this.setState({
            correct_answer: e.target.value
        });
    }
    onChangeSkillPoint(e){
        this.setState({
            skill_point: e.target.value
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const questionItem ={
            number: this.state.number,
            question : this.state.question,
            option_a : this.state.option_a,
            option_b : this.state.option_b,
            option_c : this.state.option_c,
            option_d : this.state.option_d,
            correct_answer : this.state.correct_answer,
            skill_point: this.state.skill_point,
        }

        console.log(questionItem);

        try {
            axios.post('http://192.168.1.124:5000/questions/add',questionItem)
            alert("Added Successfully"); 
            return window.location = '/add';
        } catch (error) {
            return alert("Something went wrong! Error: "+error);
        }
        
    }

    render(){
        return(
            <div className="w-50 mx-auto">
                <h3>Add Question</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Number:</label>
                        <input
                            type="number"
                            required
                            className="form-control"
                            value={this.state.number}
                            onChange={this.onChangeNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>Question:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.question}
                            onChange={this.onChangeQuestion}
                        />
                    </div>
                    <div className="form-group">
                        <label>A:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.option_a}
                            onChange={this.onChangeA}
                        />
                    </div>
                    <div className="form-group">
                        <label>B:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.option_b}
                            onChange={this.onChangeB}
                        />
                    </div>
                    <div className="form-group">
                        <label>C:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.option_c}
                            onChange={this.onChangeC}
                        />
                    </div>
                    <div className="form-group">
                        <label>D:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.option_d}
                            onChange={this.onChangeD}
                        />
                    </div>
                    <div className="form-group">
                        <label>Correct Answer:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.correct_answer}
                            onChange={this.onChangeCorrectAnswer}
                        />
                    </div>
                    <div className="form-group">
                        <label>Skill Point:</label>
                        <input
                            type="number"
                            required
                            className="form-control"
                            value={this.state.skill_point}
                            onChange={this.onChangeSkillPoint}
                        />
                    </div>
                    

                    <div className="form-group pt-2">
                        <input type="submit" value="Add Question" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }   
}