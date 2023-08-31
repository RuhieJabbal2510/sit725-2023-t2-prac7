const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ruhie2510:ruhie2510@cluster0.b5gegtd.mongodb.net/?retryWrites=true&w=majority"; 

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  client.connect();

  module.exports = client;