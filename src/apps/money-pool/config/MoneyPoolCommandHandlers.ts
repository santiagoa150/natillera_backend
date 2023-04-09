import {
    CreateMoneyPoolCommandHandler
} from '../../../contexts/money-pool/application/create/CreateMoneyPoolCommandHandler';
import {
    RemoveMoneyPoolCommandHandler
} from '../../../contexts/money-pool/application/remove/RemoveMoneyPoolCommandHandler';

export const MoneyPoolCommandHandlers = [
    CreateMoneyPoolCommandHandler,
    RemoveMoneyPoolCommandHandler,
];