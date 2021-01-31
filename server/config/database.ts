import mongoose from 'mongoose';

module.exports.setup = () => {
  // Set up default mongoose connection
  mongoose.connect('mongodb://localhost:27017/TestingDB', {
    useNewUrlParser: true
  });
  // Get Mongoose to use the global promise library
  mongoose.Promise = global.Promise;
  // Get the default connection
  const mongodb = mongoose.connection;

  mongodb.on('connected', console.log.bind(console, 'MongoDB successfully connected'));
  // Bind connection to error event (to get notification of connection errors)
  mongodb.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
