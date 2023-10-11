class TicketProcessingStrategy {
  orderTickets(tickets) {
    throw new Error("Base class cannot be implemented");
  }
}

class FIFOStrategy extends TicketProcessingStrategy {
  orderTickets(tickets) {
    return tickets;
  }
}

class LIFOStrategy extends TicketProcessingStrategy {
  orderTickets(tickets) {
    return tickets.reverse();
  }
}

class RANDOMStrategy extends TicketProcessingStrategy {
  orderTickets(tickets) {
    return tickets.sort(() => Math.random() - 0.5);
  }
}

// class

const FIFO = new FIFOStrategy();
const LIFO = new LIFOStrategy();
const RANDOM = new RANDOMStrategy();

module.exports = {
  FIFO,
  LIFO,
  RANDOM,
};
