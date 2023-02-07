import app from "./../index.js";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();
var port = +process.env.PORT || 5000;
app.listen(port, function () {
    console.log(chalk.green("Server started on port ".concat(port)));
});
