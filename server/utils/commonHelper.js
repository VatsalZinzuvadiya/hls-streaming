const logger = require('./logger');

const fetchPaginatedResults = async (queryFunction) => {
  try {
    const results = [];
    let lastKey = null;

    while (true) {
      let query = queryFunction();
      if (lastKey) query = query.startAt(lastKey);
      const response = await query.exec();
      response.forEach((item) => results.push(item));
      if (!response.lastKey) {
        break;
      }
      lastKey = response.lastKey;
    }
    return results;
  } catch (error) {
    logger.error('Error while fetching paginated results:', error);
    throw error;
  }
};

module.exports = {
  fetchPaginatedResults,
};
