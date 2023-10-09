// Open closed Principle
// It means the class should be open for extension but
// closed for modification

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

// abstract class
class PaymentProcessor {
  constructor() {
    if (this.constructor === PaymentProcessor) {
      throw new Error("PaymentProcess is an abstract base class");
    }
  }

  pay(cardNumber, order) {
    throw new Error("Pay method is not implemented");
  }
}

class CreditPaymentProcessor extends PaymentProcessor {
  pay(cardNumber, order) {
    console.log(`Processing the credit payment with card number ${cardNumber}`);
    order.status = "paid";
  }
}

class DebitPaymentProcessor extends PaymentProcessor {
  pay(cardNumber, order) {
    console.log(`Processing the debit payment with card number ${cardNumber}`);
    order.status = "paid";
  }
}

class GPayPaymentProcessor extends PaymentProcessor {
  pay(cardNumber, order) {
    console.log(`Processing the GPay payment with mobile number ${cardNumber}`);
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
// const paymentProcessor = new CreditPaymentProcessor();
const paymentProcessor = new GPayPaymentProcessor();
paymentProcessor.pay("1234 5678 9012 3456", order);
console.log("-".repeat(60));
console.log(order);
