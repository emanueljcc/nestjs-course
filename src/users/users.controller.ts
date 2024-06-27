import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/users')
export class UsersController {
    // manera simple de importar o inyectar el servicio al controlador
    constructor(private usersService: UsersService) {}

    @ApiTags('users')
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @ApiTags('users')
    @Post()
    createUser(@Body() user: CreateUserDTO) {
        return this.usersService.createUser(user);
    }
}
