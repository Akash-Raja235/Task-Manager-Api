

const express = require("express");
const Task = require('../models/schema')
const asyncWrapper =require('../middleware/async')

//get controll

const getTask = asyncWrapper(async (req, res) => {
    const task = await Task.find()
    res.status(200).json(task);

});

//post control
const postTask = asyncWrapper(async (req, res) => {
 
    const task = await Task.create(req.body);
    res.status(201).json({ task });

  })
   
 

//get control for signle
const getTaskSingle = asyncWrapper(async (req, res) => {


   const {id:taskID} = req.params
   const task = await Task.findOne({ _id: taskID });
   if(!task){
    return res.status(404).json({msg:`no task fonf ${task}`})
   }
   res.status(200).json({task});


});

// patch controll

const patchTask = asyncWrapper(async (req, res) => {

    const {id: taskID}=req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

if (!task) {
  return res.status(404).json({ msg: `no task fonf ${task}` });
}
 res.status(200).json({ task });
  
});

// delete controll
const deleteTask = asyncWrapper(async  (req, res) => {
  
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    
    if(!task){
      return res.status(404).json({msg:`nod fonf ${task}`})
    }
    res.status(200).json(task);
    //  res.status(200).send('deleted successful')
    //  res.status(200).json({task:null, status:'succesful'});
});

module.exports = {
  getTask,
  postTask,
  getTaskSingle,
  patchTask,
  deleteTask,
};