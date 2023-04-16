import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {SearchCustomerByIdQuery} from './SearchCustomerByIdQuery';
import {CustomerDto} from '../../../domain/CustomerDto';
import {Logger} from '@nestjs/common';
import {SearchCustomerByIdApp} from './SearchCustomerByIdApp';
import {CustomerId} from '../../../domain/CustomerId';
import {Customer} from '../../../domain/Customer';

@QueryHandler(SearchCustomerByIdQuery)
export class SearchCustomerByIdQueryHandler implements IQueryHandler<SearchCustomerByIdQuery, CustomerDto> {

    private readonly logger: Logger = new Logger(SearchCustomerByIdQueryHandler.name);

    constructor(
        private readonly searchCustomerByIdApp: SearchCustomerByIdApp,
    ) {
    }

    async execute(query: SearchCustomerByIdQuery): Promise<CustomerDto> {
        this.logger.log(`[${this.execute.name}] INIT :: query: ${JSON.stringify(query)}`);
        const customerFound: Customer = await this.searchCustomerByIdApp.exec(new CustomerId(query.customerId), true);
        const response: CustomerDto = customerFound.toPrimitives();
        this.logger.log(`[${this.execute.name}] FINISH ::`);
        return response;
    }
}