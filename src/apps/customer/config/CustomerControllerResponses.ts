import {SuccessfulResponse} from '../../shared/config/SharedControllerResponses';
import {ApiProperty} from '@nestjs/swagger';
import {CustomerDto} from '../../../contexts/customer/domain/CustomerDto';

export class SearchOneCustomerResponse extends SuccessfulResponse {
    @ApiProperty({type: CustomerDto}) data: CustomerDto;
}