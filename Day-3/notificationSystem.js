// Observer Pattern

class User {
  constructor(name) {
    this.name = name;
  }

  notify(channelName, videoTitle) {
    console.log(
      `${this.name}: ${channelName} just uploaded a video ${videoTitle}`
    );
  }
}

class YoutubeChannel {
  constructor(channelName, notification) {
    this.subscribers = [];
    this.channelName = channelName;
    this.notification = notification;
  }

  subscribe(user) {
    console.log(`${user.name} subscribed to ${this.channelName}`);
    this.subscribers.push(user);
  }

  unsubscribe(user) {
    console.log(`${user.name} unsubscribed to ${this.channelName}`);
    this.subscribers = this.subscribers.filter(
      (subscriber) => user !== subscriber
    );
  }

  uploadVideo(videoTitle) {
    console.log("-".repeat(60));
    console.log(`New video uploaded by ${this.channelName}: ${videoTitle}`);
    console.log("-".repeat(60));
    this.notification.notifyVideoUploaded(
      this.channelName,
      this.subscribers,
      videoTitle
    );
  }

  upcomingVideo(videoTitle) {
    console.log("-".repeat(60));
    console.log(`Upcoming video by ${this.channelName}: ${videoTitle}`);
    console.log("-".repeat(60));
    this.notification.notifyUpcomingVideo(
      this.channelName,
      this.subscribers,
      videoTitle
    );
  }
}

class NotificationSystem {
  notifyVideoUploaded(channelName, subscribers, videoTitle) {
    subscribers.forEach((subscriber) => {
      subscriber.notify(channelName, videoTitle);
    });
  }

  notifyUpcomingVideo(channelName, subscribers, videoTitle) {
    subscribers.forEach((subscriber) => {
      subscriber.notify(channelName, videoTitle);
    });
  }
}

// users
const prashanth = new User("Prashanth");
const sankalp = new User("Sankalp");
const vasanth = new User("Vasanth");

// Notification Mechanism
const youtubeNotification = new NotificationSystem();

// Channel
const pesto = new YoutubeChannel("Pesto", youtubeNotification);
const node = new YoutubeChannel("Node", youtubeNotification);

// composition
pesto.subscribe(prashanth);
pesto.subscribe(sankalp);

pesto.subscribe(vasanth);
node.subscribe(vasanth);

pesto.uploadVideo("LLD class day-3");
node.uploadVideo("Node version 19 launched");

pesto.unsubscribe(vasanth);

pesto.uploadVideo("LLD class Day-4");
pesto.upcomingVideo("LLD day-5 upcoming class");
