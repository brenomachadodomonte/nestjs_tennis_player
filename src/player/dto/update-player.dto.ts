import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdatePlayerDto {
    
    @IsNotEmpty()
    cellphone: string;

    @IsNotEmpty()
    name: string;
}