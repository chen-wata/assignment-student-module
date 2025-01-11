import { Module } from '@nestjs/common';
import { ChenStudentService } from './chen-student.service';
import { ChenStudentController } from './chen-student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [ChenStudentService],
  controllers: [ChenStudentController]
})
export class ChenStudentModule {}
