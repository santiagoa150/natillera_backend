import {DomainRoot} from '../../shared/domain/DomainRoot';
import {MoneyPoolDto} from './MoneyPoolDto';
import {MoneyPoolId} from './MoneyPoolId';
import {MoneyPoolStatus} from './MoneyPoolStatus';

export class MoneyPool implements DomainRoot<MoneyPoolDto> {

    private readonly moneyPoolId: MoneyPoolId;
    private readonly status: MoneyPoolStatus;
    private readonly name: string;
    private readonly year: number;
    private readonly initialMonth: number;
    private readonly finalMonth: number;
    private readonly totalMonths: number;
    private readonly handlingFee: number;


    constructor(
        moneyPoolId: MoneyPoolId, status: MoneyPoolStatus, name: string, year: number, initialMonth: number,
        finalMonth: number, totalMonths: number, handlingFee: number
    ) {
        this.moneyPoolId = moneyPoolId;
        this.status = status;
        this.name = name;
        this.year = year;
        this.initialMonth = initialMonth;
        this.finalMonth = finalMonth;
        this.totalMonths = totalMonths;
        this.handlingFee = handlingFee;
    }

    static fromPrimitives(dto: MoneyPoolDto): MoneyPool {
        return new MoneyPool(
            new MoneyPoolId(dto.moneyPoolId),
            new MoneyPoolStatus(dto.status),
            dto.name,
            dto.year,
            dto.initialMonth,
            dto.finalMonth,
            dto.totalMonths,
            dto.handlingFee,
        );
    }

    toPrimitives(): MoneyPoolDto {
        return {
            finalMonth: this.finalMonth,
            handlingFee: this.handlingFee,
            initialMonth: this.initialMonth,
            moneyPoolId: this.moneyPoolId.toString(),
            name: this.name,
            status: this.status.toString(),
            totalMonths: this.totalMonths,
            year: this.year,
        };
    }
}