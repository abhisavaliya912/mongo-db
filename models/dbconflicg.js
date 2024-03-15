const { MongoClient } = require('mongodb');
// mongodb://localhost:27017/
const url = 'mongodb://localhost:27017/practicecrud';
const client = new MongoClient(url);

async function main(){
    await client.connect();
    return client.db();
}
module.exports= main;