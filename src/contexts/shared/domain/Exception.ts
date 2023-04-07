import {HttpException, HttpStatus} from '@nestjs/common';
import {ErrorStatusCodesConstants} from './constants/ErrorStatusCodesConstants';
import {ErrorMessagesConstants} from './constants/ErrorMessagesConstants';

export abstract class Exception extends HttpException {
    protected constructor(
        customMessage: ErrorMessagesConstants,
        statusCode: ErrorStatusCodesConstants,
        httpStatusCode: HttpStatus,
    ) {
        super({message: customMessage, statusCode: statusCode}, httpStatusCode);
    }
}
