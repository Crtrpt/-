import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { JobModule } from './job/job.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from 'nestjs-config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456Zz..*',
      database: 'shorebf',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProjectModule,
    UserModule,
    JobModule,
  ]
})
export class AppModule {}
