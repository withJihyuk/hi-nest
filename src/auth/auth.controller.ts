import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class GoogleController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }
}
