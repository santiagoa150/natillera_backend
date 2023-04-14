import {FactoryProvider} from '@nestjs/common';
import {MongoDbConstantsProvider} from '../../../shared/infrastructure/mongodb/MongoDbConstantsProvider';
import {Connection, Model} from 'mongoose';
import {MongoDbModelNameConstants} from '../../../shared/infrastructure/mongodb/MongoDbModelNameConstants';
import {CustomerSchema, MongoDbCustomerDocument} from './MongoDbCustomerDocument';
import {MongoDbCustomerRepository} from './MongoDbCustomerRepository';

export const MongoDbCustomerProviders: Array<FactoryProvider> = [
    {
        provide: MongoDbConstantsProvider.CUSTOMER_DOCUMENT,
        useFactory: (connection: Connection) => {
            return connection.model(MongoDbModelNameConstants.CUSTOMER, CustomerSchema);
        },
        inject: [
            MongoDbConstantsProvider.DATABASE_CONNECTION,
        ]
    },
    {
        provide: MongoDbCustomerRepository,
        useFactory: (
            customerModel: Model<MongoDbCustomerDocument>,
        ) => {
            return new MongoDbCustomerRepository(
                customerModel,
            );
        },
        inject: [
            MongoDbConstantsProvider.CUSTOMER_DOCUMENT,
        ]
    }
];