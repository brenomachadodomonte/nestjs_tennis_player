import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlayerService {

    private players: Player[] = [];

    async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player>{
        const { name, cellphone, email } = createPlayerDto;
        const jogador: Player = {
            _id: uuid(),
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

    async listPlayer(id: string): Promise<Player> {
        const player  = this.players.find(player => player._id === id)

        if(!player) {
            throw new NotFoundException(`Player with id '${id}' not found`);
        }

        return player;
    }
}
