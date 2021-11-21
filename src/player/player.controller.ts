import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {

    constructor(private readonly service: PlayerService){}

    @Get()
    listPlayers(): Promise<Player[]> {
        return this.service.listPlayers();
    }

    @Get(':id')
    listPlayer(
        @Param('id') id: string
    ): Promise<Player> {
        return this.service.listPlayer(id);
    }

    @Post()
    createPlayer(
        @Body() createPlayerDto: CreatePlayerDto
    ): Promise<Player> {
        return this.service.createPlayer(createPlayerDto);
    }

}
