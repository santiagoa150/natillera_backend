import {DiscreteValueObject} from '../../shared/domain/value-object/DiscreteValueObject';
import {MoneyPoolStatusConstants} from './constants/MoneyPoolStatusConstants';
import {InvalidMoneyPoolStatusException} from './exceptions/InvalidMoneyPoolStatusException';

export class MoneyPoolStatus extends DiscreteValueObject {
    constructor(value: string) {
        super(value);
        this.validateDiscrete(value);
    }

    protected validateDiscrete(value: string): void {
        if (!(Object.values(MoneyPoolStatusConstants) as string[]).includes(value)) {
            throw new InvalidMoneyPoolStatusException();
        }
    }
}