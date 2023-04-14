export class NumberValueObject {
    private readonly value: number;

    public constructor(value: number,) {
        this.value = value;
    }

    public toNumber(): number {
        return this.value;
    }
}