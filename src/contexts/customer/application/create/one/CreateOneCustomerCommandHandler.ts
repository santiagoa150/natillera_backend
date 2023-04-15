import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {CreateOneCustomerCommand} from './CreateOneCustomerCommand';
import {CustomerDto} from '../../../domain/CustomerDto';
import {Logger} from '@nestjs/common';
import {Customer} from '../../../domain/Customer';
import {CreateOneCustomerApp} from './CreateOneCustomerApp';

@CommandHandler(CreateOneCustomerCommand)
export class CreateOneCustomerCommandHandler implements ICommandHandler<CreateOneCustomerCommand, CustomerDto> {

    private readonly logger: Logger = new Logger(CreateOneCustomerCommandHandler.name);

    constructor(
        private readonly createOneCustomerApp: CreateOneCustomerApp,
    ) {
    }

    async execute(command: CreateOneCustomerCommand): Promise<CustomerDto> {
        this.logger.log(`[${this.execute.name}] INIT :: command: ${JSON.stringify(command)}`);
        const customerCreated: Customer = await this.createOneCustomerApp.exec(
            command.firstName,
            command.middleName,
            command.lastName,
            command.secondLastName,
        );
        const response: CustomerDto = customerCreated.toPrimitives();
        this.logger.log(`[${this.execute.name}] FINISH ::`);
        return response;
    }
}