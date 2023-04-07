import {Module} from '@nestjs/common';
import {MongoDbConnectionProvider} from './MongoDbConnectionProvider';
import {
    MongoDbMoneyPoolProviders
} from '../../../money-pool/infrastructure/mongodb/MongoDbMoneyPoolProviders';

@Module({
    providers: [
        MongoDbConnectionProvider,
        ...MongoDbMoneyPoolProviders,
    ],
    exports: [
        MongoDbConnectionProvider,
        ...MongoDbMoneyPoolProviders,
    ],
})
export class MongoDbConnectionModule {
}