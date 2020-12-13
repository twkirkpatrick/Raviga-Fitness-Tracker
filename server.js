const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3060;

/* const db = require("./models"); */

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

/* mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessDB", 
{   
    useNewUrlParser: true, 
    useUnifiedTopology:true, 
    useCreateIndex:true 
}); */

//ROUTES
//===================================================

require("./routes/html-routes.js")(app);




// Start the server
app.listen(PORT, () => {
  console.log(`App running on localhost:${PORT}!`);
});
