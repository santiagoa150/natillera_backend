export class StringValueObject {
    private readonly value: string;

    public constructor(value: string,) {
        this.value = value;
    }

    public toString(): string {
        return this.value;
    }
}