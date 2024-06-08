const winston = require("winston");

const excludeErrorLevel = winston.format((info) => {
    if(info.level === 'error'){
        return false; // Exclude error messages from this format
    }
    return info; // Include other log messages
});

const infoConsoleFormat = winston.format.combine(
    winston.format.timestamp(), // Add a timestamp to log messages
    winston.format.splat(), // Allow message formatting with placeholders
    // customFormat // Use the custom log message format defined earlier
);

const infoLogFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.splat(),
    excludeErrorLevel(),
);

const errorLogFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.splat(),
    // customFormat
);

const Logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: "info", format: infoConsoleFormat }),

        new winston.transports.File({ filename: "logs/info.log", level: "info", format: infoLogFormat }),

        new winston.transports.File({ filename: "logs/error.log", level: "error", format: errorLogFormat })
    ]
});

module.exports = Logger;
