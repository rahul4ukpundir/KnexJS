import express from "express";
import bodyParser from "body-parser";
import Knex from "knex";
const development = {
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    database: "todo_test",
    user: "postgres",
    password: "Gl@2024",
  },
};
const knexInstance = Knex(development);
 
const app = express();
 
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get("/users", (request, response) => {
  knexInstance
    .select()
    .from("todo")
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      response.send(error);
    });
});
 
app.get("/testUrl", (request, response) => {
  response.send("Welcome to Knex JS");
});
 
app.listen(4000, () => {
  console.log("app is running on 4000");
});