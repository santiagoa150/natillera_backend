import {Exception} from '../../../shared/domain/Exception';
import {ErrorMessagesConstants} from '../../../shared/domain/constants/ErrorMessagesConstants';
import {ErrorStatusCodesConstants} from '../../../shared/domain/constants/ErrorStatusCodesConstants';
import {HttpStatus} from '@nestjs/common';

export class InvalidMoneyPoolFinishDateException extends Exception {
    constructor(
        customMessage?: ErrorMessagesConstants,
    ) {
        super(
            customMessage || ErrorMessagesConstants.INVALID_MONEY_POOL_FINISH_DATE,
            ErrorStatusCodesConstants.INVALID_MONEY_POOL_FINISH_DATE,
            HttpStatus.BAD_REQUEST,
        );
    }
}