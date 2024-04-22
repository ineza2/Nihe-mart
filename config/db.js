import mongoose from "mongoose";
require("dotenv").config({ path: "./.env" });

const dbConn = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoIndex: true,
    });
    console.log("Db connected..........");
  } catch (error) {
    console.log("Db connection Error");
    console.log(error);
  }
};

export default dbConn;
