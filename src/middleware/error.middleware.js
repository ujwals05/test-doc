const { errorResponse } = require('../utils/response.util');

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    // Default to 500 server error
    return errorResponse(res, err.message || 'Internal Server Error', 500);
};

module.exports = errorHandler;
