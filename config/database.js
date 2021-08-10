/**
 * Server configuration
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.02
 */

/*----- Imports --------------------------------------------------------------*/
import dotenv from 'dotenv';
import mongoose from 'mongoose';

/*----- Initialize -----------------------------------------------------------*/
dotenv.config()
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', function () {
  console.log(`Connected to MongoDB at ${this.host}:${this.port}`);
});
