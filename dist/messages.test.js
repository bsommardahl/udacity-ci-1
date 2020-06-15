"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messages_1 = require("./messages");
test("generates the message correctly", function () {
    var message = messages_1.generateMessage();
    expect(message).toBe("Hello Allan");
});
