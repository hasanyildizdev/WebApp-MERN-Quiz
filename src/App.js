import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login.component";
import CreateUser from "./components/create_user.component";
import Quiz from "./components/quiz.component";
import AddQuestion from "./components/add_question.component";
import StartQuiz from "./components/start_quiz.component";
import Result from "./components/result.component";

function App() {
  return (
    <Router>
      <div className="w-full items-center flex justify-center h-24">
          <h1 className="text-red-600 font-bold">Quiz App</h1>
      </div>
      <div className="container">
        <div className="w-75 mx-auto">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/user" element={<CreateUser/>}/>
            <Route path="/add" element={<AddQuestion/>}/>
            <Route path="/start" element={<StartQuiz/>}/>
            <Route path="/result" element={<Result/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
