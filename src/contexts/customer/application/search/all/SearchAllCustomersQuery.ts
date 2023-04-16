export class SearchAllCustomersQuery {
    constructor(
        public readonly page: number,
        public readonly limit: number,
    ) {
    }
}