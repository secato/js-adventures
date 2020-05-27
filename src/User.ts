export class User {
    private _name: string;
    private _salary: number;

    constructor(name: string, salary: number, id?: string) {
        this._name = name;
        this._salary = salary;
    }

    get name() {
        return this._name;
    }

    get salary() {
        return this._salary;
    }
}
