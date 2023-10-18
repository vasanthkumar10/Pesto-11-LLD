// movie booking application
// 1. seats -> book and unbook seat
// 2. location, no of screens
// 3. theatre
// 4. movie
// 5. payment -> make payment
// 6. user -> session
// 7. blocking of seats during payment
// 8. release the blocked seats if payment failed

class Seat {
  constructor(name) {
    this.name = name;
    this.isBooked = false;
    this.price = 100;
  }

  book() {
    this.isBooked = true;
  }

  unbook() {
    this.isBooked = false;
  }
}

class Screen {
  constructor(screenNumber, rows, cols) {
    this.screenNumber = screenNumber;
    this.seats = this.generateSeats(rows, cols);
  }

  generateSeats(rows, cols) {
    const seats = [];
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        const seat = new Seat(`${String.fromCharCode(64 + i)}${j}`);
        seats.push(seat);
      }
    }
    return seats;
  }

  getAvailableSeats() {
    return this.seats.filter((seat) => !seat.isBooked);
  }

  getOverlappingSeats(seatNames) {
    const overlappingSeats = [];
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat && seat.isBooked) overlappingSeats.push(seat);
    }

    return overlappingSeats;
  }

  bookSeats(seatNames) {
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat) seat.book();
    }
  }

  releaseSeats(seatNames) {
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat) seat.unbook();
    }
  }
}

class Show {
  constructor(movie, startTime, duration, screen) {
    this.movie = movie;
    this.startTime = startTime;
    this.duration = duration;
    this.screen = screen;
  }
}

class Theatre {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.shows = [];
    this.screens = [];
  }

  addScreen(screen) {
    this.screens.push(screen);
  }

  addShow(show) {
    this.shows.push(show);
  }

  getAvailableShows() {
    const currentTime = new Date();
    const availableShows = this.shows.filter(
      (show) => new Date(show.startTime) > currentTime
    );
    return availableShows;
  }
}

class UserSession {
  constructor(user, screen) {
    this.user = user;
    this.selectedSeats = [];
    this.screen = screen;
    this.paymentAttempt = 0;
    this.MAX_PAYMENT_ATTEMPT = 3;
    this.active = true;
  }

  selectSeats(seatNames) {
    if (this.active) {
      const overlappingSeats = this.screen.getOverlappingSeats(seatNames);
      if (overlappingSeats.length > 0) {
        console.log(
          `Hey ${this.user}! Some of your seats are already booked. Please try again`
        );
        this.active = false;
        return;
      }
      console.log("overlapping seats", overlappingSeats);
      this.screen.bookSeats(seatNames);
    } else {
      console.log("Current session is not active. Please login again");
    }
  }

  makePayment() {
    // Assume
    if (this.active) {
      const paymentSuccess = true;
      if (paymentSuccess) {
        console.log(
          `Payment succeeded for ${this.user}. Selected seats: ${this.selectedSeats}`
        );
        this.active = false;
      } else {
        this.paymentAttempt++;
        console.log(
          `Payment failed for ${this.user}. Remaining attempts: ${
            this.MAX_PAYMENT_ATTEMPT - this.paymentAttempt
          }`
        );
        if (this.paymentAttempt >= this.MAX_PAYMENT_ATTEMPT) {
          console.log(
            `Maximum payment retries completed. Releasing the seats: ${this.selectedSeats}`
          );
          this.active = false;
          this.screen.releaseSeats(this.selectedSeats);
        }
      }
    } else {
      console.log("Current session is not active. Please login again");
    }
  }
}

const PVR = new Theatre("PVR", "Chennai");

const screen1 = new Screen(1, 2, 2);
const screen2 = new Screen(2, 2, 2);
const morningShow = new Show("Leo", new Date("2023-10-18T10:00"), 180, screen1);
const afternoonShow = new Show(
  "Leo",
  new Date("2023-10-18T16:00"),
  180,
  screen2
);

const midnightShow = new Show(
  "Leo midnight masala",
  new Date("2023-10-18T23:00"),
  180,
  screen2
);

PVR.addScreen(screen1);
PVR.addScreen(screen2);
PVR.addShow(morningShow);
PVR.addShow(afternoonShow);
PVR.addShow(midnightShow);

// console.log(PVR.getAvailableShows());

// const abi = new UserSession("Abi", screen1);
// console.log("Before booking", screen1.getAvailableSeats());
// abi.selectSeats(["A1", "B1"]);
// // console.log(abi);

// abi.makePayment();
// // abi.makePayment();
// // abi.makePayment();
// // abi.makePayment();
// // abi.makePayment();
// // abi.makePayment();
// // abi.makePayment();
// console.log("After booking", screen1.getAvailableSeats());

// console.log(PVR.screens);
// console.log(PVR.shows);

// console.log("Before booking", screen1.getAvailableSeats());
// screen1.bookSeats(["A1", "A2"]);
// console.log("After booking", screen1.getAvailableSeats());
// screen1.releaseSeats(["A1", "A2"]);
// console.log("After releasing", screen1.getAvailableSeats());

// // 2 users logging and booking different seat
const shivam = new UserSession("Shivam", morningShow.screen);
const mahipal = new UserSession("Mahipal", morningShow.screen);
shivam.selectSeats(["A1"]);
console.log(`Seats selected by ${shivam.user}: ${shivam.selectedSeats}`);
console.log(morningShow.screen.getAvailableSeats());
mahipal.selectSeats(["B1"]);
console.log(`Seats selected by ${mahipal.user}: ${mahipal.selectedSeats}`);
console.log(morningShow.screen.getAvailableSeats());
shivam.makePayment();
mahipal.makePayment();

// 2 users logging and booking same seat
// const shivam = new UserSession("Shivam", morningShow.screen);
// const mahipal = new UserSession("Mahipal", morningShow.screen);
// shivam.selectSeats(["A1"]);
// console.log(`Seats selected by ${shivam.user}: ${shivam.selectedSeats}`);
// console.log(morningShow.screen.getAvailableSeats());
// mahipal.selectSeats(["A1"]);
// console.log(`Seats selected by ${mahipal.user}: ${mahipal.selectedSeats}`);
// console.log(morningShow.screen.getAvailableSeats());
// shivam.makePayment();
// mahipal.makePayment();
