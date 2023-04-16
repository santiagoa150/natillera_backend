import {ApiProperty} from '@nestjs/swagger';

export class MetadataType {
    @ApiProperty({type: Number}) page = 1;
    @ApiProperty({type: Number}) total = 0;
    @ApiProperty({type: Number}) totalPages = 1;
}