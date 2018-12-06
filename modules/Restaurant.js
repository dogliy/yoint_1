var events=require('events');
config 	= require('./config.js').events
const max=100;


class Restaurant extends events.EventEmitter{
    constructor(){
        super();
        this.tables=0;
       
        this.data={
            message:[]
        }
    }

    addTables(amount){
        this.tables+=amount;
        console.log("add " + amount + "  tables");
        this.data.message.push("add " + amount + "  tables");
        this.emit("tablesMountChanged");
    }

    removeTbales(amount){
        this.tables-=amount;
        console.log("remove " + amount + "  tables");
        this.data.message.push("remove " + amount + " tables");
        this.emit("tablesMountChanged");
    }

    removeAllTables(){
        this.tables=0;
        console.log("remove all tables");
        this.data.message.push("remove all tables, table amount is " + this.tables);
        this.emit("tablesMountChanged");
    }

    getAllHistory(){
        return JSON.stringify(this.data);
       
    }


}

function displayTablesAmount(){
    console.log(`amout of tables is: ${this.tables}`);
    this.data.message.push("amout of tables is: " + this.tables);
}


function checkOverTables(){
   
    if(this.tables>max){
        this.data.message.push("too many tables!!");
        console.log(`too many tables!! `)
    }
}


module.exports=()=>{
    var res=new Restaurant();
    res.on("tablesMountChanged",displayTablesAmount);
    res.on("tablesMountChanged",checkOverTables);
    return res;
}




