import {Logger} from '@nestjs/common';
import {Customer} from '../../domain/Customer';
import {CustomerNotFoundException} from '../../domain/exceptions/CustomerNotFoundException';

export class CustomerUtils {

    private static readonly logger: Logger = new Logger(CustomerUtils.name);

    public static validateIfCustomerDoesntExists(customer?: Customer, throwExceptionIfNotExists?: boolean): void {
        this.logger.log(`[${this.validateIfCustomerDoesntExists.name}] INIT ::`);
        if (throwExceptionIfNotExists && !customer) {
            throw new CustomerNotFoundException();
        }
        this.logger.log(`[${this.validateIfCustomerDoesntExists.name}] FINISH ::`);
    }
}