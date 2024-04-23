"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./app/Shared/Core/App");
try {
    new App_1.BackendApp().start();
}
catch (error) {
    console.log(error);
    process.exit(1);
}
//# sourceMappingURL=index.js.map