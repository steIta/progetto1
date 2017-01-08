module.exports=function(app){
  
    app.get('/', function(req,res,next){
          res.sendFile(global.dirClient + '/views/index.html');
    });

    app.get('/profilo', function(req,res,next){
        res.sendFile(global.dirClient + '/views/profilo.html');
    });

   
}
