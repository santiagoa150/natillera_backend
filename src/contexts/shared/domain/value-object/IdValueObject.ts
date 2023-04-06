import {StringValueObject} from './StringValueObject';
import {v4 as uuid} from 'uuid';

export abstract class IdValueObject extends StringValueObject {
    protected static buildRawId(): string {
        return uuid();
    }
}