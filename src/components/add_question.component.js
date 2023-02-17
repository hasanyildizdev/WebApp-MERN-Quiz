import React, {Component} from "react";
import axios from 'axios';

const Question = props => (
    <tr>
        <td>{props.question.number}</td>
        <td>{props.question.question}</td>
        <td>{props.question.option_a}</td>
        <td>{props.question.option_b}</td>
        <td>{props.question.option_c}</td>
        <td>{props.question.option_d}</td>
        <td>{props.question.correct_answer}</td>
        <td>{props.question.skill_point}</td>
    </tr>
)
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
            questionsList : []
        }
    }
    

    componentDidMount() {
        axios.get('http://localhost:5000/questions')
            .then(response => {
                this.setState({ questionsList: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
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

        try {
            axios.post('http://localhost:5000/questions/add',questionItem)
            alert("Added Successfully"); 
            return window.location = '/add';
        } catch (error) {
            return alert("Something went wrong! Error: "+error);
        }
        
    }

    questionList() {
        return this.state.questionsList.map(current_question => {
            return <Question question={current_question} key={current_question._id} />;
        })
    }

    render(){
        return(
            <div>
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
                <div className="mt-10">
                <h3>Question List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Nr</th>
                            <th>Question</th>
                            <th>A</th>
                            <th>B</th>
                            <th>C</th>
                            <th>D</th>
                            <th>Answer</th>
                            <th>Point</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.questionList()}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }   
}