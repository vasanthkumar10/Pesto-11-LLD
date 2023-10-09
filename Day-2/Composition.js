// composition
// It means classes should be composed of other classes
// instead of using inheritance

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Order {
  items = [];
  status = "pending";

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item_id) {
    this.items.pop();
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  }
}

// Auth
class SMSAuthorisation {
  authorised = false;

  authorizePayment(otp) {
    console.log(`Authorising the SMS using OTP ${otp}`);
    this.authorised = true;
  }

  isAuthorised() {
    return this.authorised;
  }
}

// abstract class
class PaymentProcessor {
  constructor() {
    if (this.constructor === PaymentProcessor) {
      throw new Error("PaymentProcess is an abstract base class");
    }
  }

  pay(order) {
    throw new Error("Pay method is not implemented");
  }
}

class CreditPaymentProcessor extends PaymentProcessor {
  constructor(cardNumber, auth) {
    super();
    this.cardNumber = cardNumber;
    this.auth = auth;
  }

  pay(order) {
    if (!this.auth.isAuthorised()) throw new Error("Not authorised");
    console.log(
      `Processing the credit payment with card number ${this.cardNumber}`
    );
    order.status = "paid";
  }
}

class DebitPaymentProcessor extends PaymentProcessor {
  constructor(cardNumber, auth) {
    super();
    this.cardNumber = cardNumber;
    this.auth = auth;
  }

  pay(order) {
    if (!this.auth.isAuthorised()) throw new Error("Not authorised");
    console.log(
      `Processing the debit payment with card number ${this.cardNumber}`
    );
    order.status = "paid";
  }
}

class GPayPaymentProcessor extends PaymentProcessor {
  constructor(mobileNumber) {
    super();
    this.mobileNumber = mobileNumber;
  }

  pay(order) {
    console.log(
      `Processing the GPay payment with mobile number ${this.mobileNumber}`
    );
    order.status = "paid";
  }
}

class ApplePaymentProcessor extends PaymentProcessor {
  constructor(appleId) {
    super();
    this.appleId = appleId;
  }

  pay(order) {
    console.log(`Processing the Apple payment with appleID ${this.appleId}`);
    order.status = "paid";
  }
}

const tomato = new Item("tomato", 30, 3);
const onion = new Item("Onion", 15, 4);

const order = new Order();
order.addItem(tomato);
order.addItem(onion);
console.log(order);
console.log("-".repeat(60));

const auth = new SMSAuthorisation();
const paymentProcessor = new CreditPaymentProcessor(
  "1234 5678 9012 3456",
  auth
);
auth.authorizePayment("1234");
// const paymentProcessor = new GPayPaymentProcessor("9999999999");
paymentProcessor.pay(order);
console.log("-".repeat(60));
console.log(order);
