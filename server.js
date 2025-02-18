import express from 'express';
import bodyParser from 'body-parser';
import bodyParser from 'body-parser';

const app = express();

const bodyParser = bodyParser();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}))

app.get('/testUrl', (request, response)=>{
    response.send('Welcome to Knex JS')
})

app.listen(4000, ()=> {
    console.log("app is running on 4000");
})