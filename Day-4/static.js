class User {
  age() {
    console.log(User.name());
    return 10;
  }

  //   Internal purpose of class
  //   Objects can't access this static props
  static name() {
    return "name";
  }
}

const vasanth = new User();
console.log(vasanth.age());
// console.log(User.name());
