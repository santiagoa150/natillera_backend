import {SharedController} from '../../../../shared/config/SharedController';
import {Body, Controller, Logger, Post} from '@nestjs/common';
import {CustomerControllerConstants} from '../../../constants/CustomerControllerConstants';
import {ApiAcceptedResponse, ApiBasicAuth, ApiTags} from '@nestjs/swagger';
import {HeadersConstants} from '../../../../../contexts/shared/domain/constants/HeadersConstants';
import {AppAuth} from '../../../../../contexts/shared/infrastructure/nestjs/AppAuth';
import {SuccessfulResponse} from '../../../../shared/config/SharedControllerResponses';
import {CreateOneCustomerPostControllerRequest} from './CreateOneCustomerPostControllerRequest';
import {
    CreateOneCustomerCommand
} from '../../../../../contexts/customer/application/create/one/CreateOneCustomerCommand';

@Controller(CustomerControllerConstants.PATH)
@ApiTags(CustomerControllerConstants.SWAGGER_TAG)
@ApiBasicAuth(HeadersConstants.APP_KEY)
export class CreateOneCustomerPostController extends SharedController {

    protected readonly logger: Logger = new Logger(CreateOneCustomerPostController.name);

    @Post()
    @AppAuth()
    @ApiAcceptedResponse({type: SuccessfulResponse})
    async exec(
        @Body() request: CreateOneCustomerPostControllerRequest,
    ): Promise<SuccessfulResponse> {
        this.logger.log(`[${this.exec.name}] INIT :: ${JSON.stringify(request)}`);
        const response: SuccessfulResponse = new SuccessfulResponse();
        await this.dispatch<void>(new CreateOneCustomerCommand(
            request.firstName,
            request.middleName,
            request.lastName,
            request.secondLastName,
        ));
        this.logger.log(`[${this.exec.name}] FINISH ::`);
        return response;
    }
}