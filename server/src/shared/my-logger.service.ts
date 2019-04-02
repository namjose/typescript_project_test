import {Logger} from "@nestjs/common";

export class MyLogger extends Logger{
    error(message: any, trace?: string): void {
        super.error(message);
    }
}