const winston = require("winston");

const excludeErrorLevel = winston.format((info) => {
    if(info.level === 'error'){
        return false;
    }
    return info;
});

const infoLogFormat = winston.format.combine(
    winston.format.timestamp(),
    excludeErrorLevel()
);

const errorLogFormat = winston.format.combine(
    winston.format.timestamp()
);

const Logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: "logs/info.log", level: "info", format: infoLogFormat }),
        new winston.transports.File({ filename: "logs/error.log", level: "error", format: errorLogFormat })
    ]
});

module.exports = Logger;
