"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./shared/Core/App");
try {
    new App_1.backendApp().start();
}
catch (error) {
    console.log(error);
    process.exit(1);
}
// process.on('unhandledRejection', (error) => {
//     console.log(error);
//     process.exit(1);
// });
