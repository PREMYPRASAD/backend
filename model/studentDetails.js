const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var StudentDetails = new Schema({
    student_ID: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    studentMobile: {
        type: String,
        required: true
    },
    studentEmail: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    courseStatus: {
        type: String,
        required: true
    },
    employmentStatus: {
        type: String,
        //required: true
    }
});

var studentdata = mongoose.model('student', StudentDetails);

module.exports = studentdata;