import {SuccessfulResponse} from '../../../../shared/config/SharedControllerResponses';
import {ApiProperty} from '@nestjs/swagger';
import {CustomerDto} from '../../../../../contexts/customer/domain/CustomerDto';
import {MetadataType} from '../../../../../contexts/shared/domain/MetadataType';

class SearchAllCustomersPaginated {
    @ApiProperty({type: CustomerDto, isArray: true}) data: Array<CustomerDto>;
    @ApiProperty({type: MetadataType}) metadata: MetadataType;
}

export class SearchAllCustomersGetControllerResponse extends SuccessfulResponse {
    @ApiProperty({type: SearchAllCustomersPaginated}) data: SearchAllCustomersPaginated;
}