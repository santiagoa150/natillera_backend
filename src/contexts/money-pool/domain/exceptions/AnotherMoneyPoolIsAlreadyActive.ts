import {Exception} from '../../../shared/domain/Exception';
import {ErrorMessagesConstants} from '../../../shared/domain/constants/ErrorMessagesConstants';
import {ErrorStatusCodesConstants} from '../../../shared/domain/constants/ErrorStatusCodesConstants';
import {HttpStatus} from '@nestjs/common';

export class AnotherMoneyPoolIsAlreadyActive extends Exception {
    constructor() {
        super(
            ErrorMessagesConstants.ANOTHER_MONEY_POOL_IS_ALREADY_ACTIVE,
            ErrorStatusCodesConstants.ANOTHER_MONEY_POOL_IS_ALREADY_ACTIVE,
            HttpStatus.CONFLICT,
        );
    }
}