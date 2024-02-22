"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./core/app");
try {
    new app_1.backendApp().stop();
}
catch (error) {
    console.log(error);
    process.exit(1);
}
process.on('unhandledRejection', (error) => {
    console.log(error);
    process.exit(1);
});
