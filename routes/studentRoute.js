const express = require('express');
const { findById } = require('../model/studentDetails');
const studentRouter = express.Router();
const studentdata = require('../model/studentDetails');

//------------------Insertion operation starts----------//

//--admin insert trainer--//
studentRouter.post('/add', async function(req, res) {
    console.log(req.body);
    let item = {
        student_ID: req.body.student_ID,
        studentName: req.body.studentName,
        studentEmail: req.body.studentEmail,
        studentMobile: req.body.studentMobile,
        courseName: req.body.courseName,
        projectName: req.body.projectName,
        batch: req.body.batch,
        courseStatus: req.body.courseStatus
    }
    const user = new studentdata(item);
    const savedUser = await user.save();
    console.log('saved data :', savedUser);
    res.send();

});
//---admin insert trainer ends
//-----------------------------------Insertion operation ends--------------//



//------------------------------------view operstions starts--------------------//
// admin add trainer view

studentRouter.get('/studentDetailsview', function(req, res) {
    studentdata.find()
        .then(function(data) {
            res.send(data);
        });
});

//admin add trainer view ends---//

//--------------------------------view operstion ends-------------------//




//----------------------update operations start-----------------------//

// admin add trainer update

studentRouter.put('/studentdetailsUpdate', (req, res) => {
    console.log(req.body)
    id = req.body._id,
        student_ID = req.body.student_ID,
        studentName = req.body.studentName,
        studentEmail = req.body.studentEmail,
        studentMobile = req.body.studentMobile,
        courseName = req.body.courseName,
        projectName = req.body.projectName,
        batch = req.body.batch,
        courseStatus = req.body.courseStatus,
        studentdata.findByIdAndUpdate({ "_id": id }, {
            $set: {
                "student_ID": student_ID,
                "studentName": studentName,
                "studentEmail": studentEmail,
                "studentMobile": studentMobile,
                "courseName": courseName,
                "projectName": projectName,
                "batch": batch,
                "courseStatus": courseStatus,

            }
        })
        .then(function(data) {
            res.send(data);
        })
});

// ------------ Update operations ends --------------------


//-----------------------------------delete operation starts--------------//

// admin add trainer remove

studentRouter.delete('/studentdetailsRemove/:id', async(req, res) => {

    let id = req.params.id
    const deletestudent = await studentdata.findByIdAndDelete(id)
        .then(function() {
            res.send(deletestudent);
        })
});

// ------------ Delete operations ends ---------------------------//


//------------------------update select operations starts----------//
// admin add trainer select update

studentRouter.get("/studentdetailsSelect/:id", (req, res) => {
    const id = req.params.id;
    studentdata.findById({ _id: id }).then((data) => {
        res.send(data);
    });
});
// ------------ Update Selete operations ends ------------------//

module.exports = studentRouter;