import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { InjectRepository } from '@nestjs/typeorm';
import { authEntity } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { Injectable, UnauthorizedException } from '@nestjs/common';
require('dotenv').config();
import { CreateUserDto } from './dto/create-suer.dto';
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    @InjectRepository(authEntity)
    private authRepository: Repository<authEntity>,
  ) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    try {
      const { name, emails, photos } = profile;
      const user: CreateUserDto = {
        id: profile.id,
        email: emails[0].value,
        name: name.familyName + name.givenName,
        picture: photos[0].value,
      };
      this.authRepository.upsert(user, ['id']);
      return user;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException('로그인에 실패 하였습니다.');
    }
  }
}
