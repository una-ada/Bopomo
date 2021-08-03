/**
 * Server configuration
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.02
 * @since 2021.08.02
 */

/*----- Imports --------------------------------------------------------------*/
import mongoose from 'mongoose';

/*----- Initialize -----------------------------------------------------------*/
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on('connected', function () {
  console.log(`Connected to MongoDB at ${this.host}:${this.port}`);
});
