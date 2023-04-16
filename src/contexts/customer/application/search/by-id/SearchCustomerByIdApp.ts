import {Logger} from '@nestjs/common';
import {CustomerId} from '../../../domain/CustomerId';
import {Customer} from '../../../domain/Customer';
import {ICustomerRepository} from '../../../domain/ICustomerRepository';
import {CustomerUtils} from '../../utils/CustomerUtils';

export class SearchCustomerByIdApp {

    private readonly logger: Logger = new Logger(SearchCustomerByIdApp.name);

    constructor(
        private readonly repository: ICustomerRepository,
    ) {
    }

    async exec(customerId: CustomerId, throwExceptionIfNotExists?: boolean): Promise<Customer> {
        this.logger.log(`[${this.exec.name}] INIT :: customerId: ${customerId.toString()}, throwExceptionIfNotExists: ${throwExceptionIfNotExists}`);
        const customerFound: Customer = await this.repository.searchById(customerId);
        CustomerUtils.validateIfCustomerDoesntExists(customerFound, throwExceptionIfNotExists);
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return customerFound;
    }
}