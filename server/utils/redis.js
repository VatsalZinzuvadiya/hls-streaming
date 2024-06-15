const { createClient } = require('redis');
const logger = require('logger');
const config = require('../../config');

// const {
//   host, port, password, username,
// } = config.redis;

const client = createClient({
  // username,
  // socket: {
  //   host,
  //   port,
  // },
  // password,
});

client.on('error', (error) => logger.error('Redis Client Error', error));
client.connect();

module.exports = client;
