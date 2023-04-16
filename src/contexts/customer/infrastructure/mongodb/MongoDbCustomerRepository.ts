import {ICustomerRepository} from '../../domain/ICustomerRepository';
import {Logger} from '@nestjs/common';
import {Model} from 'mongoose';
import {MongoDbCustomerDocument} from './MongoDbCustomerDocument';
import {CustomerDto} from '../../domain/CustomerDto';
import {Customer} from '../../domain/Customer';
import {CustomerId} from '../../domain/CustomerId';
import {PaginationParam} from '../../../shared/domain/PaginationParam';
import {PaginationType} from '../../../shared/domain/PaginationType';
import {MongoDbUtils} from '../../../shared/infrastructure/mongodb/MongoDbUtils';
import {MongoDbPaginationResponse} from '../../../shared/infrastructure/mongodb/MongoDbTypes';

export class MongoDbCustomerRepository implements ICustomerRepository {

    private readonly logger: Logger = new Logger(MongoDbCustomerRepository.name);

    constructor(
        private readonly customerModel: Model<MongoDbCustomerDocument>,
    ) {
    }

    public async create(customer: CustomerDto): Promise<Customer> {
        this.logger.log(`[${this.create.name}] INIT :: Customer To Create: ${JSON.stringify(customer)}`);
        const customerModel = new this.customerModel(customer);
        await customerModel.save();
        const customerCreated: Customer = customerModel ? Customer.fromPrimitives(customerModel) : null;
        this.logger.log(`[${this.create.name}] FINISH ::`);
        return customerCreated;
    }

    public async searchById(customerId: CustomerId): Promise<Customer> {
        this.logger.log(`[${this.searchById.name}] INIT :: customerId: ${customerId.toString()}`);
        const customerFound: CustomerDto = await this.customerModel.findOne({customerId: customerId.toString()});
        const customerMapped: Customer = customerFound ? Customer.fromPrimitives(customerFound) : null;
        this.logger.log(`[${this.searchById.name}] FINISH ::`);
        return customerMapped;
    }

    public async searchPaginated(page: PaginationParam, limit: PaginationParam): Promise<PaginationType<Customer>> {
        this.logger.log(`[${this.searchPaginated.name}] INIT :: page: ${page.toNumber()}, limit: ${limit.toNumber()}`);
        const query = MongoDbUtils.buildPaginatedQuery(page, limit);
        const aggregateResponse: MongoDbPaginationResponse<CustomerDto> = await this.customerModel.aggregate(query);
        const mappedAggregateResponse: PaginationType<CustomerDto> = MongoDbUtils.getDataFromPaginatedResponse<CustomerDto>(aggregateResponse);
        const response: PaginationType<Customer> = new PaginationType<Customer>();
        response.data = mappedAggregateResponse.data.map(Customer.fromPrimitives);
        response.metadata = mappedAggregateResponse.metadata;
        this.logger.log(`[${this.searchPaginated.name}] FINISH ::`);
        return response;

    }
}