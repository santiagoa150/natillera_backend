import {Exception} from '../../../shared/domain/Exception';
import {ErrorMessagesConstants} from '../../../shared/domain/constants/ErrorMessagesConstants';
import {ErrorStatusCodesConstants} from '../../../shared/domain/constants/ErrorStatusCodesConstants';
import {HttpStatus} from '@nestjs/common';

export class CustomerNotFoundException extends Exception {
    constructor() {
        super(
            ErrorMessagesConstants.CUSTOMER_NOT_FOUND,
            ErrorStatusCodesConstants.CUSTOMER_NOT_FOUND,
            HttpStatus.NOT_FOUND,
        );
    }
}