const PaymentStrategy = require("./PaymentStrategy");
const logger = require("./Logger");

// const logger = new Logger().getInstance();;
// const logger = new Logger();
module.exports = class PaypalPayment extends PaymentStrategy{
    processPayment(amount){
        logger.log(`Payment has been done of ${amount} through paypal`);
    }
}