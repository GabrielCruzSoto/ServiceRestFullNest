import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { MessagesController } from './controllers/messages/messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
