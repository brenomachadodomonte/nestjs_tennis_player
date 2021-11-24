import { Document } from "mongoose";


export class Player extends Document {

    cellphone: string;
    email: string;
    name: string;
    ranking: string;
    rankingPosition: number;
    photoUrl: string;

}