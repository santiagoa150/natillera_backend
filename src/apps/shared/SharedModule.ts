import {Module} from '@nestjs/common';
import {MongoDbConnectionModule} from '../../contexts/shared/infrastructure/mongodb/MongoDbConnectionModule';

@Module({
    imports: [
        MongoDbConnectionModule,
    ]
})
export class SharedModule {
}