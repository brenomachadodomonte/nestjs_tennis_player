import { IsEmail, IsNotEmpty } from "class-validator";


export class CreatePlayerDto {
    
    @IsNotEmpty()
    cellphone: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;
}