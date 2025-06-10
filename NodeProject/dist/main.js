"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const my_jquery_1 = __importDefault(require("my-jquery"));
(0, my_jquery_1.default)(document).ready(() => {
    (0, my_jquery_1.default)("#demo").text("Hello from jQuery in TypeScript!");
});
