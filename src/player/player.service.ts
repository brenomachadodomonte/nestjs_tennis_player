import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';
import { v4 as uuid } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PlayerService {

    constructor(
        @InjectModel('Jogador')
        private readonly playerModel: Model<Player>
    ){}

    async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player>{
        const { email } = createPlayerDto;
        const found = await this.listPlayerByEmail(email);

        if(found) {
            throw new ConflictException(`Player with email ${email} already exists`);
        }

        const player = this.playerModel.create(createPlayerDto);

        return player;
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

    async listPlayerByEmail(email: string): Promise<Player> {
        const player = await this.playerModel.findOne({ email }).exec();

        if(!player) {
            throw new NotFoundException(`Player with email '${email}' not found`);
        }

        return player;
    }

    async deletePlayer(id: string): Promise<Player> {
        const player = this.listPlayer(id);
        this.players = this.players.filter(player => player._id != id);

        return player;
    }
}
