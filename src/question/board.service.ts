import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardEntity } from './entities/board.entity';
// import { UserEntity } from '../global/user/entities/user.entity'

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardEntity)
    private boardRepository: Repository<BoardEntity>,
    // private userRepository: Repository<UserEntity>,
  ) {}

  create(createBoardDto: CreateBoardDto) {
    // if (
    //   this.userRepository.findOne({
    //     where: { to_user_id: createBoardDto.to_user_id },
    //   }) == undefined
    // ) {
    //   throw new NotFoundException('유저가 존재하지 않습니다.');
    // }
    return this.boardRepository.insert(createBoardDto);
  }

  findAll(id: string) {
    return this.boardRepository.find({ where: { to_user_id: id } });
  }
}
