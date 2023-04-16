import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {SearchAllCustomersQuery} from './SearchAllCustomersQuery';
import {PaginationType} from '../../../../shared/domain/PaginationType';
import {CustomerDto} from '../../../domain/CustomerDto';
import {Logger} from '@nestjs/common';
import {SearchAllCustomersApp} from './SearchAllCustomersApp';
import {Customer} from '../../../domain/Customer';
import {PaginationParam} from '../../../../shared/domain/PaginationParam';

@QueryHandler(SearchAllCustomersQuery)
export class SearchAllCustomersQueryHandler implements IQueryHandler<SearchAllCustomersQuery, PaginationType<CustomerDto>> {

    private readonly logger: Logger = new Logger(SearchAllCustomersQueryHandler.name);

    constructor(
        private readonly searchAllCustomersApp: SearchAllCustomersApp,
    ) {
    }

    async execute(query: SearchAllCustomersQuery): Promise<PaginationType<CustomerDto>> {
        this.logger.log(`[${this.execute.name}] INIT :: query: ${JSON.stringify(query)}`);
        const customersFound: PaginationType<Customer> = await this.searchAllCustomersApp.exec(
            new PaginationParam(query.page),
            new PaginationParam(query.limit),
        );
        const response: PaginationType<CustomerDto> = new PaginationType<CustomerDto>();
        response.data = customersFound.data.map((c: Customer) => c.toPrimitives());
        response.metadata = customersFound.metadata;
        this.logger.log(`[${this.execute.name}] FINISH ::`);
        return response;
    }
}