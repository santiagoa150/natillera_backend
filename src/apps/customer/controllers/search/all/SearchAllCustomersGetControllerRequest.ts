import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsNumber, Min} from 'class-validator';
import {ErrorMessagesConstants} from '../../../../../contexts/shared/domain/constants/ErrorMessagesConstants';
import {SharedValidationsConstants} from '../../../../shared/constants/SharedValidationsConstants';
import {Type} from 'class-transformer';

export class SearchAllCustomersGetControllerRequest {
    @ApiProperty({required: true})
    @Min(1, {message: ErrorMessagesConstants.PAGINATION_PAGE_MUST_BE_GREATER_THAN_ZERO})
    @IsNumber(SharedValidationsConstants.INTEGER, {message: ErrorMessagesConstants.PAGINATION_PAGE_MUST_BE_INTEGER})
    @IsNotEmpty({message: ErrorMessagesConstants.PAGINATION_PAGE_REQUIRED})
    @Type(() => Number)
        page: number;

    @ApiProperty({required: true, default: 15})
    @Min(1, {message: ErrorMessagesConstants.PAGINATION_LIMIT_MUST_BE_GREATER_THAN_ZERO})
    @IsNumber(SharedValidationsConstants.INTEGER, {message: ErrorMessagesConstants.PAGINATION_LIMIT_MUST_BE_INTEGER})
    @IsNotEmpty({message: ErrorMessagesConstants.PAGINATION_LIMIT_REQUIRED})
    @Type(() => Number)
        limit: number;
}