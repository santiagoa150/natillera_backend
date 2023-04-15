export class CreateOneCustomerCommand {
    constructor(
        public readonly firstName: string,
        public readonly middleName: string,
        public readonly lastName: string,
        public readonly secondLastName: string,
    ) {
    }
}