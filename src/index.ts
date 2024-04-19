import { BackendApp } from "./shared/Core/App";

try {
    new BackendApp().start();
} catch (error) {
    console.log(error);
    process.exit(1);
}
