module.exports = {
    development : {
        client: 'pg',
        connection: 'postgres://localhost/todos_test',
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        }
    }
}

