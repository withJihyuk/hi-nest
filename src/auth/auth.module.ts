import { Module } from '@nestjs/common';
import { GoogleController } from './auth.controller';
import { AppService } from './auth.service';
import { GoogleStrategy } from './auth.strategy';
import { authEntity } from './entities/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([authEntity])],
  controllers: [GoogleController],
  providers: [AppService, GoogleStrategy],
})
export class AuthModule {}
