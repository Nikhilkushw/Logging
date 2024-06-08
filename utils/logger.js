// Import the Winston library
const winston = require("winston");

// Define a custom log message format
// const customFormat = winston.format.printf((info) => {
//     return `${info.timestamp} ${info.level.toUpperCase()} : ${info.message}`;
// });

// Define a format to exclude log messages with 'error' level
const excludeErrorLevel = winston.format((info) => {
    if(info.level === 'error'){
        return false; // Exclude error messages from this format
    }
    return info; // Include other log messages
});

// Define a format for info-level log messages displayed on the console
const infoConsoleFormat = winston.format.combine(
    winston.format.timestamp(), // Add a timestamp to log messages
    winston.format.splat(), // Allow message formatting with placeholders
    // customFormat // Use the custom log message format defined earlier
);

// Define a format for info-level log messages written to "common.log" file
const infoLogFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.splat(),
    excludeErrorLevel(), // Exclude error messages from this format
    // customFormat
);

// Define a format for error-level log messages written to "error.log" file
const errorLogFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.splat(),
    // customFormat
);

// Create a Winston logger instance with specified transports
const Logger = winston.createLogger({
    transports: [
        // Console transport: Display info-level and higher log messages on the console
        new winston.transports.Console({ level: "info", format: infoConsoleFormat }),

        // File transport: Write info-level log messages to "common.log" file
        new winston.transports.File({ filename: "logs/info.log", level: "info", format: infoLogFormat }),

        // File transport: Write error-level log messages to "error.log" file
        new winston.transports.File({ filename: "logs/error.log", level: "error", format: errorLogFormat })
    ]
});

// Export the configured logger for use in other modules
module.exports = Logger;