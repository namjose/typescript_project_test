import {IsNotEmpty} from "class-validator";

export class UserCreateDto {
    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    readonly password: string;

    readonly full_name: string;

    @IsNotEmpty()
    readonly email: string;

    readonly phone_number: string;
}

export class UserRO {
    id: string;
    username: string;
    token?: string;
}