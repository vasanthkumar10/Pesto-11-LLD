// auth system

class BaseAuthSystem {
  //   constructor() {
  //     if (this.constructor !== BaseAuthSystem) {
  //       throw new Error("Base class cannot be implemented");
  //     }
  //   }

  authenticate(username) {
    throw new Error("authenticate is not implemented");
  }
}

class FacebookAuthProvider extends BaseAuthSystem {
  authenticate(username) {
    console.log(`Authenticating the user - ${username} using Facebook`);
  }
}

class GoogleAuthProvider extends BaseAuthSystem {
  authenticate(username) {
    console.log(`Authenticating the user - ${username} using Google`);
  }
}

const fb = new FacebookAuthProvider();
const google = new GoogleAuthProvider();
// fb.authenticate("vasanth");
google.authenticate("vasanth");
