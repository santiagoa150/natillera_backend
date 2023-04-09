import {Exception} from '../../../shared/domain/Exception';
import {ErrorMessagesConstants} from '../../../shared/domain/constants/ErrorMessagesConstants';
import {ErrorStatusCodesConstants} from '../../../shared/domain/constants/ErrorStatusCodesConstants';
import {HttpStatus} from '@nestjs/common';

export class MoneyPoolNotFoundException extends Exception {
    constructor(
        customMessage?: ErrorMessagesConstants,
        customStatus?: ErrorStatusCodesConstants,
    ) {
        super(
            customMessage || ErrorMessagesConstants.MONEY_POOL_NOT_FOUND,
            customStatus || ErrorStatusCodesConstants.MONEY_POOL_NOT_FOUND,
            HttpStatus.NOT_FOUND,
        );
    }
}