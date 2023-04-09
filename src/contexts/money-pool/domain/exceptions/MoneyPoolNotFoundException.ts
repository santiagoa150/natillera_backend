import {Exception} from '../../../shared/domain/Exception';
import {ErrorMessagesConstants} from '../../../shared/domain/constants/ErrorMessagesConstants';
import {ErrorStatusCodesConstants} from '../../../shared/domain/constants/ErrorStatusCodesConstants';
import {HttpStatus} from '@nestjs/common';

export class MoneyPoolNotFoundException extends Exception {
    constructor() {
        super(
            ErrorMessagesConstants.MONEY_POOL_NOT_FOUND,
            ErrorStatusCodesConstants.MONEY_POOL_NOT_FOUND,
            HttpStatus.NOT_FOUND,
        );
    }
}