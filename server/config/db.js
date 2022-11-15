// Connect to Database

const mongoose = require('mongoose');

const colors = require('colors');

const connectDB = async () => {
  try {
    const mongoDBConnect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      colors.green(`> MongoDB Connected to: ${mongoDBConnect.connection.host}`)
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { connectDB };
