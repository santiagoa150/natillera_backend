import {SharedController} from '../../../../shared/config/SharedController';
import {Controller, Get, Logger} from '@nestjs/common';
import {MoneyPoolControllerConstants} from '../../../constants/MoneyPoolControllerConstants';
import {ApiAcceptedResponse, ApiBasicAuth, ApiTags} from '@nestjs/swagger';
import {HeadersConstants} from '../../../../../contexts/shared/domain/constants/HeadersConstants';
import {AppAuth} from '../../../../../contexts/shared/infrastructure/nestjs/AppAuth';
import {SearchOneMoneyPoolResponse} from '../../../config/MoneyPoolControllerResponses';
import {MoneyPoolDto} from '../../../../../contexts/money-pool/domain/MoneyPoolDto';
import {
    SearchActiveMoneyPoolQuery
} from '../../../../../contexts/money-pool/application/search/active/SearchActiveMoneyPoolQuery';

@Controller(MoneyPoolControllerConstants.PATH)
@ApiTags(MoneyPoolControllerConstants.SWAGGER_TAG)
@ApiBasicAuth(HeadersConstants.APP_KEY)
export class SearchActiveMoneyPoolGetController extends SharedController {

    protected readonly logger: Logger = new Logger(SearchActiveMoneyPoolGetController.name);

    @Get(MoneyPoolControllerConstants.SEARCH_ACTIVE_MONEY_POOL)
    @AppAuth()
    @ApiAcceptedResponse({type: SearchOneMoneyPoolResponse})
    async exec(): Promise<SearchOneMoneyPoolResponse> {
        this.logger.log(`[${this.exec.name}] INIT ::`);
        const response: SearchOneMoneyPoolResponse = new SearchOneMoneyPoolResponse();
        response.data = await this.query<MoneyPoolDto>(new SearchActiveMoneyPoolQuery());
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return response;
    }
}