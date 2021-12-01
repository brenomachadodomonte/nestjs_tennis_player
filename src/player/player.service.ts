import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayerService {

    constructor(
        @InjectModel('Player')
        private readonly playerModel: Model<Player>
    ){}

    async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player>{
        const { email } = createPlayerDto;
        const found = await this.playerModel.findOne({ email }).exec();

        if(found) {
            throw new ConflictException(`Player with email ${email} already exists`);
        }

        const player = this.playerModel.create(createPlayerDto);

        return player;
    }

    async updatePlayer(id: string, updateDto: UpdatePlayerDto): Promise<Player> {
        const found = await this.listPlayer(id);
        return this.playerModel.findOneAndUpdate({_id: id}, updateDto, {new: true}).exec();
    }

    listPlayers(): Promise<Player[]> {
        return this.playerModel.find().exec();
    }

    async listPlayer(id: string): Promise<Player> {
        const player = await this.playerModel.findById(id).exec();

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
        const player = await this.listPlayer(id);
        await this.playerModel.deleteOne({ _id: id }).exec();
    
        return player;
    }
}
