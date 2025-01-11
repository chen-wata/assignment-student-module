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
}
