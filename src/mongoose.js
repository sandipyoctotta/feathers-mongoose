const mongoose = require("mongoose");
const logger = require("./logger");

module.exports = function (app) {
  mongoose
    .connect(app.get("mongodb"))
    .then((result) => {
      console.log("Mongodb connection established!");
    })
    .catch((err) => {
      logger.error(err);
      process.exit(1);
    });

  // mongoose.set("debug", true);
  mongoose.set("strictQuery", false);

  app.set("mongooseClient", mongoose);
};
