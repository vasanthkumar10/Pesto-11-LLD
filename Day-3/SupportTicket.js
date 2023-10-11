const { generateId } = require("./utils");
const { LIFO, FIFO, RANDOM } = require("./Strategy");

class SupportTicket {
  constructor(customer, issue) {
    this.id = generateId();
    this.customer = customer;
    this.issue = issue;
  }
}

class CustomerSupport {
  constructor() {
    this.tickets = [];
  }

  create(customer, issue) {
    const ticket = new SupportTicket(customer, issue);
    this.tickets.push(ticket);
  }

  process(ticket) {
    console.log(
      `Processing ticket ${ticket.id} from ${ticket.customer} 
      about an issue ${ticket.issue}`
    );
  }

  processTickets(strategy) {
    const tickets = strategy.orderTickets(this.tickets);
    if (tickets.length === 0) {
      console.log("No tickets. Good job...");
      return;
    }
    tickets.forEach((ticket) => this.process(ticket));

    // if (processingMethod === "FIFO") {
    //   this.tickets.forEach((ticket) => this.process(ticket));
    // } else if (processingMethod === "LIFO") {
    //   this.tickets.reverse().forEach((ticket) => this.process(ticket));
    // } else if (processingMethod === "RANDOM") {
    //   const shuffledTickets = this.tickets.sort(() => Math.random() - 0.5);
    //   shuffledTickets.forEach((ticket) => this.process(ticket));
    // }
  }
}

const app = new CustomerSupport();

app.create("Vasanth", "My food is not delivered yet");
app.create("Shivam", "Zomato is one of the worst app");
app.create("Priya", "I got wrong food");

app.processTickets(FIFO);
console.log("-".repeat(60));
app.processTickets(LIFO);
console.log("-".repeat(60));
app.processTickets(RANDOM);
console.log("-".repeat(60));
