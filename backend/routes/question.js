const router = require('express').Router();
let Question = require('../models/question.model');

router.route('/').get((req,res)=>{
    Question.find()
        .then(Question=> res.json(Question))
        .catch(err=> res.status(400).json('Error:'+err));
});

router.route('/add').post((req,res)=>{
    const number = Number(req.body.number);
    const question = req.body.question;
    const option_a = req.body.option_a;
    const option_b = req.body.option_b;
    const option_c = req.body.option_c;
    const option_d = req.body.option_d;
    const correct_answer = req.body.correct_answer;
    const skill_point = Number(req.body.skill_point);

    const newQuestion = new Question({
        number,
        question,
        option_a,
        option_b,
        option_c,
        option_d,
        correct_answer,
        skill_point,
    });

    newQuestion.save()
        .then(()=> res.json('New Question added!'))
        .catch(err=>res.status(400).json('Error:'+err));
});

router.route('/:id').get((req,res)=>{
    Question.findById(req.params.id)
        .then(Question => res.json(Question))
        .catch(err => res.status(400).json('Erro: '+err));
});

router.route('/:id').delete((req,res)=>{
    Question.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Item deleted.'))
        .catch(err => res.status(400).json('Erro: '+err));
});

router.route('/update/:id').post((req,res)=>{
    Question.findById(req.params.id)
        .then(Question =>{
            Question.number =  Number(req.body.number);
            Question.question = req.body.question;
            Question.option_a = req.body.option_a;
            Question.option_b = req.body.option_b;
            Question.option_c = req.body.option_c;
            Question.option_d = req.body.option_d;
            Question.correct_answer = req.body.correct_answer;
            Question.skill_point =  Number(req.body.skill_point);

            Question.save()
                .then(()=> res.json('Item updated!'))
                .catch(err=>res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Erro: '+err));
});

module.exports = router;