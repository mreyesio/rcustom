var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/customhomes";

var mongoose =require("mongoose")
var zpids=["12070368","51780566","51782604","12059087","12070435","12055604"]

mongoose.connect("mongodb://localhost/customhomes");
var homeSchema = new mongoose.Schema({
    id:String,
    zid:String
});


var homes=mongoose.model("home",homeSchema);
for(var i =1;i<zpids.length;i++){
    console.log(i)
    var rc_00 =new homes(
        {
            id:"rc_00"+i,
            zid:zpids[i-1]
        });
    
    rc_00.save(function(err,home){
        if(err){
            console.log("something went wrong")
        }
        else{
            console.log("we saved teh home")
            console.log(home)
        }
    });
}

