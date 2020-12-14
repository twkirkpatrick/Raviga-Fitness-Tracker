const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3060;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", 
{   
    useNewUrlParser: true, 
    useUnifiedTopology:true, 
    useCreateIndex:true 
});

//ROUTES
//===================================================

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);




// Start the server
app.listen(PORT, () => {
  console.log(`App running on localhost:${PORT}!`);
});
