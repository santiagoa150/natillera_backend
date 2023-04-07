export class CreateMoneyPoolCommand {
    constructor(
        public readonly name: string,
        public readonly year: number,
        public readonly startDate: Date,
        public readonly finishDate: Date,
        public readonly handlingFee: number,
    ) {
    }
}