then will have to wait for next trigger 
 
yeh khud hi success hota hai
 
ab aap kuchh ni kr skte hai instead of waiting
 
it seems ke pipeline chal rhe h abhi 
 
 
yaha tak pouch gae h
 
bss yehi pass krna hn 
 
wo mene purna link open kar lea tha
 
pull krna mjhje
 
abhi to me he meeting me nhai hoon 
 
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", (table)=>{
    table.increments();
    table.string("Name").notNullable();
    table.string("Email").notNullable();
    table.integer("Age").notNullable();
  })
 
};
 
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable("users");
 
};
 
 
npx knex seed:make 01_user
 
npx knex migrate:rollback
 
npx knex migrate:latest
 
npx knex seed:run
 
import express from 'express';
import bodyParser from 'body-parser';
import knexfile from './knexfile';
 
const app = express();
 
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({ extended: false}))
 
app.get('/users', (request, response)=> {
    knexInstance.select('select * from users').then(data => {
        response.send(data);
    }).catch(error => {
        response    .status(500
        ).send(error);  
    })
})
 
app.get('/testUrl', (request, response)=>{
    response.send('Welcome to Knex JS')
})
 
app.listen(4000, ()=> {
    console.log("app is running on 4000");
})
 
  knexfile.select().from('users').then((data)=> {
    response.send(data);
  }).catch((error)=> {
    response.send(error);
  })
 
"type": "module",
 
module.exports = {
 
  development: {
    client: 'pg',
    connection: {
      host: "localhost",
      port: 5432,
      database: "todo",
      user: "postgres",
      password: "Bajrang@1",
    }
  },
 
  production: {
    client: 'postgresql',
    connection: {
      database: 'todo',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
 
};
 
 
export const development = {
  client: 'pg',
  connection: {
    host: "localhost",
    port: 5432,
    database: "todo",
    user: "postgres",
    password: "Bajrang@1",
  }
};
 
https://github.com/rahul4ukpundir/KnexJS.git
 
knexfile.zip
 
import express from "express";
import bodyParser from "body-parser";
// import * as knexfile from "./knexfile.js";
// import knexInstance from "./knex.js";
// import { development } from "./knexfile";
import Knex from "knex";
const development = {
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    database: "todo",
    user: "postgres",
    password: "Bajrang@1",
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
 
 