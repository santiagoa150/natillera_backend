import {CustomerDto} from './CustomerDto';
import {Customer} from './Customer';
import {CustomerId} from './CustomerId';

export interface ICustomerRepository {

    create(customer: CustomerDto): Promise<Customer>;

    searchById(customerId: CustomerId): Promise<Customer>;
}