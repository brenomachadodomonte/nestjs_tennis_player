import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';

@Controller('player')
export class PlayerController {

    @Post()
    async createPlayer(
        @Body() createPlayerDto: CreatePlayerDto
    ): Promise<Player> {

        const { name, email, cellphone } = createPlayerDto;

        return {
            _id: '1',
            cellphone: cellphone,
            email: email,
            name: name,
            ranking: '',
            rankingPosition: 0,
            photoUrl: ''
        }      
    }

}
