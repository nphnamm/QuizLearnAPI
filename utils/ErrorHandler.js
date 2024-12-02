class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

        // Ghi lại stack trace cho debug
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;