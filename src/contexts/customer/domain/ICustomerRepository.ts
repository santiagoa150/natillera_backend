import {CustomerDto} from './CustomerDto';
import {Customer} from './Customer';

export interface ICustomerRepository {
    create(customer: CustomerDto): Promise<Customer>;
}