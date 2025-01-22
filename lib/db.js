import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB connection is Established!");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "artsby",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Mongodb is connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
