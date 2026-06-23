class NotificationService {

    sendEmail(message) {
        console.log("Email sent :", message);
    }

    sendSMS(message) {
        console.log("SMS sent :", message);
    }

    sendPush(message) {
        console.log("Push Notification :", message);
    }

}

const obj = new NotificationService();

obj.sendEmail("Hello User");
obj.sendSMS("OTP Sent");
obj.sendPush("New Message");