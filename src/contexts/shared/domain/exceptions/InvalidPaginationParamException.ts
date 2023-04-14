import {Exception} from '../Exception';
import {ErrorMessagesConstants} from '../constants/ErrorMessagesConstants';
import {ErrorStatusCodesConstants} from '../constants/ErrorStatusCodesConstants';
import {HttpStatus} from '@nestjs/common';

export class InvalidPaginationParamException extends Exception {
    constructor(
        customErrorMessage?: ErrorMessagesConstants
    ) {
        super(
            customErrorMessage || ErrorMessagesConstants.INVALID_PAGINATION_PARAM,
            ErrorStatusCodesConstants.INVALID_PAGINATION_PARAM,
            HttpStatus.BAD_REQUEST,
        );
    }
}