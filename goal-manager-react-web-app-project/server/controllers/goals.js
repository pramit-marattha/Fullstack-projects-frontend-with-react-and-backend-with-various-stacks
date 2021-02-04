const Goal = require('../models/goalsSchema');
const express = require ('express');

// List all the goals
exports.getGoals =(req, res, next) => {
    //this will return all the data, exposing only the id and action field to the client
    Goal.find({}, 'action').then(data => res.json(data)).catch(next)
  };

// piblish all the goals
exports.postGoals = (req, res, next) => {
    if(req.body.action){
      Goal.create(req.body).then(data => res.json(data)).catch(next)
    }else {
      res.json({
        error: "Goal is empty"
      })
    }
};

// delete the goals
exports.deleteGoals = (req, res, next) => {
    Goal.findOneAndDelete({"_id": req.params.id}).then(data => res.json(data)).catch(next)
  };

