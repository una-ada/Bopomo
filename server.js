/**
 * Main server script.
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.02
 * @since 2021.08.02
 * @module server
 */
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import favicon from 'serve-favicon';

/*----- Initialize -----------------------------------------------------------*/
dotenv.config();
/**
 * @const {String} __dirname Package directory.
 *
 * Infill for CommonJS module `__dirname`.
 * {@link https://techsparx.com/nodejs/esnext/dirname-es-modules.html}
 */
const __dirname = path.dirname(new URL(import.meta.url).pathname),
  app = express();

/*----- Middleware -----------------------------------------------------------*/
import authConfig from './config/auth.js';
app.use(logger('dev'));
app.use(express.json());
app.use(authConfig);
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

/*----- Routers --------------------------------------------------------------*/
import userRouter from './routes/users.js';
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/users', userRouter);
app.use((req, res) => 
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
);

/*----- Server Helper Functions ----------------------------------------------*/
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}
function onError(error) {
  if (error.syscall !== 'listen') throw error;
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
function onListening() {
  const addr = server.address(),
    bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/*----- Server Listen --------------------------------------------------------*/
const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);
const server = createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
