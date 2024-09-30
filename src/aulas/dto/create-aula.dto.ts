import { IsString, IsNumber, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAulaDto {

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    edificio: number;
    
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    piso: number;
    
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    numeroAula: number;
}