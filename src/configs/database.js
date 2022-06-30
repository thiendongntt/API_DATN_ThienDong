const Logger = require("../helpers/logger");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    Logger.info("connect db successfully!");
  } catch (error) {
    Logger.error("connect db failed!", error);
  }
};

const disconnect = async (cb) => {
  await mongoose.connection.close(null, cb && cb());
};

module.exports = { connect, disconnect };
