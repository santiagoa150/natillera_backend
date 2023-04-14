import {ApiProperty} from '@nestjs/swagger';

export class MetadataType {
    @ApiProperty() page = 1;
    @ApiProperty() total = 0;
    @ApiProperty() totalPages = 1;
}