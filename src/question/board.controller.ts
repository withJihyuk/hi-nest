import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('question')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  @Get(':id')
  findAll(@Param('id') to_user_id: string) {
    return this.boardService.findAll(to_user_id);
  }
}
