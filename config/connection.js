const { MongoClient } = require("mongodb");


const state = {
  db: null,
};
module.exports.connect = function (done) {
  const dbname = "sopping";
  const url = "mongodb://localhost:27017";
  MongoClient.connect(url, (err, data) => {
    if (err) return done(err);
    state.db = data.db(dbname);
    done();
  });
};

module.exports.get = function () {
  return state.db;
};
