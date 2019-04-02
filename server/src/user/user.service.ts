import {ForbiddenException, HttpException, HttpStatus, Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";
import { User } from "./user.entity";
import {UserCreateDto, UserRO} from "./user-create.dto";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    async showAll(): Promise<UserRO[]>{
        const users = await this.userRepository.find();
        return users.map(user => user.toResponseObject());
    }

    async login(data: UserCreateDto): Promise<UserRO>{
        const{username, password} = data;
        const user = await this.userRepository.findOne({where: {username}});
        if(!user || !await user.comparePassword(password)){
            throw new HttpException('Invalid username/password', HttpStatus.BAD_REQUEST);
        }
        return user.toResponseObject();
    }

    async register(data: UserCreateDto): Promise<UserRO>{
        const{username} = data;
        let user = await this.userRepository.findOne({where: {username}});
        if(user){
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        }

        user = await this.userRepository.create({...data});
        await this.userRepository.save(user);
        return user.toResponseObject();
    }

    async findAll(): Promise<User[]|null>{
        return await this.userRepository.find();
    }

    async findOne(id: string): Promise<User|null>{
        const user = await this.userRepository.findOne({id});
        if(!user){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return user;
    }

    async update(id: string, data: Partial<UserCreateDto>): Promise<User|null>{
        const user = await this.userRepository.findOne({id});
        if(!user){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        await this.userRepository.update({id}, data);
        return await this.userRepository.findOne({id});
    }

    async create(data: UserCreateDto): Promise<User|null>{
        const user = await this.userRepository.create({...data});
        await this.userRepository.save(user);
        return user;
    }

    async delete(id: string): Promise<User|null>{
        const user = await this.userRepository.findOne({id});
        if(!user){
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        await this.userRepository.delete({id});
        return user;
    }

}