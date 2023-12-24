const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const MongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://weerakkodykn:AByO6Qofg7T3PLLp@cluster0.qsb9unp.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      cb(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = MongoConnect;
