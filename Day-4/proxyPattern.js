// Banking User Account

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  checkBalance() {
    return `Current balance: ${this.balance}`;
  }

  deposit(amount) {
    console.log("amount", amount);
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

const vasanth = new BankAccount(0);
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
    // console.log("-----", target, "----", property, "value", newValue);
    if (property === "balance" && newValue < 0) {
      console.log("Invalid data");
      return false; // Return false to indicate that the assignment was not successful
    } else {
      target[property] = newValue;
      return true; // Return true to indicate that the assignment was successful
    }
  },
});

// Now it should work without the TypeError
console.log(shivam.checkBalance());
shivam.deposit(1000);
console.log(shivam.checkBalance());
shivam.deposit(1000);
console.log(shivam.checkBalance());
