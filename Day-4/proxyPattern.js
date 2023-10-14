// Banking User Account

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  checkBalance() {
    return `Current balance: ${this.balance}`;
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposited ${amount}. New balance is ${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return `Withdrawn ${amount}. New balance is ${this.balance}`;
    } else {
      return `Insufficient balance: ${this.balance}`;
    }
  }
}

const vasanth = new BankAccount(1000);
// console.log(vasanth.checkBalance());
// vasanth.deposit(100);
// console.log(vasanth.checkBalance());
// vasanth.withdraw(500);
// console.log(vasanth.checkBalance());

const shivam = new Proxy(vasanth, {
  get(target, property) {
    if (
      property === "deposit" ||
      property === "checkBalance" ||
      property === "balance"
    )
      return target[property];
    return "Access denied";
  },

  set(target, property, newValue) {
    if (property === "balance" && newValue < 0) {
      console.log("Invalid data");
    } else {
      target.deposit(newValue);
    }
  },
});

console.log(shivam.checkBalance());
shivam.deposit = 200;
// console.log(shivam.checkBalance());
// console.log(shivam.withdraw);
// shivam.balance = 100;
// console.log(shivam.checkBalance());
