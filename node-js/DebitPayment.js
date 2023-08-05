const PaymentStrategy = require("./PaymentStrategy");
const logger = require("./Logger");

// const logger = new Logger().getInstance();
// const logger = new Logger();
module.exports = class DebitPayment extends PaymentStrategy{
    processPayment(amount){
        logger.log('logger:::',logger);
        logger.log(`Payment has been done of ${amount} through debit card`);
    }
}