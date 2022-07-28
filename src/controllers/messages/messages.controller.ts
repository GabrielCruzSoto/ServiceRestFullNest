import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateMessageDto } from 'src/dto/create-message-dto';

@Controller('messages')
export class MessagesController {
    @Post()
    create(@Body() createMessageDto: CreateMessageDto){
        return 'Message create with exist';
    }
    @Get()
    getAll(){
        return 'return list message'
    }
    @Put(':id')
    update(@Body() updateMessageDto: CreateMessageDto){
        return 'Message update with exist';

    }

    @Delete()
    delete(){
        return 'message not found'
    }
}
