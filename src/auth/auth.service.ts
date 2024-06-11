import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      access_token: req.user.access_token,
    }; // 자체 토큰 발급 후 리턴 해야함
  }
}
