// Single Responsibility Principle
// Each fn or class should have only 1 responsibility to change

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

class PaymentProcessor {
  payCredit(cardNumber, order) {
    console.log(`Processing the credit payment with card number ${cardNumber}`);
    order.status = "paid";
  }

  payDebit(cardNumber, order) {
    console.log(`Processing the debit payment with card number ${cardNumber}`);
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

const newOrder = new Order();
newOrder.addItem(tomato);
console.log(newOrder);

const paymentProcessor = new PaymentProcessor();
// paymentProcessor.payDebit("1234 5678 9012 3456", order);
paymentProcessor.payCredit("1234 5678 9012 3456", order);
// paymentProcessor.payDebit("1234 5678 9012 3456", newOrder);
console.log("-".repeat(60));
console.log(order);
console.log(newOrder);
