import {Customer} from '../../../domain/Customer';
import {Logger} from '@nestjs/common';
import {CustomerDto} from '../../../domain/CustomerDto';
import {CustomerId} from '../../../domain/CustomerId';
import {CustomerStatusConstants} from '../../../domain/constants/CustomerStatusConstants';
import {ICustomerRepository} from '../../../domain/ICustomerRepository';

export class CreateOneCustomerApp {

    private readonly logger: Logger = new Logger(CreateOneCustomerApp.name);

    constructor(
        private readonly repository: ICustomerRepository,
    ) {
    }

    async exec(firstName: string, middleName: string, lastName: string, secondLastName: string): Promise<Customer> {
        this.logger.log(`[${this.exec.name}] INIT :: firstName: ${firstName}, middleName: ${middleName}, lastName: ${lastName}, secondLastName: ${secondLastName}`);
        const customerMapped: CustomerDto = this.mapCustomer(firstName, middleName, lastName, secondLastName);
        const customerCreated: Customer = await this.repository.create(customerMapped);
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return customerCreated;
    }

    private mapCustomer(firstName: string, middleName: string, lastName: string, secondLastName: string): CustomerDto {
        this.logger.log(`[${this.exec.name}] INIT :: Mapping Customer ::`);
        const customerId: string = CustomerId.buildRawId();
        const registeredAt: Date = new Date();
        const customerDto: CustomerDto = {
            customerId,
            firstName,
            lastName: lastName ?? undefined,
            middleName: middleName ?? undefined,
            registeredAt,
            secondLastName: secondLastName ?? undefined,
            status: CustomerStatusConstants.ACTIVE,
        };
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return customerDto;
    }
}