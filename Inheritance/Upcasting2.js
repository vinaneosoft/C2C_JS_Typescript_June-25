var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClassNotification = /** @class */ (function () {
    function ClassNotification() {
    }
    ClassNotification.prototype.send = function () {
        console.log("notification send ... ");
    };
    return ClassNotification;
}());
var EmailNotification = /** @class */ (function (_super) {
    __extends(EmailNotification, _super);
    function EmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailNotification.prototype.send = function () {
        console.log("email notification send ...");
    };
    return EmailNotification;
}(ClassNotification));
var SMSNotification = /** @class */ (function (_super) {
    __extends(SMSNotification, _super);
    function SMSNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSNotification.prototype.send = function () {
        console.log("sms notification send ...");
    };
    return SMSNotification;
}(ClassNotification));
var PushNotification = /** @class */ (function (_super) {
    __extends(PushNotification, _super);
    function PushNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PushNotification.prototype.send = function () {
        console.log("push notification send ...");
    };
    return PushNotification;
}(ClassNotification));
function sendAll(notifications) {
    for (var _i = 0, notifications_1 = notifications; _i < notifications_1.length; _i++) {
        var notification = notifications_1[_i];
        notification.send(); // run time polymorphism
    }
}
// typescript : compiler only can check the types , 
// object type gets decided at runtime : js
// js does not have any mechansism to check wrong objects
var notifications = [
    new EmailNotification(),
    new SMSNotification(),
    new PushNotification()
];
sendAll(notifications);
