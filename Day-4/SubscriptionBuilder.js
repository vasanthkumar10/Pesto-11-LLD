// class Subscription {
//   constructor(builder) {
//     this.plan = builder.plan;
//     this.duration = builder.duration;
//     this.autoRenew = builder.autoRenew;
//   }

//   display() {
//     console.log("Plan: ", this.plan);
//     console.log("Duration: ", this.duration);
//     console.log("Auto Renewal: ", this.autoRenew);
//   }
// }

// class SubscriptionBuilder {
//   constructor() {
//     this.plan = "basic";
//     this.duration = 3;
//     this.autoRenew = false;
//   }

//   setPlan(plan) {
//     this.plan = plan;
//     return this;
//   }

//   setDuration(duration) {
//     this.duration = duration;
//     return this;
//   }

//   enableAutoRenewal() {
//     this.autoRenew = true;
//     return this;
//   }

//   disableAutoRenewal() {
//     this.autoRenew = false;
//     return this;
//   }

//   build() {
//     return new Subscription(this);
//   }
// }

// const basicPlan = new SubscriptionBuilder().build();
// console.log(basicPlan);

// const premiumPlan = new SubscriptionBuilder()
//   .setPlan("Premium")
//   .enableAutoRenewal()
//   .setDuration(6)
//   .build();
// console.log(premiumPlan);
