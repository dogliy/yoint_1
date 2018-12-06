const express=require('express');
const events=require('events');
var Resturant=require('./modules/Restaurant.js');
    var app=express();
const port=process.env.PORT || 8082;


app.get('/',(req,res)=>{
    var myResturant=Resturant();
    var index;
    myResturant.addTables(40);
    myResturant.addTables(20);
    myResturant.addTables(30);
    myResturant.addTables(20);
    myResturant.removeAllTables();

    var data=JSON.parse(myResturant.getAllHistory());
    var text="";
    

    for(index=0;index<data.message.length;index++){
        text+=data.message[index] + "<br>";

    }
          res.send(text);

    
});



app.listen(port,()=> console.log(`Express server listening on port ${port}!`));