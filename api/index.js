const express = require('express');

const app = express();
const bodyParser = require('body-parser')
const cors = require('cors'); 

const mongoose = require('./db/mongoose');
app.listen(3000,()=>{
    console.log("Server Started at port 3000");
})


const {List} = require('./db/models/list-model');
const {Task} = require('./db/models/task-model');


app.use(bodyParser.json());


//Routes

//List Routes

/**
 * GET /lists
 * Purpose : Get All Lists
 */
app.get('/lists',(req,res)=>{
    
    List.find({}).then((lists)=>{
        res.send(lists);
    }).catch((err)=>{
        res.send('Error While Retrieving Lists '+err);
    })
})


/**
 * Post /lists
 * Purpose : Create a List
 */

app.post('/lists',(req,res)=>{

   

    let newList = new List({
        title : req.body.title
    })
    
    newList.save().then((listDoc)=>{
        res.send(listDoc);
    })
     
})


/**
 * Patch /lists/:id
 * Purpose : Update particular list
 */

app.patch('/lists/:id', (req,res)=>{

    List.findByIdAndUpdate({_id:req.params.id},{$set:req.body}).then(()=>{

            res.sendStatus(200);

    })
})

/**
 * Delete /lists/:id
 * Purpose: Delete particular list
 */
app.delete('/lists/:id',(req,res)=>{

    List.findByIdAndRemove({_id:req.params.id}).then((removedListDoc)=>{

        res.send(removedListDoc)

    });

})


/**
 * Get /lists/:listId/tasks
 * Purpose : Get All Tasks in a specified List
 *  */

app.get('/lists/:listId/tasks',(req,res)=>{

    Task.find({listId:req.params.listId}).then((tasks)=>{
        res.send(tasks);    
    })

})

/**
 * Get /lists/:listId/tasks/:taskId
 * Purpose : Get Specific Task in a specified List
 *  */

app.get('/lists/:listId/tasks/:taskId',(req,res)=>{
    Task.findOne({_id:req.params.taskId, listId:req.params.listId}).then((task)=>{
        res.send(task);
    })
})


/**
 * Post /lists/:listId/tasks
 * Purpose : Create new Task in a specified List
 *  */

app.post('/lists/:listId/tasks',(req,res)=>{

    let newTask = new Task({
        title:req.body.title,
        listId:req.params.listId
    })

    newTask.save().then((newTaskDoc)=>{
        res.send(newTaskDoc);
    })
})

/**
 * Patch /lists/:listId/tasks/:taskId
 * Purpose : Update a specific task in a list
 */

app.patch('/lists/:listId/tasks/:taskId',(req,res)=>{
   
    Task.findByIdAndUpdate({
        _id:req.params.taskId,
        listId:req.params.listId
    },{$set:req.body}).then(()=>{
        res.sendStatus(200);
    })
})


/**
 * Delete /lists/:listId/tasks/:taskId
 * Purpose Delete a specific task in a list
 */

 app.delete('/lists/:listId/tasks/:taskId',(req,res)=>{
     Task.findByIdAndDelete({_id:req.params.taskId, listId:req.params.listId}).then((removedDcc)=>{
         res.send(removedDcc)
     })
 })

