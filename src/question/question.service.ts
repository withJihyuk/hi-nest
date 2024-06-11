import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { questionEntity } from './entities/question.entity';
// import { UserEntity } from '../global/user/entities/user.entity'

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(questionEntity)
    private questionRepository: Repository<questionEntity>,
    // private userRepository: Repository<UserEntity>,
  ) {}

  create(createQuestionDto: CreateQuestionDto) {
    // if (
    //   this.userRepository.findOne({
    //     where: { to_user_id: createBoardDto.to_user_id },
    //   }) == undefined
    // ) {
    //   throw new NotFoundException('유저가 존재하지 않습니다.');
    // }
    return this.questionRepository.insert(createQuestionDto);
  }

  findAll(id: string) {
    return this.questionRepository.find({ where: { to_user_id: id } });
  }
}
