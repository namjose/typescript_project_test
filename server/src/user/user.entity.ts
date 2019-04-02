import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from "typeorm";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: 'text', unique: true})
    username: string;

    @Column('text')
    password: string;

    @Column({length: 500})
    full_name: string;

    @Column({unique: true})
    email: string;

    @Column('text')
    phone_number: string;

    @BeforeInsert()
    async hashPasword() {
        this.password = await bcrypt.hash(this.password, 10); //hash function from bcrypt module
    }

    toResponseObject(showToken: boolean = true){
        const {id, username, token} = this;
        const responseObject = {id, username, token};
        if(showToken){
            responseObject.token = token;
        }
        return responseObject;
    }

    async comparePassword(attempt: string){
        return await bcrypt.compare(attempt, this.password); //check a hash password
    }

    private get token(){
        const {id, username} = this;
        return jwt.sign({id, username}, process.env.SECRET, {expiresIn : '7 days'});
    }
}
