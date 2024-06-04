import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardEntity } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardEntity)
    private boardRepository: Repository<BoardEntity>,
  ) {}

  create(createBoardDto: CreateBoardDto) {
    return this.boardRepository.insert(createBoardDto);
  }

  findAll() {
    return this.boardRepository.find();
  } // 글 상세 내용은 안가게 수정해야 함

  findOne(id: number) {
    return this.boardRepository.findOne({ where: { id } });
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.boardRepository.update(id, updateBoardDto);
  }

  remove(id: number) {
    return this.boardRepository.delete(id);
  }
}
