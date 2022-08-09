import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateMessageDto } from 'src/model/dto/create-message-dto';
import { MessagesService } from '../../services/messages/messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messageService: MessagesService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto, @Res() response) {
    this.messageService
      .create(createMessageDto)
      .then((result) => {
        response.status(HttpStatus.CREATED).json(result);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json('ERROR - NOT CREATE MESSAGE');
      });
  }
  @Get()
  getAll(@Res() response) {
    this.messageService
      .getAll()
      .then((result) => {
        response.status(HttpStatus.OK).json(result);
      })
      .catch(() => {
        response.status(HttpStatus.NOT_FOUND).json('ERROR - NOT FOUND MESSAGE');
      });
  }
  @Put(':id')
  update(
    @Body() updateMessageDto: CreateMessageDto,
    @Param('id') id,
    @Res() response,
  ) {
    this.messageService
      .update(id, updateMessageDto)
      .then((result) => {
        response.status(HttpStatus.OK).json(result);
      })
      .catch(() => {
        response
          .status(HttpStatus.NOT_FOUND)
          .json('ERROR - NOT UPDATE MESSAGE');
      });
  }

  @Delete(':id')
  delete(@Param('id') id, @Res() response) {
    this.messageService
      .delete(id)
      .then((result) => {
        response.status(HttpStatus.NOT_FOUND).json(result);
      })
      .catch(() => {
        response
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json('ERROR - NOT DELETE MESSAGE');
      });
  }
}
