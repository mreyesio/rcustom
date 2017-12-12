var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/customhomes";

//find
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.collection("homes").find({}).toArray(function(err, result) {
//     if (err) throw err;
    
//     console.log(result);
//     db.close();
//   });
// });
//seacrch


module.exports = {
  
  
  findID:function(id_num) { 
    
    var rString= [];
    MongoClient.connect(url,rString, function(err, db) {
      if (err) throw err;
      console.log("in mongo")
      rString[0]="dfsdf";
      
  
    //   var query = { id: id_num };
    //   db.collection("homes").find(query).toArray(function(err, result) {
    //   if (err) throw err;
    //   var parseDb=eval(result[0]);
    //   rString=parseDb.zid;
    //   db.close();
    //   return "hehelhl"; 
    //   });
    // });
    
  });
  return rString[0];
  }
  }
  


 
// module.exports = class findID {
//   id_num(ID) {
  
//   console.log("now in find js");
  
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var query = { id: ID };
//     db.collection("homes").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       var parseDb=eval(result[0]);
//       rString=parseDb.zid;
//       db.close();
//     return rString;
//     });
//   });
  
// }

// }
// exports.findID = function (ID) {
  
//   console.log("now in find js");
  
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var query = { id: ID };
//     db.collection("homes").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       var parseDb=eval(result[0]);
//       rString=parseDb.zid;
//       db.close();
     
//     });
//   });
//   return rString;
// };


