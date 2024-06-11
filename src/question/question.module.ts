import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { questionEntity } from './entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([questionEntity])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
