import {SharedController} from '../../../../shared/config/SharedController';
import {Controller, Get, Logger, Query} from '@nestjs/common';
import {CustomerControllerConstants} from '../../../constants/CustomerControllerConstants';
import {ApiAcceptedResponse, ApiBasicAuth, ApiTags} from '@nestjs/swagger';
import {HeadersConstants} from '../../../../../contexts/shared/domain/constants/HeadersConstants';
import {AppAuth} from '../../../../../contexts/shared/infrastructure/nestjs/AppAuth';
import {SearchAllCustomersGetControllerResponse} from './SearchAllCustomersGetControllerResponse';
import {SearchAllCustomersGetControllerRequest} from './SearchAllCustomersGetControllerRequest';
import {PaginationType} from '../../../../../contexts/shared/domain/PaginationType';
import {CustomerDto} from '../../../../../contexts/customer/domain/CustomerDto';
import {SearchAllCustomersQuery} from '../../../../../contexts/customer/application/search/all/SearchAllCustomersQuery';

@Controller(CustomerControllerConstants.PATH)
@ApiTags(CustomerControllerConstants.SWAGGER_TAG)
@ApiBasicAuth(HeadersConstants.APP_KEY)
export class SearchAllCustomersGetController extends SharedController {

    protected readonly logger: Logger = new Logger(SearchAllCustomersGetController.name);

    @Get(CustomerControllerConstants.SEARCH_ALL_CUSTOMERS)
    @AppAuth()
    @ApiAcceptedResponse({type: SearchAllCustomersGetControllerResponse})
    async exec(
        @Query() request: SearchAllCustomersGetControllerRequest,
    ): Promise<SearchAllCustomersGetControllerResponse> {
        this.logger.log(`[${this.exec.name}] INIT :: ${JSON.stringify(request)}`);
        const response = new SearchAllCustomersGetControllerResponse();
        response.data = await this.query<PaginationType<CustomerDto>>(new SearchAllCustomersQuery(
            Number(request.page),
            Number(request.limit),
        ));
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return response;
    }
}