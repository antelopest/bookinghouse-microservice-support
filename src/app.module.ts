import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './configuration/connection.config/config.module';

@Module({
  imports: [
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
