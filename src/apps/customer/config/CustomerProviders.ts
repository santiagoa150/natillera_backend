import {FactoryProvider} from '@nestjs/common';
import {CreateOneCustomerApp} from '../../../contexts/customer/application/create/one/CreateOneCustomerApp';
import {ICustomerRepository} from '../../../contexts/customer/domain/ICustomerRepository';
import {MongoDbCustomerRepository} from '../../../contexts/customer/infrastructure/mongodb/MongoDbCustomerRepository';

export const CustomerProviders: Array<FactoryProvider> = [
    {
        provide: CreateOneCustomerApp,
        useFactory: (
            repository: ICustomerRepository,
        ) => {
            return new CreateOneCustomerApp(
                repository,
            );
        },
        inject: [
            MongoDbCustomerRepository,
        ]
    }
];