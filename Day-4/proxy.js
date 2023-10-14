// proxy

const ambar = {
  name: "Ambar",
  age: 20,
};

// handler
const handler = {
  get(target, property) {
    // console.log("target ->", target);
    // console.log("property ->", property);
    return target[property];
  },

  set(target, property, newValue) {
    // console.log("target ->", target);
    // console.log("property ->", property);
    // console.log("newValue ->", newValue);
    if (property === "name") target[property] = newValue;
  },
};

const vasanth = new Proxy(ambar, handler);
console.log(vasanth.name);
vasanth.name = "vasanth";
vasanth.age = 100;
console.log(vasanth.age);
