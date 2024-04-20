import { BaseException } from "../BaseException";

export const repositoryException = 'repository Exception';

export class RepositoryException extends BaseException {
    constructor() {
        super(repositoryException);
        this.name = this.constructor.name;
    }
}