import {DomainRoot} from '../../shared/domain/DomainRoot';
import {MoneyPoolDto} from './MoneyPoolDto';
import {MoneyPoolId} from './MoneyPoolId';
import {MoneyPoolStatus} from './MoneyPoolStatus';

export class MoneyPool implements DomainRoot<MoneyPoolDto> {

    private readonly moneyPoolId: MoneyPoolId;
    private readonly status: MoneyPoolStatus;
    private readonly name: string;
    private readonly year: number;
    private readonly startDate: Date;
    private readonly finishDate: Date;
    private readonly handlingFee: number;


    constructor(
        moneyPoolId: MoneyPoolId, status: MoneyPoolStatus, name: string, year: number, startDate: Date,
        finishDate: Date, handlingFee: number
    ) {
        this.moneyPoolId = moneyPoolId;
        this.status = status;
        this.name = name;
        this.year = year;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.handlingFee = handlingFee;
    }

    static fromPrimitives(dto: MoneyPoolDto): MoneyPool {
        return new MoneyPool(
            new MoneyPoolId(dto.moneyPoolId),
            new MoneyPoolStatus(dto.status),
            dto.name,
            dto.year,
            new Date(dto.startDate),
            new Date(dto.finishDate),
            dto.handlingFee,
        );
    }

    toPrimitives(): MoneyPoolDto {
        return {
            finishDate: this.finishDate,
            handlingFee: this.handlingFee,
            startDate: this.startDate,
            moneyPoolId: this.moneyPoolId.toString(),
            name: this.name,
            status: this.status.toString(),
            year: this.year,
        };
    }
}