import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'nestjs-config';
import * as path from 'path';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    MongooseModule.forRoot('mongodb://localhost/dystopia'),
  ]
})
export class AppModule {}
