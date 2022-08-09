import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from '../../model/entities/message-entity.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from '../../model/dto/create-message-dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,
  ) {}
  async getAll(): Promise<MessageEntity[]> {
    return await this.messageRepository.find();
  }
  async create(newMessage: CreateMessageDto): Promise<MessageEntity> {
    const message = new MessageEntity();
    message.nick = newMessage.nick;
    message.messageStr = newMessage.message;
    return this.messageRepository.save(message);
  }
  async update(
    id: number,
    updateMessage: CreateMessageDto,
  ): Promise<MessageEntity> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const message: MessageEntity = await this.messageRepository.findOneBy({
      id: id,
    });
    message.nick = updateMessage.nick;
    message.messageStr = updateMessage.message;
    return this.messageRepository.save(message);
  }
  async delete(id: number): Promise<any> {
    return await this.messageRepository.delete(id);
  }
}
