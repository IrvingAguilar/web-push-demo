import { getMessaging, getToken } from "firebase/messaging";

const messaging = getMessaging();

// Add the public key generated from the console here.
getToken(messaging, {
  vapidKey: process.env.VUE_APP_VAPID_KEY,
})
  .then((currentToken) => {
    if (currentToken) {
      console.log("Current Token: ", currentToken);
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

console.log(messaging);
export default messaging;
