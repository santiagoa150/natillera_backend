import {Module} from '@nestjs/common';
import {MongoDbConnectionProvider} from './MongoDbConnectionProvider';
import {MongoDbMoneyPoolProviders} from '../../../money-pool/infrastructure/mongodb/MongoDbMoneyPoolProviders';
import {MongoDbCustomerProviders} from '../../../customer/infrastructure/mongodb/MongoDbCustomerProviders';

@Module({
    providers: [
        MongoDbConnectionProvider,
        ...MongoDbMoneyPoolProviders,
        ...MongoDbCustomerProviders,
    ],
    exports: [
        MongoDbConnectionProvider,
        ...MongoDbMoneyPoolProviders,
        ...MongoDbCustomerProviders,
    ],
})
export class MongoDbConnectionModule {
}