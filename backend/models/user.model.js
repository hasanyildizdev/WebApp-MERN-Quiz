const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{ type: String, required: true, unique: true, trim: true, minlength: 3},
    password:{type: String,required: true},
    birth_date:{type: Date,required: true},
    completed_quiz: {type: Boolean, required: false},
    total_skill_point: {type: Number, required: false},
    correct_answer_count: {type: Number, required: false},
    wrong_answer_count: {type: Number, required: false},
    completion_time: {type: Number, required: false}
}, {
    timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports = User;