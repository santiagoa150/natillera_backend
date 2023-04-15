import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsOptional, IsString} from 'class-validator';
import {ErrorMessagesConstants} from '../../../../../contexts/shared/domain/constants/ErrorMessagesConstants';

export class CreateOneCustomerPostControllerRequest {
    @ApiProperty({required: true})
    @IsString({message: ErrorMessagesConstants.CUSTOMER_FIRST_NAME_MUST_BE_STRING})
    @IsNotEmpty({message: ErrorMessagesConstants.CUSTOMER_FIRST_NAME_REQUIRED})
        firstName: string;

    @ApiProperty({required: false})
    @IsString({message: ErrorMessagesConstants.CUSTOMER_MIDDLE_NAME_MUST_BE_STRING})
    @IsOptional()
        middleName: string;

    @ApiProperty({required: false})
    @IsString({message: ErrorMessagesConstants.CUSTOMER_LAST_NAME_MUST_BE_STRING})
    @IsOptional()
        lastName: string;

    @ApiProperty({required: false})
    @IsString({message: ErrorMessagesConstants.CUSTOMER_SECOND_LAST_NAME_MUST_BE_STRING})
    @IsOptional()
        secondLastName: string;
}