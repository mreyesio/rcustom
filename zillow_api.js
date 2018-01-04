
module.exports = {
    
    genEJS:function(id_num,res,house){
    const spawn = require('child_process').spawn;
    const scriptExecution = spawn("python", ["homes.py"]);
    
    var output
    // Handle normal output
    scriptExecution.stdout.on('data', (data) => {
        console.log(String.fromCharCode.apply(null, data));
        var output =JSON.parse(String.fromCharCode.apply(null, data));
        
        console.log(output.city);
        res.render("homeEx.ejs",{house:house,z_id:id_num,output:output});
        return output;
    });
    
    var data = "12070368";
    
    scriptExecution.stdin.write(id_num);
    // End data write
    scriptExecution.stdin.end();
    }
}

