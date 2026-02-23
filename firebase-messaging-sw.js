// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBtZhw5zd96zJ5WYArLoMaGbpPjxF_gRUk",
    authDomain: "login-34727.firebaseapp.com",
    projectId: "login-34727",
    storageBucket: "login-34727.firebasestorage.app",
    messagingSenderId: "721582884449",
    appId: "1:721582884449:web:9271dcef860f4f76d44c20"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Nachricht empfangen: ', payload);
    const notificationTitle = payload.notification.title || "Neue Nachricht";
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png' // Ein Platzhalter-Icon
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
