import { hairI } from "./hairI";
import { bloodGroupE } from "../enum/bloodGroupE";
import { eyeColorE } from "../enum/eyeColorE";
import {genderE} from "../enum/genderE";
import { hairColorE } from '../enum/hairColorE';

export interface userInterface {
    id: number
    firstName: string,
    deparment: string,
    title: string,
    university: string,
    birthday: Date
    hair: hairI,
    eyeColor: eyeColorE,
    bloodGroup: bloodGroupE,
    gender: genderE,
    age: number,
};