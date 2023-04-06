import {HttpStatus} from '@nestjs/common';

export enum ErrorStatusCodesConstants {
    INTERNAL_SERVER_ERROR = HttpStatus.INTERNAL_SERVER_ERROR,
    INVALID_MONEY_POOL_STATUS = 1000
}
