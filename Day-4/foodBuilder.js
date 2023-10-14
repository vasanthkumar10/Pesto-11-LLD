class Builder {
  constructor() {
    this.menuItems = [];
    this.msg = "";
    this.deliveryAddress = null;
    this.phoneNo = null;
    this.cutlery = false;
  }

  addMenuItem(item) {
    this.menuItems.push(item);
    return this;
  }

  addMsg(msg) {
    this.msg = msg;
    return this;
  }

  addDeliveryAddress(address) {
    this.deliveryAddress = address;
    return this;
  }

  addPhoneNo(mobile) {
    this.phoneNo = mobile;
    return this;
  }

  addCutlery(isReq) {
    this.cutlery = isReq;
    return this;
  }

  build() {
    // console.log("this ->", this);
    return new FoodOrder(this);
  }
}

class FoodOrder {
  constructor(builder) {
    this.menuItems = builder.menuItems;
    this.msg = builder.msg;
    this.deliveryAddress = builder.deliveryAddress;
    this.phoneNo = builder.phoneNo;
    this.cutlery = builder.cutlery;
  }

  display() {
    console.log("Menu Items: ", this.menuItems);
    console.log("Message: ", this.msg);
    console.log("address: ", this.deliveryAddress);
    console.log("Phone No: ", this.phoneNo);
    console.log("cutlery: ", this.cutlery);
  }
}

const order = new Builder()
  .addMenuItem("pizza")
  .addMsg("use tender chicken")
  .build();
// console.log(order);

const order2 = new Builder()
  .addMenuItem("Briyani")
  .addMenuItem("dosa")
  .addCutlery(true)
  .build();

console.log(order2);
