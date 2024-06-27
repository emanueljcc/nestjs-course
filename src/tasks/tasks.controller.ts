import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common'
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

// generalizando ruta
@Controller('/tasks')
@ApiTags('tasks')
export class TasksController {
    tasksService:TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Return all tasks' })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    getAllTasks(@Query() query: any) {
        console.log({query});
        return this.tasksService.getTasks();
    };

    @Get('/:id')
    @ApiOperation({ summary: 'Create Tasks' })
    getTask(@Param() params: any) {
        const { id } = params;
        return this.tasksService.getTask(Number(id));
    };

    // continuacion ruta
    @Post()
    // usa la valiacion del interface o class DTO
    // @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTaskDTO) {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDTO) {
        return this.tasksService.updateTask(task);
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }

    // actualiza solo una porcion de una tarea {title: 'sdfsdf', status: true} -> solo el status, method recomendado para porciones
    @Patch()
    updateTaskStatus() {
        return this.tasksService.updateTaskStatus();
    }
}