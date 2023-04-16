import {CustomerDto} from './CustomerDto';
import {Customer} from './Customer';
import {CustomerId} from './CustomerId';
import {PaginationParam} from '../../shared/domain/PaginationParam';
import {PaginationType} from '../../shared/domain/PaginationType';

export interface ICustomerRepository {

    create(customer: CustomerDto): Promise<Customer>;

    searchById(customerId: CustomerId): Promise<Customer>;

    searchPaginated(page: PaginationParam, limit: PaginationParam): Promise<PaginationType<Customer>>;
}