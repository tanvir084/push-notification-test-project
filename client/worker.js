console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Hirebeet!",
    icon: "https://hirebeet-be.s3.amazonaws.com/files/f5ff03bb-dbcc-4bb9-a31d-32cbc0d49108-logo.jpg"
  });
});