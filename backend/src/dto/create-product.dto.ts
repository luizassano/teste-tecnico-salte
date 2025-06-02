import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Nome do produto', example: 'Smartphone Samsung Galaxy' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString({ message: 'Nome deve ser uma string' })
  name: string;

  @ApiProperty({ description: 'Descrição do produto', example: 'Smartphone com tela de 6.1 polegadas' })
  @IsNotEmpty({ message: 'Descrição é obrigatória' })
  @IsString({ message: 'Descrição deve ser uma string' })
  description: string;

  @ApiProperty({ description: 'Preço do produto', example: 1299.99 })
  @IsNotEmpty({ message: 'Preço é obrigatório' })
  @IsNumber({}, { message: 'Preço deve ser um número' })
  @Min(0, { message: 'Preço deve ser maior que zero' })
  price: number;

  @ApiPropertyOptional({ description: 'URL da imagem do produto', example: 'https://example.com/image.jpg' })
  @IsOptional()
  @IsString({ message: 'Imagem deve ser uma string' })
  image?: string;
} 