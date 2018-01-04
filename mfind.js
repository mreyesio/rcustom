var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/customhomes";


module.exports = {
  
  
  findID:function(id_num) { 
    
    var rString= [];
    MongoClient.connect(url,rString, function(err, db) {
      if (err) throw err;
      console.log("in mongo")
      rString[0]="dfsdf";
    
  });
  return rString[0];
  }
  }
  



