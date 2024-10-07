import { Ability } from "./pokeapiDetails";

export interface PokeInfo {
    name : string;
    abilities: string[] | string;
    gender: string;
    types: string[] | string;
    size: number;
    image?: string
}

export interface PokeDetailSimple{
    id: number;
    name: string;
    image: string | undefined;
    abilities: Ability[];
    types: string[];
    size: number;
}