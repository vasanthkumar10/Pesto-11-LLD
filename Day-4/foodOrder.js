class FoodOrder {
  constructor(menuItems, msg, deliveryAddress, phoneNo, cutlery) {
    this.menuItems = menuItems;
    this.msg = msg;
    this.deliveryAddress = deliveryAddress;
    this.phoneNo = phoneNo;
    this.cutlery = cutlery;
  }

  display() {
    console.log("Menu Items: ", this.menuItems);
    console.log("Message: ", this.msg);
    console.log("address: ", this.deliveryAddress);
    console.log("Phone No: ", this.phoneNo);
    console.log("cutlery: ", this.cutlery);
  }
}

// order
// const order = new FoodOrder(
//   ["briyani", "butter chicken", "kabab"],
//   "use tender chicken",
//   "chennai",
//   "1234567890",
//   false
// );

// console.log(order);

const order2 = new FoodOrder(["pizza"], "chennai", "7890123456");
console.log(order2);
