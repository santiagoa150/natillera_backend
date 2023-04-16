import {ICustomerRepository} from '../../domain/ICustomerRepository';
import {Logger} from '@nestjs/common';
import {Model} from 'mongoose';
import {MongoDbCustomerDocument} from './MongoDbCustomerDocument';
import {CustomerDto} from '../../domain/CustomerDto';
import {Customer} from '../../domain/Customer';
import {CustomerId} from '../../domain/CustomerId';

export class MongoDbCustomerRepository implements ICustomerRepository {

    private readonly logger: Logger = new Logger(MongoDbCustomerRepository.name);

    constructor(
        private readonly customerModel: Model<MongoDbCustomerDocument>,
    ) {
    }

    async create(customer: CustomerDto): Promise<Customer> {
        this.logger.log(`[${this.create.name}] INIT :: Customer To Create: ${JSON.stringify(customer)}`);
        const customerModel = new this.customerModel(customer);
        await customerModel.save();
        const customerCreated: Customer = customerModel ? Customer.fromPrimitives(customerModel) : null;
        this.logger.log(`[${this.create.name}] FINISH ::`);
        return customerCreated;
    }

    async searchById(customerId: CustomerId): Promise<Customer> {
        this.logger.log(`[${this.searchById.name}] INIT :: customerId: ${customerId.toString()}`);
        const customerFound: CustomerDto = await this.customerModel.findOne({customerId: customerId.toString()});
        const customerMapped: Customer = customerFound ? Customer.fromPrimitives(customerFound) : null;
        this.logger.log(`[${this.searchById.name}] FINISH ::`);
        return customerMapped;
    }
}