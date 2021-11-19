import { Injectable } from '@nestjs/common';
import { timeStamp } from 'console';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayerService {

    private players: Player[] = [];

    async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player>{
        const { name, cellphone, email } = createPlayerDto;
        const jogador: Player = {
            _id: '0',
            name,
            email,
            cellphone,
            ranking: '',
            rankingPosition: 0,
            photoUrl: ''
        }

        this.players.push(jogador);

        return jogador;
    }

    async listPlayers(): Promise<Player[]> {
        return this.players;
    }
}
