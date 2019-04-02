import {createParamDecorator} from '@nestjs/common';

export const UserDecorator = createParamDecorator((data, req) => {
    return data ? req.user[data] : req.user;
});