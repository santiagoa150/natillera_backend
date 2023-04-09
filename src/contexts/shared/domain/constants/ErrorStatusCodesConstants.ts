import {HttpStatus} from '@nestjs/common';

export enum ErrorStatusCodesConstants {
    INTERNAL_SERVER_ERROR = HttpStatus.INTERNAL_SERVER_ERROR,
    INVALID_MONEY_POOL_FINISH_DATE = 1001,
    INVALID_MONEY_POOL_STATUS = 1000,
    MONEY_POOL_NOT_FOUND = 1002,
    MONEY_POOL_NOT_DELETED = 1003,
}
