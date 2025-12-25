import mongoose from 'mongoose';
import { logger } from '../loggers/logger.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    logger.info("MONGODB CONNECTED");
    console.log("MOngodb is connected BRO");
  } catch (err) {
    logger.error("Mongodb error");
    console.error(err);
    process.exit(1);
  }
}
