import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './configuration/connection.config/config.module';
import { ConfigService } from './configuration/connection.config/config.service';

// class DATEBASE {
//   constructor(private config: ConfigService) {
//     const URI = config.get('DB_URI');

//   }
// }

const DATABASE_URI = process.env.DB_URI;

Logger.log(DATABASE_URI);

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRoot('mongodb://antelope:antelope19@ds347467.mlab.com:47467/db_support',
    { useNewUrlParser: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
