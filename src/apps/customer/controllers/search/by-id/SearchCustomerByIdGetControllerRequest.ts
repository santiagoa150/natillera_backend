import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString} from 'class-validator';
import {ErrorMessagesConstants} from '../../../../../contexts/shared/domain/constants/ErrorMessagesConstants';

export class SearchCustomerByIdGetControllerRequest {
    @ApiProperty({required: true})
    @IsString({message: ErrorMessagesConstants.CUSTOMER_ID_MUST_BE_STRING})
    @IsNotEmpty({message: ErrorMessagesConstants.CUSTOMER_ID_REQUIRED})
        customerId: string;
}