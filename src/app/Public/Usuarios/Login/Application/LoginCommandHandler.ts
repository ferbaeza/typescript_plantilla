import { LoginCommand } from './LoginCommand';

export class LoginCommandHandler {
  run(command: LoginCommand): object {
    console.log('command', command);
    const params = { email: command.email, password: command.password };
    return params;
  }
}
