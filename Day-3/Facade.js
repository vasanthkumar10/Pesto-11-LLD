// auth system -> structural pattern

class BaseAuthSystem {
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

class GithubAuthProvider extends BaseAuthSystem {
  authenticate(username) {
    console.log(`Authenticating the user - ${username} using Github`);
  }

  otp(otp) {
    console.log("Google's OTP");
  }
}

// Facade layer
class Auth {
  constructor() {
    this.facebookAuth = new FacebookAuthProvider();
    this.googleAuth = new GoogleAuthProvider();
    this.githubAuth = new GithubAuthProvider();
  }

  facebook(username) {
    this.facebookAuth.authenticate(username);
  }

  google(username) {
    this.googleAuth.authenticate(username);
    // otp ->
    this.googleAuth.otp("1234");
  }

  github(username) {
    this.githubAuth.authenticate(username);
  }
}

const auth = new Auth();
auth.google("sachin");
auth.facebook("virat");
