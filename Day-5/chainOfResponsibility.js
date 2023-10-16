// class PurchaseRequest {
//   constructor(amount) {
//     this.amount = amount;
//   }
// }

// class Manager {
//   constructor() {
//     this.approvalLimit = 10000;
//   }

//   processRequest(request, boss) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved purchase request of rs.${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve of rs.${request.amount}`
//       );
//       boss.processRequest(request);
//     }
//   }
// }

// class Director {
//   constructor() {
//     this.approvalLimit = 50000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved purchase request of rs.${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve of rs.${request.amount}`
//       );
//     }
//   }
// }

// class VP {
//   constructor() {
//     this.approvalLimit = 500000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved purchase request of rs.${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve of rs.${request.amount}`
//       );
//     }
//   }
// }

// const manager = new Manager();
// const director = new Director();
// const vp = new VP();

// const request1 = new PurchaseRequest(4000);
// const request2 = new PurchaseRequest(40000);
// const request3 = new PurchaseRequest(400000);
// const request4 = new PurchaseRequest(4000000);

// manager.processRequest(request1);
// manager.processRequest(request2);
// // director.processRequest(request2);
// // director.processRequest(request3);
// // vp.processRequest(request3);
// // vp.processRequest(request4);

// CHAIN OF RESPONSIBILITY

// HANDLER
class Approver {
  constructor(approvalLimit) {
    this.approvalLimit = approvalLimit;
    this.successor = null;
    this.availability = true;
  }

  setSuccessor(successor) {
    this.successor = successor;
  }

  processRequest(request) {
    if (!this.availability && this.successor) {
      this.successor.processRequest(request);
      return;
    }
    if (request.amount <= this.approvalLimit) {
      console.log(
        `${this.constructor.name} approved purchase request of rs.${request.amount}`
      );
    } else if (this.successor) {
      this.successor.processRequest(request);
    } else {
      console.log(`Need to get approval from board members`);
    }
  }
}

class PurchaseRequest {
  constructor(amount) {
    this.amount = amount;
  }
}

class Manager extends Approver {
  constructor() {
    super(10000); // 10,000 approval limit
  }
}

class Director extends Approver {
  constructor() {
    super(50000); // 10,000 approval limit
  }
}

class VP extends Approver {
  constructor() {
    super(500000); // 10,000 approval limit
  }
}

// Tree implementation
const manager = new Manager();
const director = new Director();
const vp = new VP();

manager.setSuccessor(director);
director.setSuccessor(vp);

manager.availability = false;
director.availability = false;
vp.availability = false;

// console.log(vp);

const request1 = new PurchaseRequest(4000);
const request2 = new PurchaseRequest(40000);
const request3 = new PurchaseRequest(400000);
const request4 = new PurchaseRequest(4000000);

manager.processRequest(request1);
manager.processRequest(request2);
manager.processRequest(request3);
manager.processRequest(request4);
