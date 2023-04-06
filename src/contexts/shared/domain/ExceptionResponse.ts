import {ErrorMessagesConstants} from './constants/ErrorMessagesConstants';
import {ErrorStatusCodesConstants} from './constants/ErrorStatusCodesConstants';

export interface ExceptionResponse {
    message: ErrorMessagesConstants;
    statusCode: ErrorStatusCodesConstants;
}