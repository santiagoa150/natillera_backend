import {DiscreteValueObject} from '../../shared/domain/value-object/DiscreteValueObject';
import {InvalidMoneyPoolStatusException} from '../../money-pool/domain/exceptions/InvalidMoneyPoolStatusException';
import {CustomerStatusConstants} from './constants/CustomerStatusConstants';

export class CustomerStatus extends DiscreteValueObject {
    constructor(value: string) {
        super(value);
        this.validateDiscrete(value);
    }

    protected validateDiscrete(value: string): void {
        if (!(Object.values(CustomerStatusConstants) as string[]).includes(value)) {
            throw new InvalidMoneyPoolStatusException();
        }
    }
}