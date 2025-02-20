# KnexJS

    Postress should be installed and working first on the computer
#### Setup ->
        - npm install --save express pg knex body-parser
#### Migrations ->
        - npx knex migrate:make create_todo_table
        - npx knex seed:make 01_users
        - npx knex migrate:rollback
        - npx knex migrate:latest
        - npx knex seed:run 
