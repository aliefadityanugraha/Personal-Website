/** @format */

document.addEventListener("load", () => {
  Notification.requestPermission().then((perm) => {
    if (perm == "granted") {
      new Notification("Welcome");
    }
  });
});
