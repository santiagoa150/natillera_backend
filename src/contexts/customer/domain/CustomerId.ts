import {IdValueObject} from '../../shared/domain/value-object/IdValueObject';

export class CustomerId extends IdValueObject {

    public static buildRawId(): string {
        return super.buildRawId();
    }
}