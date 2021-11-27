import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';
import { ValidationPlayer } from './pipes/validation-player.pipe';
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

    @Delete(':email')
    deletePlayer(
        @Param('email', ValidationPlayer) id: string
    ): Promise<Player> {
        return this.service.deletePlayer(id);
    }
}
