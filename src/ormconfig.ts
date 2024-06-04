import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();
//export const myDataSource = new DataSource({
const ormconfig = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  schema: 'public',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],

  // TypeOrm 자동 동기화, migration 작업을 위해 중지
  synchronize: false,

  // dist/migrations에 있는 파일들을 실행
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  // migrate run 자동 실행
  // migrationsRun: true,
});

export default ormconfig;
