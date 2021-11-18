import { Controller, Post } from '@nestjs/common';

@Controller('player')
export class PlayerController {

    @Post()
    async createPlayer() {
        return {
            name: 'breno'
        }        
    }

}
