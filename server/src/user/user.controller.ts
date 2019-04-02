import {
    Controller,
    Get,
    Put,
    Delete,
    Post,
    Body,
    Param,
    UseGuards, Logger
} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "./user.entity";
import {UserCreateDto} from "./user-create.dto";
import {AuthGuard} from "../shared/auth.guard";
import {UserDecorator} from "./user.decorator";

@Controller()
export class UserController{
    constructor(
        private readonly userService: UserService
    ){}

    @Get('api/users')
    @UseGuards(new AuthGuard())
    showAll(@UserDecorator() user){
        console.log(user);
        return this.userService.showAll();
    }

    @Post('register')
    register(@Body() data: UserCreateDto){
        return this.userService.register(data);
    }
    @Post('login')
    login(@Body() data: UserCreateDto){
        return this.userService.login(data);
    }

    @Get()
    async findAll(): Promise<User[]|null>{
        return await this.userService.findAll();
    }

    @Get(':id')
    // @UseFilters(HttpExceptionFilter)
    async findOne(@Param('id') id: string): Promise<User>{
        return await this.userService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() userCreateDto: UserCreateDto): Promise<User>
    {
        return await this.userService.update(id, userCreateDto);
    }

    @Post()
    async create(@Body() userCreateDto: UserCreateDto): Promise<User>
    {
        return await this.userService.create( userCreateDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<User|null>
    {
        return await this.userService.delete(id);
    }
}

