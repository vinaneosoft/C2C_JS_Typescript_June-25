class ClassNotification {
    send ():void {
        console.log("notification send ... ");
    }
}
 
class EmailNotification extends ClassNotification  {
    send (): void {
        console.log("email notification send ..."); 
    }
}

class SMSNotification extends ClassNotification {
    send () : void {
        console.log("sms notification send ...");
    }
}
class PushNotification extends ClassNotification {
    send () : void {
        console.log("push notification send ...");
    }
}
 
function sendAll(notifications : ClassNotification[]): void {
    for (const notification of notifications) {
        notification.send(); // run time polymorphism
    }
}
 
// typescript : compiler only can check the types , 
// object type gets decided at runtime : js
// js does not have any mechansism to check wrong objects
const notifications: ClassNotification[] = [
    new EmailNotification(),
    new SMSNotification(),
    new PushNotification()
];
 
sendAll(notifications);

