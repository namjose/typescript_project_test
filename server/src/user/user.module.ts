import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserService} from './user.service';
import {UserController} from "./user.controller";
import {User} from "./user.entity";
import {APP_FILTER} from "@nestjs/core";
import {HttpExceptionFilter} from "../shared/http-exception.filter";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [
        UserService,
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        }],
    controllers: [UserController],
})
export class UserModule {
}