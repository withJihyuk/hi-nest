import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './question/board.module';

import { AuthModule } from './auth/auth.module';

import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    BoardModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: true,
      schema: 'public',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      // synchronize 옵션의 의미에 대해 알아보기
    }),
  ],
  controllers: [],
})
export class AppModule {}

//실제 서비스 개발해보기
