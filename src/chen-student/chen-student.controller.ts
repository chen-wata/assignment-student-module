import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ChenStudentService } from './chen-student.service';
import { Student } from './student.entity';

@Controller('chen-student')
export class ChenStudentController {
    constructor(private readonly studentService: ChenStudentService) {}

    @Post()
    async createStudent(@Body() data: Partial<Student>): Promise<Student> {
      return this.studentService.createStudent(data);
    }

    @Get()
    async getStudent(): Promise<Student[]> {
        return this.studentService.getStudents();
    }

    @Get(':id')
    async getStudentById(@Param('id') id: number): Promise<Student> {
        return this.studentService.getStudentById(id);
    }

    @Put(':id')
    async updateStudent(
        @Param('id') id: number,
        @Body() data: Partial<Student>,
    ): Promise<Student> {
        return this.studentService.updateStudent(id, data);
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id: number): Promise<void> {
        return this.studentService.deleteStudent(id);
    }
}
