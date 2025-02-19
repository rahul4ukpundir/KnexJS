var config = require("../knexjsfile.js")['development'];
console.log(config);
module.exports =  require('knex')(config)


