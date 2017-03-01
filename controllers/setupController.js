var Todos=require('../models/todoModel');

module.exports=function(app){
    app.get('/api/setupTodos',function(req,res){
        console.log(req.url);
        var startedTodos=require('./dataseed');
        if(Todos.length==0)
        {
        Todos.create(startedTodos,function(err,results){ 
            if (err) throw err;
            res.send(results);
            console.log(Todos.length);
            })
        }
        else{
            res.send(startedTodos);
        }
    })
}