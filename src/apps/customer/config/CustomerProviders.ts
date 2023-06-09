import {FactoryProvider} from '@nestjs/common';
import {CreateOneCustomerApp} from '../../../contexts/customer/application/create/one/CreateOneCustomerApp';
import {ICustomerRepository} from '../../../contexts/customer/domain/ICustomerRepository';
import {MongoDbCustomerRepository} from '../../../contexts/customer/infrastructure/mongodb/MongoDbCustomerRepository';
import {SearchCustomerByIdApp} from '../../../contexts/customer/application/search/by-id/SearchCustomerByIdApp';
import {SearchAllCustomersApp} from '../../../contexts/customer/application/search/all/SearchAllCustomersApp';

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
        ],
    },
    {
        provide: SearchCustomerByIdApp,
        useFactory: (
            repository: ICustomerRepository,
        ) => {
            return new SearchCustomerByIdApp(
                repository,
            );
        },
        inject: [
            MongoDbCustomerRepository,
        ],
    },
    {
        provide: SearchAllCustomersApp,
        useFactory: (
            repository: ICustomerRepository,
        ) => {
            return new SearchAllCustomersApp(
                repository,
            );
        },
        inject: [
            MongoDbCustomerRepository,
        ],
    },
];