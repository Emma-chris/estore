import { connect } from "mongoose";

const url: string = "mongodb://127.0.0.1:27017/myLittleStoreDB";

export const dbConfig = async () => {
  try {
    await connect(url).then(() => {
      console.clear();
      console.log("Connected ... 😍😍😍");
    });
  } catch (error) {
    console.log(error);
  }
};
