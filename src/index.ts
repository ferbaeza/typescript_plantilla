import {backendApp} from "./core/app";


try {
    new backendApp().start();
} catch (error) {
    console.log(error);
    process.exit(1);
}

process.on('unhandledRejection', (error) => {
    console.log(error);
    process.exit(1);
});