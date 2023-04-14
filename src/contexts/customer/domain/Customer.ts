import {DomainRoot} from '../../shared/domain/DomainRoot';
import {CustomerDto} from './CustomerDto';
import {CustomerId} from './CustomerId';
import {CustomerStatus} from './CustomerStatus';

export class Customer implements DomainRoot<CustomerDto> {

    private readonly customerId: CustomerId;
    private readonly status: CustomerStatus;
    private readonly firstName: string;
    private readonly middleName: string;
    private readonly lastName: string;
    private readonly secondLastName: string;
    private readonly registeredAt: Date;


    constructor(
        customerId: CustomerId, status: CustomerStatus, firstName: string, registeredAt: Date, middleName?: string, lastName?: string, secondLastName?: string,
    ) {
        this.customerId = customerId;
        this.status = status;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.secondLastName = secondLastName;
        this.registeredAt = registeredAt;
    }

    static fromPrimitives(dto: CustomerDto): Customer {
        return new Customer(
            new CustomerId(dto.customerId),
            new CustomerStatus(dto.status),
            dto.firstName,
            new Date(dto.registeredAt),
            dto.middleName,
            dto.lastName,
            dto.secondLastName,
        );
    }

    toPrimitives(): CustomerDto {
        return {
            customerId: this.customerId.toString(),
            firstName: this.firstName,
            lastName: this.lastName,
            middleName: this.middleName,
            registeredAt: this.registeredAt,
            secondLastName: this.secondLastName,
            status: this.status.toString(),
        };
    }
}