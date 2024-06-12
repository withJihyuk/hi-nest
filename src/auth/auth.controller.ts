import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { authEntity } from './entities/auth.entity';
import { Repository } from 'typeorm';

@Controller('google')
export class GoogleController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }

  @Get('protected')
  @UseGuards(AuthGuard('google'))
  protectedResource(@Req() req) {
    this.appService.googleLogin(req);
  }
}

// constructor(
//   @InjectRepository(questionEntity)
//   private questionRepository: Repository<questionEntity>,
//   // private userRepository: Repository<UserEntity>,
// ) {}
