const winston = require("winston");

const excludeErrorLevel = winston.format((info) => {
    if(info.level === 'error'){
        return false;
    }
    return info;
});

const infoConsoleFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.splat(),
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
