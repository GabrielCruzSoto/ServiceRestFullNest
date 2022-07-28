import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { MessagesController } from './controllers/messages/messages.controller';

@Module({
  imports: [],
  controllers: [AppController, MessagesController],
  providers: [AppService],
})
export class AppModule {}
