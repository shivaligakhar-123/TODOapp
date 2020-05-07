const Todo = require('../models/todo');

// display task controller
module.exports.home= function(req,res){

    Todo.find({},function(err,todoapp){
        if(err){
            console.log('error from db');
            return;
        }
        return res.render('home',{
            title: "TODO APP",
            todo_list : todoapp
        
        })
    })
};
     
// create task controller
module.exports.createTAsk= function(req,res){
    
    Todo.create({
        description: req.body.description,
        catagory: req.body.catagory,
        date: req.body.date
    }, function(err,newTAsk){
        if(err){
            console.log('error in creating task');
            return;
        }
    return res.redirect('back');
    }
    );
};

// deleting a task
module.exports.deleteTask = function (req, res) {
    for(let i in req.body){
      
       Todo.findByIdAndDelete(req.body[i], function (err) {
        if (err) {
          console.log('Error in Deleting the item'); 
          return;
        }
  
      })
    }
    return res.redirect('back');
  }