import { Module } from '@nestjs/common';
import { GoogleController } from './auth.controller';
import { AppService } from './auth.service';
import { GoogleStrategy } from './auth.strategy';

@Module({
  imports: [],
  controllers: [GoogleController],
  providers: [AppService, GoogleStrategy],
})
export class AuthModule {}
