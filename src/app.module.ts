import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { MessagesController } from './controllers/messages/messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MessagesService } from './services/messages/messages.service';
import { MessageEntity } from './model/entities/message-entity.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:
        process.env.DATABASE_URL ||
        'postgres://qflhpcygawradf:cb806862766b6d305a4f0e4abf40ad5f064c35138aa3aa11a7320bbdbf1c83db@ec2-107-23-76-12.compute-1.amazonaws.com:5432/d4m21mlhgup9gv',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([MessageEntity])
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessagesService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
