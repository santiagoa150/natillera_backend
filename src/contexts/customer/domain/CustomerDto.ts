import {ApiProperty} from '@nestjs/swagger';

export class CustomerDto {
    @ApiProperty() customerId: string;
    @ApiProperty() status: string;
    @ApiProperty() firstName: string;
    @ApiProperty() middleName?: string;
    @ApiProperty() lastName?: string;
    @ApiProperty() secondLastName?: string;
    @ApiProperty() registeredAt: Date;
}