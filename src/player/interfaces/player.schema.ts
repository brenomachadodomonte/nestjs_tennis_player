import * as mongoose from 'mongoose'

export const PlayerScheema = new mongoose.Schema({
    cellphone: {type: String },
    email: {type: String, unique: true},
    name: String,
    ranking: String,
    rankingPosition: Number,
    photoUrl: String
}, { timestamps: true });