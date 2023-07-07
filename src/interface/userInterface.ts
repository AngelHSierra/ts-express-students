import { hairI } from "./hairI";
import { bloodGroupE } from "../enum/bloodGroupE";
import { eyeColorE } from "../enum/eyeColorE";
import {genderE} from "../enum/genderE";

export interface userInterface {
    firstName: string,
    deparment: string,
    title: string,
    university: string,
    birthday: Date
    hair: hairI,
    eyeColor: eyeColorE,
    bloodGroup: bloodGroupE,
    gender: genderE,
    age: number
};