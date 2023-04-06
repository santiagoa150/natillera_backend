import {ApiProperty} from '@nestjs/swagger';

export class MoneyPoolDto {
    @ApiProperty() moneyPoolId: string;
    @ApiProperty() status: string;
    @ApiProperty() name: string;
    @ApiProperty() year: number;
    @ApiProperty() initialMonth: number;
    @ApiProperty() finalMonth: number;
    @ApiProperty() totalMonths: number;
    @ApiProperty() handlingFee: number;
}