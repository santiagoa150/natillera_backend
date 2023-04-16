import {SharedController} from '../../../../shared/config/SharedController';
import {Controller, Get, Logger, Query} from '@nestjs/common';
import {CustomerControllerConstants} from '../../../constants/CustomerControllerConstants';
import {ApiAcceptedResponse, ApiBasicAuth, ApiTags} from '@nestjs/swagger';
import {HeadersConstants} from '../../../../../contexts/shared/domain/constants/HeadersConstants';
import {AppAuth} from '../../../../../contexts/shared/infrastructure/nestjs/AppAuth';
import {SearchOneCustomerResponse} from '../../../config/CustomerControllerResponses';
import {SearchCustomerByIdGetControllerRequest} from './SearchCustomerByIdGetControllerRequest';
import {CustomerDto} from '../../../../../contexts/customer/domain/CustomerDto';
import {
    SearchCustomerByIdQuery
} from '../../../../../contexts/customer/application/search/by-id/SearchCustomerByIdQuery';

@Controller(CustomerControllerConstants.PATH)
@ApiTags(CustomerControllerConstants.SWAGGER_TAG)
@ApiBasicAuth(HeadersConstants.APP_KEY)
export class SearchCustomerByIdGetController extends SharedController {

    protected readonly logger: Logger = new Logger(SearchCustomerByIdGetController.name);

    @Get(CustomerControllerConstants.SEARCH_CUSTOMER_BY_ID)
    @AppAuth()
    @ApiAcceptedResponse({type: SearchOneCustomerResponse})
    async exec(
        @Query() request: SearchCustomerByIdGetControllerRequest,
    ): Promise<SearchOneCustomerResponse> {
        this.logger.log(`[${this.exec.name}] INIT :: ${JSON.stringify(request)}`);
        const response: SearchOneCustomerResponse = new SearchOneCustomerResponse();
        response.data = await this.query<CustomerDto>(new SearchCustomerByIdQuery(
            request.customerId,
        ));
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return response;
    }
}