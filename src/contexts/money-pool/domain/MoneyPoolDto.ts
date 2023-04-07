import {ApiProperty} from '@nestjs/swagger';

export class MoneyPoolDto {
    @ApiProperty() moneyPoolId: string;
    @ApiProperty() status: string;
    @ApiProperty() name: string;
    @ApiProperty() year: number;
    @ApiProperty() startDate: Date;
    @ApiProperty() finishDate: Date;
    @ApiProperty() handlingFee: number;
}