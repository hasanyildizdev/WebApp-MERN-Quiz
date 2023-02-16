const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    number:{type: Number,required: true, unique: true},
    question:{type: String,required: true},
    option_a:{type: String,required: true},
    option_b:{type: String,required: true},
    option_c:{type: String,required: true},
    option_d:{type: String,required: true},
    correct_answer:{type: String,required: true, maxlength:1},
    skill_point:{type: Number,required: true},
}, {
    timestamps:true
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;