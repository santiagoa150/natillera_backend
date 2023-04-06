import {Exception} from '../../shared/domain/Exception';
import {ErrorMessagesConstants} from '../../shared/domain/constants/ErrorMessagesConstants';
import {ErrorStatusCodesConstants} from '../../shared/domain/constants/ErrorStatusCodesConstants';
import {HttpStatus} from '@nestjs/common';

export class InvalidMoneyPoolStatusException extends Exception {
    constructor() {
        super(
            ErrorMessagesConstants.INVALID_MONEY_POOL_STATUS,
            ErrorStatusCodesConstants.INVALID_MONEY_POOL_STATUS,
            HttpStatus.BAD_REQUEST
        );
    }
}