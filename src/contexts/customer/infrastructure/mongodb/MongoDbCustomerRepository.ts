import {ICustomerRepository} from '../../domain/ICustomerRepository';
import {Logger} from '@nestjs/common';
import {Model} from 'mongoose';
import {MongoDbCustomerDocument} from './MongoDbCustomerDocument';
import {CustomerDto} from '../../domain/CustomerDto';
import {Customer} from '../../domain/Customer';

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
}