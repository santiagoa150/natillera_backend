import {ICustomerRepository} from '../../domain/ICustomerRepository';
import {Logger} from '@nestjs/common';
import {Model} from 'mongoose';
import {MongoDbCustomerDocument} from './MongoDbCustomerDocument';

export class MongoDbCustomerRepository implements ICustomerRepository {

    private readonly logger: Logger = new Logger(MongoDbCustomerRepository.name);

    constructor(
        private readonly customerModel: Model<MongoDbCustomerDocument>,
    ) {
    }
}