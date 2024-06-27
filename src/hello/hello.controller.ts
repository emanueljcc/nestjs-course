import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('hello')
export class HelloController {

    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url, '==> request.url');

        response.status(200).json({
            message: 'Hello world',
        });
    };

    @Post('/create')
    @HttpCode(201)
    somethingNew() {
        return 'Created...'
    };

    @Get('not-found')
    @HttpCode(404) // status code, usando ese decorador
    notFoundPage() {
        return '404 not found';
    }

    @Get('error')
    @HttpCode(500) // status code, usando ese decorador
    errorPage() {
        return '404 error route';
    }

    // convertir numero que se recibe en string en numero, usando pipes de nest
    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 15;
    }

    // convertir tipo de dato usando pipes de nest
    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status);
        return status;
    }

    // crear un Pipe propio un custom pipe, con comando [nest g pipe hello/pipes/validateuser]
    @Get('greet')
    // custom guard, sirve para validar rutas, headers, son como middlewares, que puedes jugar con ella para ver si se agrega una ruta como qs o algun header, validar
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}) {
        console.log(typeof query.name);
        console.log(typeof query.age);
        return `Hello ${query.name} you are ${query.age} years old`;
    }
}
