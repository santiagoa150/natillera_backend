import {Body, Controller, Logger, Post} from '@nestjs/common';
import {MoneyPoolControllerConstants} from '../../constants/MoneyPoolControllerConstants';
import {ApiAcceptedResponse, ApiBasicAuth, ApiTags} from '@nestjs/swagger';
import {CreateMoneyPoolPostControllerResponse} from './CreateMoneyPoolPostControllerResponse';
import {SharedController} from '../../../shared/config/SharedController';
import {CreateMoneyPoolPostControllerRequest} from './CreateMoneyPoolPostControllerRequest';
import {CreateMoneyPoolCommand} from '../../../../contexts/money-pool/application/create/CreateMoneyPoolCommand';
import {AppAuth} from '../../../../contexts/shared/infrastructure/nestjs/AppAuth';
import {HeadersConstants} from '../../../../contexts/shared/domain/constants/HeadersConstants';

@Controller(MoneyPoolControllerConstants.PATH)
@ApiTags(MoneyPoolControllerConstants.SWAGGER_TAG)
@ApiBasicAuth(HeadersConstants.APP_KEY)
export class CreateMoneyPoolPostController extends SharedController {

    protected readonly logger: Logger = new Logger(CreateMoneyPoolPostController.name);

    @Post()
    @AppAuth()
    @ApiAcceptedResponse({type: CreateMoneyPoolPostControllerResponse})
    async exec(
        @Body() request: CreateMoneyPoolPostControllerRequest,
    ): Promise<CreateMoneyPoolPostControllerResponse> {
        this.logger.log(`[${this.exec.name}] INIT :: request: ${JSON.stringify(request)}`);
        const response = new CreateMoneyPoolPostControllerResponse();
        await this.dispatch(new CreateMoneyPoolCommand(
            request.name,
            request.year,
            new Date(request.startDate),
            new Date(request.finishDate),
            request.handlingFee,
        ));
        this.logger.log(`[${this.exec.name}] FINISH :: response: ${JSON.stringify(response)}`);
        return response;
    }
}