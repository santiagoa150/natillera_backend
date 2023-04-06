import {StringValueObject} from './StringValueObject';

export abstract class DiscreteValueObject extends StringValueObject {
    protected abstract validateDiscrete(value: string): void;
}