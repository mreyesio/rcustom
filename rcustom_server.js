// zillow api key X1-ZWz18vgk6gjh1n_6zfs6

// initlize packages
var express = require("express");
var app =express();
//for input
var bodyParser = require("body-parser")
var request = require("request");
var MongoClient = require('mongodb').MongoClient;



var url = "mongodb://localhost/customhomes";


app.use( express.static( "public" ) );

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

////////////////////////////////////////////////////////////////


//var output = mfind.findID("rc_001");

// get to root file
app.get("/", function(req, res){
    var house = req.params.customhouse; 
     console.log(house);
    res.render("home.ejs");
   
});
//request to contact page
app.get("/contact", function(req, res){
    res.render("contact.ejs")
});



//request to custom homes
app.get("/custom", function(req, res){
    MongoClient.connect(url, function(err, db) {
        // get count of homes to populate list
        db.collection("homes").count(function(err, db_count) {
               
             res.render("custom.ejs",{db_count:db_count})
            console.log(db_count);
          });
    });
    //   generate rc_00# format to link to thumbnails to grid 
    //render custom.ejs
    
});



//request to custom house 
app.get("/custom/:customhouse", function(req, res){
    //house id
    var house = req.params.customhouse;
     
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
    //   find id house and get zillowId
      var query = { id: house };
      db.collection("homes").find(query).toArray(function(err, result) {
         if (result==0){
                 res.status(500);
                 res.send('Not Found' );
         }
         else{
            var parseDb=eval(result[0]);
            var z_id =parseDb.zid;
            db.close();
            //z_id used to populate data for api
            var generate = require("./zillow_api");
            console.log( generate.genEJS(z_id,res,house));
        }
      });
      
     
    });
    
});
//request to projects page
app.get("/projects", function(req, res){
    res.render("projects.ejs")
});

//request to about page
app.get("/about", function(req, res){
    res.render("about.ejs")
});

//request to unkonwn page
app.get("*", function(req, res){
    res.send("no touchy");
});

////////////////////////////////////////////////////////////////
//POST
//post to add contact 
app.post("/addContact",
function(req,res){
    var newContact = req.body.newcontact;
    contacts.push(newContact);
    res.redirect("/contact");
}
);

////////////////////////////////////////////////////////////////
//initlize server
app.listen("5000", "0.0.0.0",function(){
    console.log("Server has started");
});