import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nick: string;

  @Column()
  messageStr: string;
}
