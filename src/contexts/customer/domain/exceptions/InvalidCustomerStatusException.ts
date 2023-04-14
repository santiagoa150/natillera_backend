import {Exception} from '../../../shared/domain/Exception';
import {ErrorMessagesConstants} from '../../../shared/domain/constants/ErrorMessagesConstants';
import {ErrorStatusCodesConstants} from '../../../shared/domain/constants/ErrorStatusCodesConstants';
import {HttpStatus} from '@nestjs/common';

export class InvalidCustomerStatusException extends Exception {
    constructor() {
        super(
            ErrorMessagesConstants.INVALID_CUSTOMER_STATUS,
            ErrorStatusCodesConstants.INVALID_CUSTOMER_STATUS,
            HttpStatus.BAD_REQUEST,
        );
    }
}