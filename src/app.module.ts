import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChenStudentModule } from './chen-student/chen-student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'chendb', // database name
      autoLoadEntities: true,
      synchronize: true,
    }),
    ChenStudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
