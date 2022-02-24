import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Todo } from 'src/entities/Todo';
import { CreateTodoDTO, FindTodoResponseDTO, UpdateTodoDTO } from './dto/todoDto';
import { TodoService } from './todo.service';


@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService){}

    @Get('/:todoId')
    getTodoById( @Param('todoId') todoId: string) : FindTodoResponseDTO {
        return this.todoService.getTodoById(todoId);
    }
    @Delete('/:todoId')
    deleteTodoById( @Param('todoId') todoId: string): string {
        return this.todoService.deleteTodoById(todoId);
    }
    @Patch('/:todoId') 
    updateTodoById(@Body() params,@Param('todoId') todoId: string): UpdateTodoDTO {
        return this.todoService.updateTodoById(params,todoId);
        
    }

    @Get()
    getTodos() : FindTodoResponseDTO[]{
       
        return this.todoService.getTodos();
    }
    @Post() 
    addTodo(@Body() body: Todo): CreateTodoDTO{
      return this.todoService.addTodo(body);
    }
}
