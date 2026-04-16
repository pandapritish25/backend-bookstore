// this is there so that this will hold all the config files needing to connect to my data base
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;


async function connectDB(app) {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to Mongo DB");
    app.listen(PORT , () => console.log(`Server is running on ${PORT}`));
}

export default connectDB;