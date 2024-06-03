import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `Return ${id}`;
  }

  @Post()
  create() {
    return 'create movies';
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return `delete movies ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string) {
    return `pathch movies ${id}`;
  }
}
