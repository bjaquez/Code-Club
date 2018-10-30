const router = require("express").Router();
const Question = require("../models/Question");
var db = require("../models");


router.get("/api/allQuestions", function(req, res){
  db.Question.find({}).then(function (data){
    res.json(data);
  });
});


router.get("/api/oneQuestion/:id", function(req, res){
  db.Question.findOne({ _id: req.params.id }).then(function (data){
    res.json(data);
  });
});

router.post("/api/createQuestion", function(req, res){
  db.Question.create(req.body).then(function (data){
    res.json(data);
  });
});


router.put("/api/userQuestionScores/:id", function(req, res){
  db.Question.findByIdAndUpdate(
    req.params.id
  ,
    {$push: {scores: req.body.scores, codeTime: req.body.codeTime, runTime: req.body.runTime, bigO: req.body.bigO}}
  )
    .then(function (data){
    res.json(data);
    })
  
});

module.exports = router;