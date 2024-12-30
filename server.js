const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();
const connectDB = require("./database/db");
const {authRoute, categoryRouter, fileRoute, postRoute} =  require("./routes");
const {errorHandler} = require("./middlewares")
const notFound = require("./controllers/notFound")


//init app
const app = express();

//connect database
connectDB()

//third-party'
app.use(cors({ origin: "*" }));
app.use(express.json({limit: "500mb"}))
app.use(bodyParser.urlencoded({limit: "500mb", extended:true}));
app.use(morgan("dev"));

//route section
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/file", fileRoute)
app.use("/api/v1/posts", postRoute)

//no found route
app.use("*", notFound)

//error handling middleware
app.use(errorHandler);



module.exports = app;
