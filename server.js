//Express Set-Up
let express = require("express");
let app = express();


//Initial PORT Set-Up
let PORT = process.env.PORT || 8080;


//Router
//require("./routes/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


//Listner
app.listen(PORT, function(){
    console.log("You're connected to PORT: " + PORT);
});