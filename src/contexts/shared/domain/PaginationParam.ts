import {NumberValueObject} from './value-object/NumberValueObject';
import {InvalidPaginationParamException} from './exceptions/InvalidPaginationParamException';
import {ErrorMessagesConstants} from './constants/ErrorMessagesConstants';

export class PaginationParam extends NumberValueObject {
    constructor(value: number) {
        super(value);
        PaginationParam.ensureIsGreaterThanZero(value);
    }

    private static ensureIsGreaterThanZero(value: number): void {
        if (value <= 0) {
            throw new InvalidPaginationParamException(ErrorMessagesConstants.PAGINATION_PAGE_MUST_BE_GREATER_THAN_ZERO);
        }
    }
}