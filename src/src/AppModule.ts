import { Module } from '@nestjs/common';
import { ApiModule } from './api/ApiModule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ApiModule,
  ],
})
export class AppModule {}
