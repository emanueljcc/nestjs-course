import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';

// el interface o type creado aca se debe exportar para que en el controller no de error
export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {
    private tasks = [];

    getTasks() {
        return this.tasks;
    };

    getTask(id: number) {
        const taskFound = this.tasks.find(task => task.id === id);

        if (!taskFound) {
            return new NotFoundException(`Task no encontrada ${id}`)
        }

        return taskFound;
    };


    createTask(task: any) {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return this.tasks;
    }

    updateTask(task: any) {
        console.log(task);
        return 'actualizando tarea'
    }

    deleteTask() {
        return 'eliminando tarea'
    }

    updateTaskStatus() {
        return 'actualizando status de la tarea'
    }
}