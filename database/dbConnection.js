import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: " Latest-HMS-Database",
    })
    .then(() => {
      console.log("Database connection established successfully");
    })
    .catch((error) => {
      console.log(`Error connecting to DATABASE : ${error}`);
    });
};
