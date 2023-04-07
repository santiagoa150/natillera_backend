import {ApiProperty} from '@nestjs/swagger';
import {IsDateString, IsNotEmpty, IsNumber, IsString, Min} from 'class-validator';
import {ErrorMessagesConstants} from '../../../../contexts/shared/domain/constants/ErrorMessagesConstants';
import {DefaultValidationOptions} from '../../../shared/config/DefaultValidationOptions';

export class CreateMoneyPoolPostControllerRequest {
    @ApiProperty({required: true})
    @IsString({message: ErrorMessagesConstants.MONEY_POOL_NAME_MUST_BE_STRING})
    @IsNotEmpty({message: ErrorMessagesConstants.MONEY_POOL_NAME_REQUIRED})
        name: string;

    @ApiProperty({required: true})
    @IsNumber(DefaultValidationOptions.INTEGER, {message: ErrorMessagesConstants.MONEY_POOL_YEAR_MUST_BE_INTEGER})
    @IsNotEmpty({message: ErrorMessagesConstants.MONEY_POOL_YEAR_REQUIRED})
        year: number;

    @ApiProperty({required: true})
    @IsDateString({}, {message: ErrorMessagesConstants.MONEY_POOL_START_DATE_MUST_BE_DATE})
    @IsNotEmpty({message: ErrorMessagesConstants.MONEY_POOL_START_DATE_REQUIRED})
        startDate: string;

    @ApiProperty({required: true})
    @IsDateString({}, {message: ErrorMessagesConstants.MONEY_POOL_FINISH_DATE_MUST_BE_DATE})
    @IsNotEmpty({message: ErrorMessagesConstants.MONEY_POOL_FINISH_DATE_REQUIRED})
        finishDate: string;

    @ApiProperty({required: true})
    @Min(0, {message: ErrorMessagesConstants.MONEY_POOL_HANDLING_FEE_MUST_BE_GREATER_THAN_ZERO})
    @IsNumber(DefaultValidationOptions.INTEGER, {message: ErrorMessagesConstants.MONEY_POOL_HANDLING_FEE_MUST_BE_INTEGER})
    @IsNotEmpty({message: ErrorMessagesConstants.MONEY_POOL_HANDLING_FEE_REQUIRED})
        handlingFee: number;
}