import { Body, Controller, Get, Post } from '@nestjs/common';
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

    @Post()
    createPlayer(
        @Body() createPlayerDto: CreatePlayerDto
    ): Promise<Player> {
        return this.service.createPlayer(createPlayerDto);
    }

}
